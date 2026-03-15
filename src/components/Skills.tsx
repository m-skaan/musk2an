"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["TypeScript", "Python", "Rust", "Go", "Java", "C++"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend & Infra",
    skills: ["Node.js", "PostgreSQL", "Redis", "Docker", "AWS", "GCP"],
  },
  {
    title: "AI / ML",
    skills: ["PyTorch", "TensorFlow", "Hugging Face", "LangChain", "OpenAI"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px orange-line" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-orange-300 font-mono text-sm tracking-widest uppercase mb-3">
            Tools of the trade
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-zinc-700/80 bg-zinc-800/90 hover:border-orange-500/35 transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-orange-300 uppercase tracking-wider mb-4">
                {cat.title}
              </h3>
              <ul className="space-y-2.5">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2.5 text-sm text-orange-600"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400/80" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 md:bottom-8"
      >
        <a href="#contact" className="cursor-pointer">
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
