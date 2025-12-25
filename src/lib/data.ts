import { Cloud, Database, Terminal, Github } from "lucide-react";
import {
  IconReact,
  IconNodeJs,
  IconExpress,
  IconTerraform,
  IconAnsible,
  IconDocker,
  IconKubernetes,
  IconPython,
  IconLinux,
} from "@/components/icons";
import type { ComponentType, SVGProps } from "react";

type Skill = {
  name: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  imageHint: string;
  liveUrl?: string;
  githubUrl: string;
};

export const PROFILE_DATA = {
  name: "Aman Shivhare",
  title: "MERN Stack Developer & Cloud Computing Enthusiast",
  email: "amanshivhare33106@gmail.com",
  phone: "8358847507",
  location: "Indore, India",
  locationLink: "https://www.google.com/maps/place/Indore,+Madhya+Pradesh",
};

export const ABOUT_TEXT = "A passionate and driven MERN stack developer with a strong foundation in cloud computing technologies. I specialize in building robust, scalable, and efficient web applications from front to back. My expertise spans across modern JavaScript frameworks, backend services, and deploying applications on cloud infrastructure. I'm always eager to learn new technologies and take on challenging projects that push my skills to the next level.";

export const SKILLS: Skill[] = [
  { name: "React.js", icon: IconReact },
  { name: "Node.js", icon: IconNodeJs },
  { name: "Express.js", icon: IconExpress },
  { name: "MongoDB", icon: Database },
  { name: "Cloud Computing", icon: Cloud },
  { name: "Terraform", icon: IconTerraform },
  { name: "Ansible", icon: IconAnsible },
  { name: "Docker", icon: IconDocker },
  { name: "Kubernetes", icon: IconKubernetes },
  { name: "Python", icon: IconPython },
  { name: "Bash", icon: Terminal },
  { name: "Linux", icon: IconLinux },
];

export const PROJECTS: Project[] = [
  {
    title: "criticeye.com",
    description: "A full-stack e-commerce platform with a custom recommendation engine and a serverless architecture for scalability.",
    tags: ["E-commerce", "React", "Node.js", "Serverless"],
    image: "https://picsum.photos/seed/criticeye/600/400",
    imageHint: "e-commerce platform",
    liveUrl: "https://criticeye.com",
    githubUrl: "#",
  },
  {
    title: "toppertool.com",
    description: "An online platform to help students prepare for competitive exams with practice tests and performance analytics.",
    tags: ["EdTech", "Next.js", "Firebase", "Tailwind CSS"],
    image: "https://picsum.photos/seed/toppertool/600/400",
    imageHint: "online learning platform",
    liveUrl: "https://toppertool.com",
    githubUrl: "#",
  },
];
