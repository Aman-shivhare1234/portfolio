import { Cloud, Database, Terminal } from "lucide-react";
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
  {
    name: "React.js",
    icon: IconReact,
  },
  {
    name: "Node.js",
    icon: IconNodeJs,
  },
  {
    name: "Express.js",
    icon: IconExpress,
  },
  {
    name: "MongoDB",
    icon: Database,
  },
  {
    name: "Cloud Computing",
    icon: Cloud,
  },
  {
    name: "Terraform",
    icon: IconTerraform,
  },
  {
    name: "Ansible",
    icon: IconAnsible,
  },
  {
    name: "Docker",
    icon: IconDocker,
  },
  {
    name: "Kubernetes",
    icon: IconKubernetes,
  },
  {
    name: "Python",
    icon: IconPython,
  },
  {
    name: "Bash",
    icon: Terminal,
  },
  {
    name: "Linux",
    icon: IconLinux,
  },
];
