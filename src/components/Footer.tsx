"use client";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/50 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-600">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-orange-500/70">Muskaan</span>. Built with Next.js &amp; Tailwind.
        </p>
        <div className="flex items-center gap-1.5 text-xs text-zinc-700">
          <span className="inline-block w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
          Available for opportunities
        </div>
      </div>
    </footer>
  );
}
