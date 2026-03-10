"use client";

import { motion } from "framer-motion";
import { ExternalLink, Folder, FlaskConical, Trophy } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
  link?: string;
}

const projects: Project[] = [
  {
    title: "Personal Projects",
    description:
      "A collection of passion-driven builds — from full-stack web apps to CLI tools and creative experiments that scratch an itch.",
    tags: ["Web App", "Open Source", "CLI", "AI/ML"],
    icon: <Folder size={24} />,
    link: "#",
  },
  {
    title: "Research",
    description:
      "Academic and independent research exploring the frontiers of machine learning, NLP, and human-computer interaction.",
    tags: ["Machine Learning", "NLP", "HCI", "Published"],
    icon: <FlaskConical size={24} />,
    link: "#",
  },
  {
    title: "Hackathons",
    description:
      "48-hour sprints turning wild ideas into working prototypes. Thriving under pressure and building with brilliant people.",
    tags: ["Winner", "Team Lead", "24hr Build", "Open Source"],
    icon: <Trophy size={24} />,
    link: "#",
  },
];

const tagColors: Record<string, string> = {
  "Web App": "bg-orange-500/15 text-orange-300 border-orange-500/20",
  "Open Source": "bg-emerald-500/15 text-emerald-300 border-emerald-500/20",
  "CLI": "bg-violet-500/15 text-violet-300 border-violet-500/20",
  "AI/ML": "bg-rose-500/15 text-rose-300 border-rose-500/20",
  "Machine Learning": "bg-blue-500/15 text-blue-300 border-blue-500/20",
  "NLP": "bg-cyan-500/15 text-cyan-300 border-cyan-500/20",
  "HCI": "bg-amber-500/15 text-amber-300 border-amber-500/20",
  "Published": "bg-pink-500/15 text-pink-300 border-pink-500/20",
  "Winner": "bg-yellow-500/15 text-yellow-300 border-yellow-500/20",
  "Team Lead": "bg-indigo-500/15 text-indigo-300 border-indigo-500/20",
  "24hr Build": "bg-red-500/15 text-red-300 border-red-500/20",
};

function getTagColor(tag: string) {
  return tagColors[tag] || "bg-orange-500/15 text-orange-300 border-orange-500/20";
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

export default function ProjectCards() {
  return (
    <section id="projects" className="relative py-28 px-6">
      {/* Section divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px orange-line" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-orange-400 font-mono text-sm tracking-widest uppercase mb-3">
            What I&apos;ve been up to
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Featured <span className="gradient-text">Work</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative aspect-square flex flex-col justify-between p-7 rounded-2xl border border-zinc-800/80 bg-zinc-900/50 backdrop-blur-sm card-glow transition-all duration-300 hover:border-orange-500/30"
            >
              {/* Top: icon + link */}
              <div className="flex items-start justify-between">
                <div className="p-3 rounded-xl bg-orange-500/10 text-orange-400 group-hover:bg-orange-500/20 transition-colors duration-200">
                  {project.icon}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    className="p-2 text-zinc-600 hover:text-orange-400 transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>

              {/* Middle: content */}
              <div className="flex-1 flex flex-col justify-center py-4">
                <h3 className="text-xl font-semibold mb-3 text-zinc-100 group-hover:text-orange-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Bottom: tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs px-2.5 py-1 rounded-full border ${getTagColor(tag)}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/[0.02] group-hover:to-orange-500/[0.06] transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
