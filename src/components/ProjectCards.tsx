"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, TrendingUp, FlaskConical, Trophy, Folder, BookOpen } from "lucide-react";

interface ResearchItem {
  title: string;
  description: string;
  link?: string;
  tags: string[];
}

interface HackathonWin {
  title: string;
  award: string;
  year: string;
  link?: string;
}

interface PersonalProject {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  link?: string;
}

const researchItems: ResearchItem[] = [
  {
    title: "Research Project Title",
    description: "Brief description of your research work, methodology, and findings.",
    link: "#",
    tags: ["ML", "NLP"],
  },
  {
    title: "Another Research Project",
    description: "Description of another research project or publication.",
    link: "#",
    tags: ["HCI", "Published"],
  },
];

const hackathonWins: HackathonWin[] = [
  {
    title: "Hackathon Name",
    award: "1st Place",
    year: "2024",
    link: "#",
  },
  {
    title: "Another Hackathon",
    award: "Best Technical Implementation",
    year: "2023",
    link: "#",
  },
];

const personalProjects: PersonalProject[] = [
  {
    title: "Project Name",
    description: "Brief description of what this project does and the tech stack used.",
    tags: ["React", "TypeScript"],
    link: "#",
  },
  {
    title: "Another Project",
    description: "Description of another personal project you've built.",
    tags: ["Python", "ML"],
    link: "#",
  },
  {
    title: "Third Project",
    description: "Yet another cool project you've worked on.",
    tags: ["Go", "CLI"],
    link: "#",
  },
];

const blogPosts: BlogPost[] = [
  {
    title: "Blog Post Title",
    date: "Mar 2026",
    excerpt: "A brief excerpt or summary of your blog post content...",
    link: "#",
  },
  {
    title: "Another Post",
    date: "Feb 2026",
    excerpt: "Another interesting topic you've written about...",
    link: "#",
  },
];

const tagColors: Record<string, string> = {
  "React": "bg-blue-500/15 text-blue-300 border-blue-500/20",
  "TypeScript": "bg-blue-500/15 text-blue-300 border-blue-500/20",
  "Python": "bg-yellow-500/15 text-yellow-300 border-yellow-500/20",
  "ML": "bg-purple-500/15 text-purple-300 border-purple-500/20",
  "NLP": "bg-cyan-500/15 text-cyan-300 border-cyan-500/20",
  "HCI": "bg-amber-500/15 text-amber-300 border-amber-500/20",
  "Published": "bg-pink-500/15 text-pink-300 border-pink-500/20",
  "Go": "bg-cyan-500/15 text-cyan-300 border-cyan-500/20",
  "CLI": "bg-violet-500/15 text-violet-300 border-violet-500/20",
};

function getTagColor(tag: string) {
  return tagColors[tag] || "bg-orange-500/15 text-orange-300 border-orange-500/20";
}

export default function ProjectCards() {
  const [activeTab, setActiveTab] = useState("bloomberg");

  const tabs = [
    { id: "bloomberg", label: "Bloomberg"},
    { id: "caltech", label: "Caltech"},
    { id: "new relic", label: "New Relic"},
    { id: "tutoring", label: "Tutoring"},
  ];

  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px orange-line" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-orange-600 font-mono text-sm tracking-widest uppercase mb-3">
            What I&apos;ve been up to
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* Tabbed Interface */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Tab List - Vertical on desktop */}
          <div className="md:w-64 flex-shrink-0">
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
              {tabs.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex items-center px-4 py-3 rounded-lg text-left transition-all duration-200 whitespace-nowrap ${
                    activeTab === id
                      ? "bg-orange-500/15 border-l-4 border-orange-500 text-orange-600 font-semibold"
                      : "text-orange-600 hover:bg-orange-500/5 border-l-4 border-transparent hover:border-orange-500/30"
                  }`}
                >
                  {Icon ? <Icon size={18} className="flex-shrink-0 mr-3" /> : null}
                  <span className="text-sm">{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="flex-1 min-w-0">

            {/* Bloomberg Tab */}
            {activeTab === "bloomberg" && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="p-8 rounded-2xl border border-zinc-700/80 bg-zinc-800/90 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-orange-500/12 text-orange-300">
                    <TrendingUp size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-orange-600 mb-1">Software Engineer</h3>
                    <a
                      href="https://www.bloomberg.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-lg text-orange-600 hover:text-orange-400 transition-colors"
                    >
                      Bloomberg
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
                <p className="text-sm text-orange-600 mb-2">May 2025 - Present</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <span className="mt-2 inline-block h-2 w-2 rounded-full bg-orange-500 flex-shrink-0" />
                    <p className="text-orange-600 leading-relaxed">
                      Maintained low-latency, high-throughput C++ data service for pricing data averaging 30 million requests/day.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-2 inline-block h-2 w-2 rounded-full bg-orange-500 flex-shrink-0" />
                    <p className="text-orange-600 leading-relaxed">
                      Built internal tooling to visualize data source logic, reducing cross-team research time. 
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["C++", "Low-Latency", "High-Throughput", "React", "Distributed Systems", "Finance"].map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full border border-orange-500/20 text-orange-300 bg-orange-500/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Caltech Tab */}
            {activeTab === "caltech" && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="p-8 rounded-2xl border border-zinc-700/80 bg-zinc-800/90 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-orange-500/12 text-orange-300">
                    <FlaskConical size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-orange-600">Research</h3>
                </div>
                <div className="space-y-6">
                  {researchItems.map((item, i) => (
                    <div key={i} className="group pb-6 border-b border-zinc-700/50 last:border-0 last:pb-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h4 className="text-base font-semibold text-orange-600 group-hover:text-orange-400 transition-colors">
                          {item.title}
                        </h4>
                        {item.link && (
                          <a
                            href={item.link}
                            className="text-orange-600 hover:text-orange-400 transition-colors flex-shrink-0"
                          >
                            <ExternalLink size={16} />
                          </a>
                        )}
                      </div>
                      <p className="text-sm text-orange-600 leading-relaxed mb-3">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`text-xs px-2 py-1 rounded-full border ${getTagColor(tag)}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Hackathons Tab */}
            {activeTab === "new relic" && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="p-8 rounded-2xl border border-zinc-700/80 bg-zinc-800/90 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-orange-500/12 text-orange-300">
                    <Trophy size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-orange-600">Hackathon Wins</h3>
                </div>
                <div className="space-y-6">
                  {hackathonWins.map((win, i) => (
                    <div key={i} className="group pb-6 border-b border-zinc-700/50 last:border-0 last:pb-0">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <h4 className="text-base font-semibold text-orange-600 group-hover:text-orange-400 transition-colors mb-1">
                            {win.title}
                          </h4>
                          <p className="text-sm text-orange-600">
                            {win.award} • {win.year}
                          </p>
                        </div>
                        {win.link && (
                          <a
                            href={win.link}
                            className="text-orange-600 hover:text-orange-400 transition-colors flex-shrink-0"
                          >
                            <ExternalLink size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Projects Tab */}
            {activeTab === "tutoring" && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="p-8 rounded-2xl border border-zinc-700/80 bg-zinc-800/90 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-orange-500/12 text-orange-300">
                    <Folder size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-orange-600">Personal Projects</h3>
                </div>
                <div className="space-y-6">
                  {personalProjects.map((project, i) => (
                    <div key={i} className="group pb-6 border-b border-zinc-700/50 last:border-0 last:pb-0">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-base font-semibold text-orange-600 group-hover:text-orange-400 transition-colors">
                          {project.title}
                        </h4>
                        {project.link && (
                          <a
                            href={project.link}
                            className="text-orange-600 hover:text-orange-400 transition-colors flex-shrink-0"
                          >
                            <ExternalLink size={16} />
                          </a>
                        )}
                      </div>
                      <p className="text-sm text-orange-600 leading-relaxed mb-3">
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
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Blog Tab */}
            {activeTab === "blog" && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="p-8 rounded-2xl border border-zinc-700/80 bg-zinc-800/90 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-orange-500/12 text-orange-300">
                    <BookOpen size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-orange-600">Writing & Blog</h3>
                </div>
                <div className="space-y-6">
                  {blogPosts.map((post, i) => (
                    <div key={i} className="group pb-6 border-b border-zinc-700/50 last:border-0 last:pb-0">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h4 className="text-base font-semibold text-orange-600 group-hover:text-orange-400 transition-colors mb-1">
                            {post.title}
                          </h4>
                          <p className="text-xs text-orange-600 mb-2">{post.date}</p>
                          <p className="text-sm text-orange-600 leading-relaxed">
                            {post.excerpt}
                          </p>
                        </div>
                        {post.link && (
                          <a
                            href={post.link}
                            className="text-orange-600 hover:text-orange-400 transition-colors flex-shrink-0"
                          >
                            <ExternalLink size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
