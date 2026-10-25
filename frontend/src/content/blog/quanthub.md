---
title: "QuantHub: the research lab I was missing"
date: 2026-10-24
summary: "What QuantHub is, how it was built, and what it solved for me, plus some reflections on finance after a few years in the space."
tags: [quanthub, quant, software, markets]
---

*What it is, how it was built, and what it solved for me.*

## The hole in my stack

QuantHub is the research lab I felt I was missing between all the software I use to invest and trade.

Not everyone can shell out over thirty grand a year for a Bloomberg Terminal, and I believe retail traders should be able to make the most informed decisions they can for the lowest cost they can. So you're left with a dilemma: with the tools you can actually afford, how do you inform a decision about the market?

For me the answer has always been reconciling fundamentals with quantitative measures, and there aren't many applications that do both. Godel Terminal is probably the best example of a product that gets close: immersive, collaborative, rich in data, with modules for basically the full stack of the investing process. But there's still a hole in the space, and it's the graduate-level material: the quantitative methods that sit underneath portfolio construction and risk. Volatility surfaces. Regime models. State-space filters. Honest backtests. Position sizing that admits how uncertain its own inputs are.

That's where QuantHub lives. It's a set of esoteric quantitative workflows pointed at longer-term decisions: what the model-based signals are telling you, what the fundamentals say, and how the two square with the market you're actually in.

## What it does today

QuantHub v1.0 shipped on October 19th, and I've kept building on it since. It's a desktop app, and right now it is entirely tailored to my needs, my investment goals, and my portfolio. Here's what's in it:

- **Market data.** Daily history from Interactive Brokers (read-only) or CSV files from anywhere else, all validated and stored locally in SQLite. Data accumulates on your machine over time, and any request that can be answered from disk never hits an API.
- **The labs.**
  - a Simulator for geometric Brownian motion and Monte Carlo, checked against the closed forms
  - a GARCH Lab for conditional volatility
  - an Options Lab: Black–Scholes–Merton, implied vol, multi-leg strategies, and a Monte Carlo check
  - a Volatility Lab that fits SVI and SSVI implied-vol surfaces to real SPY and SPX option chains and checks them for arbitrage
  - a Kalman Lab that filters a hidden price level and trend out of noisy closes
  - a Markov Lab for hidden market regimes
- **Research.** A walk-forward backtester with explicit trading costs, six daily strategies, parameter sweeps scored with a deflated Sharpe ratio, saved runs you can replay exactly, and a small paper library that links PDFs to the experiments they inspired.
- **Portfolio.** Import your positions and see the risk: VaR and expected shortfall, each holding's share of the risk next to its share of the value, alphas and betas with honest standard errors, and a growth view that replays your current mix through history (options repriced in full) to show which sleeves are actually earning their place.
- **Valuation.** A discounted cash flow model fed straight from a company's SEC filings, including a reverse DCF that tells you what growth the current price is already assuming.
- **Review.** My own trading rules, written down in a plain text file and graded against my book every time I press a button.

Is all of that necessary? Do you really need SVI volatility surfaces and a hidden Markov model to hold raw beta exposure with a hedge sleeve, keeping volatility drag down so your compounded annual growth rate stays up? No. But it's not about that. It's about knowledge: knowing what's out there and how the big dawgs make their decisions. In any case, I digress.

## How it's built

v1.0 took about ten weeks, built by me and an AI agent, and the split was pretty clear. The front end is a PySide6 (Qt) interface with pyqtgraph charts and a Plotly-rendered 3D volatility surface, and it was entirely implemented by my agent. (It started life in Tkinter and was migrated to Qt halfway through, which is a story for another post.) The backend is where I spent my time and where I take the most pride. That meant discretizing mathematical models and deriving each one in its docstring before writing a line of it, persisting to SQLite and querying it to minimize API calls, and replaying arbitrary books of stocks and options through history. I loved learning all of it, programming it, and debugging it.

Today it's roughly 29,000 lines of Python, plus another 11,000 or so of tests. A few design decisions carry most of the weight.

**Layers, and imports only point down.** The code is split into packages with strict jobs:

```
gui/        renders state and forwards intent: no math, no broker calls
services/   the app's facade: caching, syncing, assembling what a page needs
models/     pure quant models: Black–Scholes, GARCH, SVI, Kalman, Markov
data/       pure domain types and analytics, usable from a notebook
broker/     the only package that talks to Interactive Brokers
storage/    SQLite persistence
```

A test fails the suite if anything imports upward. The payoff is that every model is just a function on data. It works the same in the GUI, in a test, in a script, or in a Jupyter notebook, and it can't quietly come to depend on a button existing.

**Two threading rules.** A desktop app that talks to a broker lives and dies by its concurrency, and QuantHub's whole design falls out of two rules. First, only the GUI thread touches widgets. Background work runs on a single worker thread, and results come back to the interface through one timer that drains a queue every 16 milliseconds. Second, the IBKR API's callback-and-thread model never leaves one file. Inside the broker module, callbacks fill buffers and set events, and everything outside it sees plain blocking calls with timeouts that raise a typed error. No other part of the code has to know how Interactive Brokers' software works.

**One path for data.** Every page asks for prices by naming a source; there's no global "current data source" to drift out of sync. A cache sits in front of the broker and checks what the database already covers. A full hit is served from disk, a partial hit fetches only the missing range, and a miss fetches the whole thing. Whatever comes back is validated and persisted, then served from the store. So every consumer, from the charts to the backtester, works off the same validated price history, and none of them care where it came from. Prices are kept on two bases, as traded and dividend-adjusted, and a stock split that happens after a symbol is cached gets caught and repaired.

**Known truths first.** Every model is built against a synthetic world before it touches real data. If I simulate a GARCH process with known parameters, the fit should recover them. If I plant a trend, a momentum rule should find it. If I hand the backtester a pure random walk, the deflated Sharpe ratio should flag the "best" strategy as noise. The synthetic labs show TRUE and ESTIMATE side by side, and the tests check results against closed-form moments. Real data has no answer key, so the synthetic one is how I know the machinery works before I trust it with anything that matters.

**Read-only by design.** There is no order code anywhere in the app. QuantHub informs decisions, and I place trades by hand. That was a deliberate first step, not an oversight.

**Reproducible.** A saved backtest keeps the exact prices it used, its parameters, its fitted values, and a fingerprint of the code that ran it. Reopening one warns you if the implementation has changed since. The database is versioned, and before any schema change the app backs up the whole thing and never deletes those copies itself.

## Where it's going

The app has much, much more ground to cover, and none of what follows exists yet. In my wildest dreams I fit all of the quantitative finance literature into it, one paper at a time: each one derived, tested against a planted truth, and run on my own holdings. I want it to be useful to the general trader no matter what their software stack is, beyond the Interactive Brokers and CSV paths it supports now. Eventually I want it to run real algorithms, starting with paper trading and only then live execution, as its own careful design phase. And I'd love to put some of it behind REST endpoints on my own home server, so people can use it without installing anything.

There's a real hole in the fintech world, and my agent and I aren't going to fill it on our own. But as long as QuantHub is useful to me, helping me build meaningful convexity into my portfolio until it snowballs to the point where my assets pay for my lifestyle (that's retirement), it's doing its job.

## What a couple of years of this taught me

What I aspire to in my career is to make the best decision I can at every turn. Before I got into UW–Madison's College of Engineering, back at Madison Area Technical College, I became infatuated with finance, trading, and economics. A few years and one quant workstation later, these are the ideas I keep coming back to. I hold them as working theories rather than conclusions.

**The boring answer is probably the right one for almost everyone, me included.** Raw beta exposure (own the market, hold it, leave it alone) is the advice of prior generations, and it's easy to dismiss as a platitude. Building QuantHub made me take it more seriously, not less. William Sharpe's "The Arithmetic of Active Management" makes the case in about a page. Before costs, the average actively managed dollar has to earn the market's return, because taken together, active investors *are* the market. After costs, it has to earn less. In a game where the average participant does worse than the market, simply matching it isn't a bad result.

**You can know far less about expected returns than you'd think.** This one surprised me the most. The standard error of an estimated mean return is roughly the volatility divided by the square root of the number of years of data. For a broad stock index with volatility around 16 to 20 percent, one year of data leaves your estimate of the expected return about as uncertain as the volatility itself. Even with twenty-five years, you're only down to plus or minus three or four percent, a big chunk of the equity premium you were trying to measure in the first place. Volatility can be estimated pretty well. The mean, the number everyone actually wants, mostly hides in the noise. That's why QuantHub shows the Kelly fraction with its standard error next to it, and why that error bar is usually humbling. If the most important input is the one you can measure worst, a lot of the precision in finance starts to look more decorative than real, and maybe the honest edge is just knowing how wide your error bars are.

**Compounding runs on the geometric return, not the average one.** Long-run growth is roughly the average return minus half the variance, so two portfolios with the same average return can compound at very different rates if one swings around more. That's the whole idea behind how I invest. Hold the beta, then add hedges and other return streams that are orthogonal to it, sized so they buy back more growth through lower volatility than they cost. Whether a given hedge actually does that is an empirical question. Answering it honestly, rather than by vibes, is a big part of what QuantHub solved for me.

**Alpha might not disappear so much as get more expensive.** It's tempting to say that once the easy alpha is extracted, the only edges left are information or infrastructure arbitrage, and finance becomes a boring field. There's an old argument that complicates that picture. In 1980, Grossman and Stiglitz pointed out that if prices were perfectly efficient, nobody would get paid for the work that makes them efficient, so nobody would do it, and prices would stop being efficient. The more stable picture is a market that's *almost* efficient, where excess returns shrink toward roughly what it costs to find them. If that's right, the frontier doesn't vanish. It moves, toward better data, faster infrastructure, more capital, and more careful statistics, and the real skill becomes knowing whether an edge clears its own costs.

You can sort of watch that happen. Much of the industry's center of gravity seems to have shifted from the lone discretionary stock picker toward systematic shops and platforms that run many small, diversified bets at once. Venture capital and private equity sit on a different curve entirely. In venture, a small number of outcomes tend to account for most of the returns, so the business looks less like picking winners and more like deliberately holding a portfolio of long shots and needing one or two to land. I don't know where the field goes from here. Maybe it does get boring. Maybe the frontier just keeps moving somewhere new. Either way, I find it immensely interesting to watch.

**None of this changes why I built it.** The boring conclusion doesn't make the quantitative side any less fascinating. Filtering, estimation under noise, simulation, and optimization show up all over engineering, and they transfer to a huge range of problems. I'm headed for a career in hardware engineering, and it may never lean on my days of studying finance and programming in Python. I would never regret doing it.

## Try it

QuantHub is open source under the MIT license, on GitHub at [github.com/aadabathon/quanthub](https://github.com/aadabathon/quanthub). It runs fully on synthetic data with no broker connection at all, so you can clone it and poke around the labs in a few minutes. If you're a retail trader who feels like something is missing from your decision-making process, take a look and see whether it can help you reach your investing goals.
