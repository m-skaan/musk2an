"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowDown, ArrowRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

const projects: Project[] = [
  {
    title: "Graph Visualization Tool",
    description: "Generate graphs from adjacency list inputs.",
    tags: ["React", "JavaScript"],
    link: "https://csvistool.com/CreateGraph",
  },
  {
    title: "InForMeal",
    description: "Crowd-sourced web-app giving updated food options at college dining halls.",
    tags: ["Python", "ML"],
    link: "https://devpost.com/software/optimeal",
  },
  {
    title: "LenguaLearn",
    description: "Immersive language learning app using AR with Snap Spectacles.",
    tags: ["Typescript", "AR/VR"],
    link: "https://devpost.com/software/lengualearn",
  },
];

const tagColors: Record<string, string> = {
  "React": "bg-blue-500/15 text-blue-300 border-blue-500/20",
  "TypeScript": "bg-blue-500/15 text-blue-300 border-blue-500/20",
  "Python": "bg-yellow-500/15 text-yellow-300 border-yellow-500/20",
  "ML": "bg-purple-500/15 text-purple-300 border-purple-500/20",
  "Go": "bg-cyan-500/15 text-cyan-300 border-cyan-500/20",
  "CLI": "bg-violet-500/15 text-violet-300 border-violet-500/20",
};

function getTagColor(tag: string) {
  return tagColors[tag] || "bg-orange-500/15 text-orange-300 border-orange-500/20";
}

export default function PersonalProjects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 340, behavior: "smooth" });
    }
  };

  return (
    <section id="personal-projects" className="relative py-28 px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px orange-line" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-orange-600 font-mono text-sm tracking-widest uppercase mb-3">
            What I&apos;ve built
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Personal <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="flex justify-center">
          <div className="flex gap-6 flex-wrap justify-center max-w-6xl">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="w-[320px] h-[320px] p-6 rounded-2xl border border-zinc-700/80 bg-zinc-800/90 backdrop-blur-sm"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-orange-600">
                    {project.title}
                  </h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 hover:text-orange-400 transition-colors flex-shrink-0"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
                <p className="text-sm text-orange-600 leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2 py-1 rounded-full border ${getTagColor(tag)}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 md:bottom-8"
      >
        <a href="#skills" className="cursor-pointer">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown size={20} className="text-orange-600 hover:text-orange-400 transition-colors" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
