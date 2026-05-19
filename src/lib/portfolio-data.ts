import {
  SiReact, SiTailwindcss, SiJavascript, SiHtml5, SiCss,
  SiNodedotjs, SiExpress, SiPython, SiFlask, SiMongodb,
  SiGit, SiGithub, SiPostman, SiOpencv, SiLangchain, SiN8N,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaBrain, FaProjectDiagram, FaRobot, FaDatabase, FaServer } from "react-icons/fa";
import { TbApi, TbBrandOpenai } from "react-icons/tb";
import type { IconType } from "react-icons";

export const PROFILE = {
  name: "Aditya Gour",
  role: "Full Stack AI Developer",
  location: "Bhopal, India",
  tagline:
    "Building AI-powered projects, automation workflows, RAG systems, and modern web solutions using APIs, LLMs, and AI frameworks.",
  email: "aadityagour1203@gmail.com",
  phone: "+91 8827585377",
  socials: {
    linkedin: "https://www.linkedin.com/in/aditya-gour-72ba47344",
    github: "https://github.com/adityawork365-commits",
    instagram: "https://www.instagram.com/_aditya_gourr__/",
  },
};

export const ABOUT =
  "Aditya Gour is a BCA student from Jagran Lakecity University with experience in AI development, workflow automation, APIs, RAG systems, and AI-assisted development. Currently working as an AI Developer Intern and actively learning modern AI frameworks and tools.";

type Skill = { name: string; icon: IconType };
type SkillGroup = { title: string; icon: IconType; skills: Skill[] };

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Frontend",
    icon: SiReact,
    skills: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
      { name: "JavaScript", icon: SiJavascript },
      { name: "React.js", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend",
    icon: FaServer,
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "Python", icon: SiPython },
      { name: "Flask", icon: SiFlask },
      { name: "REST APIs", icon: TbApi },
    ],
  },
  {
    title: "Database",
    icon: FaDatabase,
    skills: [{ name: "MongoDB", icon: SiMongodb }],
  },
  {
    title: "AI & Automation",
    icon: FaBrain,
    skills: [
      { name: "Prompt Engineering", icon: TbBrandOpenai },
      { name: "RAG", icon: FaProjectDiagram },
      { name: "LLM Basics", icon: FaRobot },
      { name: "LangChain", icon: SiLangchain },
      { name: "LangGraph", icon: SiLangchain },
      { name: "LangSmith", icon: SiLangchain },
      { name: "LangFlow", icon: SiLangchain },
      { name: "YOLO", icon: FaRobot },
      { name: "OpenCV", icon: SiOpencv },
      { name: "NLP", icon: FaBrain },
      { name: "Sentence Transformers", icon: FaBrain },
      { name: "Workflow Automation", icon: FaProjectDiagram },
      { name: "n8n", icon: SiN8N },
    ],
  },
  {
    title: "Tools",
    icon: SiGit,
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "VS Code", icon: VscVscode },
      { name: "Postman", icon: SiPostman },
    ],
  },
];

export const EXPERIENCE = [
  {
    role: "AI Developer Intern",
    company: "Blue Planet Infosolutions (India) Private Limited",
    duration: "6 Months",
    bullets: [
      "Workflow automation",
      "API integration",
      "AI tool implementation",
      "Alert API systems",
      "AI-assisted development",
    ],
  },
  {
    role: "Web Development Intern",
    company: "UpToSkill",
    duration: "3 Months",
    bullets: [
      "Frontend development",
      "Web project implementation",
      "UI development basics",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Resume Hub",
    subtitle: "AI-Powered Resume Screening System",
    github: "https://github.com/adityawork365-commits/Resume-Hub.git",
    description:
      "An AI-powered resume screening platform using Sentence-BERT semantic similarity to rank candidates against job descriptions. Supports PDF, DOCX, TXT, PNG, and JPG resumes with OCR. Includes candidate ranking, skill extraction, CSV export, explainable AI scoring, Flask backend, and React frontend dashboard.",
    tech: ["Python", "Flask", "React.js", "Sentence Transformers", "NLP", "OCR", "APIs"],
    features: [
      "AI semantic matching",
      "Resume ranking",
      "OCR support",
      "Dashboard UI",
      "CSV export",
      "Skill extraction",
      "Explainable AI",
    ],
  },
  {
    title: "Eco-Sort AI",
    subtitle: "Real-Time Intelligent Waste Classifier",
    github: "https://github.com/adityawork365-commits/Eco-Sort-AI.git",
    description:
      "A real-time intelligent waste classification system using YOLOv8 and Streamlit that detects waste items from webcam input and provides disposal instructions dynamically.",
    tech: ["Python", "YOLOv8", "OpenCV", "Streamlit"],
    features: [
      "Real-time detection",
      "Waste categorization",
      "Disposal guidance",
      "Hazard detection",
      "FPS counter",
      "Multi-camera support",
      "Config-driven architecture",
    ],
  },
];

export const EDUCATION = {
  institution: "Jagran Lakecity University",
  degree: "Bachelor of Computer Applications (BCA)",
  period: "2023 – 2026",
  cgpa: "7.1",
};

export const CERTIFICATIONS = [
  { title: "Claude Code in Action", issuer: "Anthropic" },
  { title: "Gen AI Engineering Mastermind", issuer: "Outskill" },
  { title: "Frontend Development", issuer: "OneRoadmap" },
  { title: "Cisco Networking Basics", issuer: "Coursera" },
  { title: "Knowledge Management", issuer: "NPTEL" },
  { title: "IT for Business Success", issuer: "HP LIFE" },
];

export const NAV_SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];