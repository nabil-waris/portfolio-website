import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import ImageSearchApp from "@/public/ImageSearchApp.png";
import WeatherApp from "@/public/WeatherApp.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Undergraduate Degree",
    location: "Karachi, PK",
    description:
      "I am currently in the process of completing my bachelor's degree in Computer Science (BCS) from Karachi University",
    icon: React.createElement(LuGraduationCap),
    date: "continue",
  },
] as const;

export const projectsData = [
  {
    title: "Weather Search App",
    description:
      "Users can access real-time forecasts,temperature updates, and precipitation details seamlessly.",
    tags: ["HTML", "CSS", "JavaScript", "TypeScript"],
    imageUrl: WeatherApp,
  },
  {
    title: "Image Search App",
    description:
      "An impactful and user-friendly platform where users can search and discover images with ease.",
    tags: ["HTML", "CSS", "JavaScript", "TypeScript"],
    imageUrl: ImageSearchApp,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Framer Motion",
] as const;
