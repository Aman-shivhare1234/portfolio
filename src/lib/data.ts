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
    title: "Project Alpha",
    description: "A full-stack e-commerce platform with a custom recommendation engine and a serverless architecture for scalability.",
    tags: ["React", "Node.js", "GraphQL", "AWS Lambda", "Stripe"],
    image: "https://picsum.photos/seed/project-alpha/600/400",
    imageHint: "e-commerce dashboard",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Project Beta",
    description: "An interactive data visualization dashboard for analyzing real-time financial market trends using D3.js and WebSockets.",
    tags: ["D3.js", "React", "Node.js", "WebSocket"],
    image: "https://picsum.photos/seed/project-beta/600/400",
    imageHint: "financial chart",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Project Gamma",
    description: "A collaborative project management tool with features like Kanban boards, task tracking, and real-time updates.",
    tags: ["Next.js", "Firebase", "Tailwind CSS", "Tiptap"],
    image: "https://picsum.photos/seed/project-gamma/600/400",
    imageHint: "kanban board",
    liveUrl: "#",
    githubUrl: "#",
  },
];
