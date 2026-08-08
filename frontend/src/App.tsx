import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Blog } from "./pages/Blog";
import { Home } from "./pages/Home";
import { MLTools } from "./pages/MLTools";
import { QuantTools } from "./pages/QuantTools";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="quant" element={<QuantTools />} />
        <Route path="ml" element={<MLTools />} />
      </Route>
    </Routes>
  );
}

export default App;
