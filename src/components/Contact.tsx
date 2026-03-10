"use client";

import { motion } from "framer-motion";
import { Send, Github, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px orange-line" />

      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-orange-300 font-mono text-sm tracking-widest uppercase mb-3">
            Let&apos;s connect
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-orange-600 leading-relaxed mb-10">
            Have a project in mind, want to collaborate, or just want to say hi?
            I&apos;m always open to new opportunities and conversations.
          </p>
        </motion.div>

        <motion.a
          href="mailto:hello@example.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-orange-500 text-zinc-950 font-semibold text-sm hover:bg-orange-400 transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/25"
        >
          <Send size={16} />
          Send me an email
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-4 mt-10"
        >
          {[
            { icon: Github, href: "https://github.com", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
            { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-zinc-600 text-orange-600 hover:text-orange-300 hover:border-orange-500/50 transition-all duration-200"
              aria-label={label}
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
