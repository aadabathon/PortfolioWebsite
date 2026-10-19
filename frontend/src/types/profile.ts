export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface Profile {
  name: string;
  role: string;
  location: string;
  bio: string[];
  links: {
    github: string;
    linkedin: string;
    email: string;
    phone: string;
    resume: string;
    resumeSoftware: string;
  };
  skillGroups: SkillGroup[];
}
