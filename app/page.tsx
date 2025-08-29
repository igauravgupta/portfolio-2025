"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["intro", "skills", "work", "projects", "connect"].map((section) => (
            <button
              key={section}
              onClick={() =>
                document
                  .getElementById(section)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className={`w-2 h-8 rounded-full transition-all duration-500 ${
                activeSection === section
                  ? "bg-foreground"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-8 lg:px-16">
        <header
          id="intro"
          ref={(el) => (sectionsRef.current[0] = el)}
          className="min-h-screen flex items-center opacity-0"
        >
          <div className="grid lg:grid-cols-5 gap-16 w-full">
            <div className="lg:col-span-3 space-y-8">
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground font-mono tracking-wider">
                  PORTFOLIO / 2025
                </div>
                <h1 className="text-6xl lg:text-7xl font-light tracking-tight">
                  Gaurav
                  <br />
                  <span className="text-muted-foreground">Gupta</span>
                </h1>
              </div>

              <div className="space-y-6 max-w-md">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Engineer of intuitive digital products shaped by
                  <span className="text-foreground"> design</span>,
                  <span className="text-foreground"> code, and</span>, and
                  <span className="text-foreground"> user experience</span>.
                </p>

                <div className="space-y-3 max-w-sm">
                  <div className="grid grid-cols-2 gap-3">
                    <Link
                      href="https://github.com/igauravgupta"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                    >
                      <div className="space-y-2">
                        <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300 flex items-center gap-2">
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                          GitHub
                        </div>
                        <div className="text-sm text-muted-foreground">
                          @igauravgupta
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="https://linkedin.com/in/i-gauravgupta"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                    >
                      <div className="space-y-2">
                        <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300 flex items-center gap-2">
                          <svg
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                          LinkedIn
                        </div>
                        <div className="text-sm text-muted-foreground">
                          i-gauravgupta
                        </div>
                      </div>
                    </Link>
                  </div>

                  <Link
                    href="https://drive.google.com/file/d/1aRREttyH8O5JppBUMr9dCPVRmm2Ar7xB/view?usp=sharing"
                    download="Gaurav_Gupta_Resume.pdf"
                    className="group w-full p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm flex items-center justify-center gap-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <span className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                      Download Resume
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-end space-y-8">
              <div className="flex justify-center lg:justify-end mb-8">
                <div className="relative">
                  <img
                    src="/gaurav-gupta.jpeg"
                    alt="Gaurav Gupta - Software Engineer"
                    className="w-64 h-64 lg:w-72 lg:h-72 object-cover rounded-2xl  transition-all duration-500 border border-border/50"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/20 to-transparent"></div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">
                  CURRENTLY
                </div>
                <div className="space-y-2">
                  <div className="text-foreground">
                    Computer Science Undergrad
                  </div>
                  <div className="text-muted-foreground">
                    @ KIET Group of Institutions, Delhi
                  </div>
                  <div className="text-xs text-muted-foreground">
                    2022 — Present
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">
                  FOCUS
                </div>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    {["React.js", "Node.js", "Next.js", "MongoDB"].map(
                      (skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      )
                    )}
                  </div>
                  <div className="flex gap-2">
                    {["SQL", "PostgreSQL", "DevOps", "GenAI"].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section
          id="skills"
          ref={(el) => (sectionsRef.current[1] = el)}
          className="min-h-screen py-32 opacity-0"
        >
          <div className="space-y-16">
            <div className="flex items-end justify-between">
              <h2 className="text-4xl font-light">Proficiencies</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Frontend Box */}
              <div className="p-6 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm">
                <div className="space-y-4">
                  <div className="text-foreground font-medium text-lg">
                    Frontend Technologies
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "HTML",
                      "CSS",
                      "JavaScript",
                      "React",
                      "Next.js",
                      "Zustand",
                      "Redux",
                      "Tailwind CSS",
                      "Framer Motion",
                      "DOM",
                    ].map((skill) => (
                      <div
                        key={skill}
                        className="text-sm text-muted-foreground py-1"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Backend & Databases Box */}
              <div className="p-6 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm">
                <div className="space-y-4">
                  <div className="text-foreground font-medium text-lg">
                    Backend Technologies
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "Node.js",
                      "Express.js",
                      "REST API",
                      "Zod/Joi Validation",
                      "JWT/OAuth",
                      "DB Modeling",
                    ].map((skill) => (
                      <div
                        key={skill}
                        className="text-sm text-muted-foreground py-1"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Languages & Tools Box */}
              <div className="p-6 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm">
                <div className="space-y-4">
                  <div className="text-foreground font-medium text-lg">
                    Languages & Tools
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "JavaScript",
                      "C++",
                      "Git",
                      "GitHub",
                      "Vercel",
                      "VS Code",
                      "Linux",
                    ].map((skill) => (
                      <div
                        key={skill}
                        className="text-sm text-muted-foreground py-1"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Databases Box */}
              <div className="p-6 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm">
                <div className="space-y-4">
                  <div className="text-foreground font-medium text-lg">
                    Databases
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "SQL",
                      "PostgreSQL",
                      "Prisma ORM",
                      "MongoDB",
                      "Mongoose",
                    ].map((skill) => (
                      <div
                        key={skill}
                        className="text-sm text-muted-foreground py-1"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="work"
          ref={(el) => (sectionsRef.current[2] = el)}
          className="min-h-screen py-32 opacity-0"
        >
          <div className="space-y-16">
            <div className="flex items-end justify-between">
              <h2 className="text-4xl font-light">Selected Work</h2>
              <div className="text-sm text-muted-foreground font-mono">
                2024 — 2025
              </div>
            </div>

            <div className="space-y-12">
              {[
                {
                  duration: "Aug 2025 - Present",
                  role: "SDE Intern",
                  company: "vemakers",
                  description:
                    "Working on a comprehensive Hospital Management System with an admin panel, doctor portal, and integrated patient management features.",
                  tech: [
                    "React.js",
                    "Node.js",
                    "Express.js",
                    "NeonDB",
                    "Prisma",
                  ],
                  link: "https://drive.google.com/file/d/1dlKlr8u-1hBUKSI64Vs4gkNoytNC5fGx/view?usp=sharing",
                },
                {
                  duration: "Jul 2025 - Aug 2025",
                  role: "Full Stack Intern",
                  company: "Anany Pahal Foundation",
                  description:
                    "Designed and developed the Anany Pahal Foundation website with an integrated payment gateway for seamless online donations.",
                  tech: [
                    "React.js",
                    "Node.js",
                    "Framer Motion",
                    "Express.js",
                    "MongoDB",
                  ],
                  link: "https://drive.google.com/file/d/1qFEfBhIOrGglB4dikjebKpThYegg2GRr/view",
                },
                {
                  duration: "Jan 2025 - Feb 2025",
                  role: "Backend Developer Intern",
                  company: "vemakers - Freelance",
                  description:
                    "Developed a scalable ADHD Tracker backend with secure JWT authentication, optimized MongoDB queries (40% faster), REST APIs, and seamless Flutter integration, improving efficiency and data security by 50%.",
                  tech: [
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "GoogleAuth",
                    "JWT",
                  ],
                  link: "https://drive.google.com/file/d/1POwMvY7T-k5bFSL1jfhYzmXHZICoK-ps/view?usp=sharing",
                },
                {
                  duration: "Sept 2024 - Nov 2024",
                  role: "Full Stack Intern",
                  company: "Sajal Tech Solutions Pvt. Ltd.",
                  description:
                    "Built a full-stack Q&A platform for car enthusiasts with a reputation system, 7+ optimized REST APIs, JWT authentication, and a responsive React-Tailwind frontend, reducing spam by 50% and boosting engagement by 40%.",
                  tech: ["React", "Node.js", "Express.js", "MongoDB"],
                  link: "https://drive.google.com/file/d/13gdVW2JhZ3agbOBXo7GfrgZjZvKdf7J6/view?usp=sharing",
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className="group py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
                >
                  <div className="grid lg:grid-cols-12 gap-8 mb-4">
                    <div className="lg:col-span-2">
                      <div className="text-sm font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                        {job.duration}
                      </div>
                    </div>

                    <div className="lg:col-span-6 space-y-3">
                      <div>
                        <h3 className="text-xl font-medium">{job.role}</h3>
                        <div className="text-muted-foreground">
                          {job.company}
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end">
                      {job.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs text-muted-foreground rounded group-hover:border-muted-foreground/50 transition-colors duration-500"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-2"></div>
                    <div className="lg:col-span-9">
                      <p className="text-muted-foreground leading-relaxed">
                        {job.description}
                      </p>
                    </div>
                    <div className="lg:col-span-1 flex justify-end">
                      <Link
                        href={job.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link text-muted-foreground hover:text-foreground transition-colors duration-300"
                        title="View Experience Letter"
                      >
                        <svg
                          className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projects"
          ref={(el) => (sectionsRef.current[3] = el)}
          className="min-h-screen py-32 opacity-0"
        >
          <div className="space-y-16">
            <div className="flex items-end justify-between">
              <h2 className="text-4xl font-light">Featured Projects</h2>
              <div className="text-sm text-muted-foreground font-mono">
                TOP 4
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {[
                {
                  title: "TinyURLz – Making Links Short & Simple",
                  description:
                    "Built a secure full-stack URL Shortener with a production-ready architecture, featuring rate limiting, input validation, and zero vulnerabilities.",
                  tech: [
                    "React.js",
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "Mongoose",
                    "Google Auth",
                    "AWS",
                    "Docker",
                  ],
                  github: "https://github.com/igauravgupta/TinyURLz.git",
                  live: "https://tinyurlzz.netlify.app",
                },
                {
                  title: "MineGuard – AI-driven Regulatory Guidance Chatbot",
                  description:
                    "Worked in a 3-member team to build an AI-driven compliance and safety platform for the mining industry, featuring a LangChain-powered chatbot for real-time guidance on 100+ Indian mining laws and a secure incident reporting system with JWT authentication and file uploads via Multer and Cloudinary.",
                  tech: [
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "JWT",
                    "NLP",
                    "LangChain",
                    "LLM - Gemini",
                    "AWS",
                  ],
                  github: "https://github.com/igauravgupta/MineGuard",
                  live: "#",
                },
                {
                  title: "Skillop - Full-Stack Job Application Platform",
                  description:
                    "Integrated 4+ features including job listings, user profiles, protected routes, and search, while streamlining state management with Redux Toolkit (30% complexity reduction) and securing file handling using Multer.",
                  tech: [
                    "React",
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "Tailwind",
                    "Docker",
                  ],
                  github: "https://github.com/igauravgupta/JobQuest.git",
                  live: "https://skill-op.netlify.app",
                },
                {
                  title: "GoRide - On-demand Ride Management System",
                  description:
                    "Developed 2+ features including real-time ride tracking, driver-passenger management, and a booking system, while architecting 8+ RESTful APIs and integrating Socket.io for live ride updates.",
                  tech: [
                    "React.js",
                    "Node.js",
                    "Socket.io",
                    "Express.js",
                    "MongoDB",
                    "Google Maps API",
                  ],
                  github:
                    "https://github.com/igauravgupta/taxi-management-app-backend",
                  live: "https://goride-1.netlify.app/",
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="group p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
                >
                  <div className="space-y-6">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <h3 className="text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                          {project.title}
                        </h3>
                      </div>

                      <div className="flex items-center gap-3">
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                          title="View on GitHub"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </Link>
                        {project.live !== "#" && (
                          <Link
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                            title="View Live Project"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </Link>
                        )}
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs text-muted-foreground border border-border rounded hover:border-muted-foreground/50 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 
        <section id="thoughts" ref={(el) => (sectionsRef.current[4] = el)} className="min-h-screen py-32 opacity-0">
          <div className="space-y-16">
            <h2 className="text-4xl font-light">Recent Thoughts</h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {[
                {
                  title: "The Future of Web Development",
                  excerpt: "Exploring how AI and automation are reshaping the way we build for the web.",
                  date: "Dec 2024",
                  readTime: "5 min",
                },
                {
                  title: "Design Systems at Scale",
                  excerpt: "Lessons learned from building and maintaining design systems across multiple products.",
                  date: "Nov 2024",
                  readTime: "8 min",
                },
                {
                  title: "Performance-First Development",
                  excerpt: "Why performance should be a first-class citizen in your development workflow.",
                  date: "Oct 2024",
                  readTime: "6 min",
                },
                {
                  title: "The Art of Code Review",
                  excerpt: "Building better software through thoughtful and constructive code reviews.",
                  date: "Sep 2024",
                  readTime: "4 min",
                },
              ].map((post, index) => (
                <article
                  key={index}
                  className="group p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      <span>Read more</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        */}

        <section
          id="connect"
          ref={(el) => (sectionsRef.current[4] = el)}
          className="py-32 opacity-0"
        >
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-4xl font-light">Let's Connect</h2>

              <div className="space-y-6">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Always interested in new opportunities, collaborations, and
                  conversations about technology and design.
                </p>

                <div className="space-y-4">
                  <Link
                    href="mailto:gaurav33ch@gmail.com"
                    className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span className="text-lg">gaurav33ch@gmail.com</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">
                ELSEWHERE
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    name: "GitHub",
                    handle: "@gauravgupta",
                    url: "https://github.com/igauravgupta",
                  },
                  {
                    name: "LinkedIn",
                    handle: "i-gauravgupta",
                    url: "https://linkedin.com/in/i-gauravgupta",
                  },
                  {
                    name: "Twitter",
                    handle: "@igauravgupta_",
                    url: "https://twitter.com/igauravgupta_",
                  },
                  {
                    name: "Instagram",
                    handle: "@gaurav.chhirolya",
                    url: "https://instagram.com/gaurav.chhirolya",
                  },
                ].map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                  >
                    <div className="space-y-2">
                      <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                        {social.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {social.handle}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">
                © 2025 Gaurav Gupta. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  );
}
