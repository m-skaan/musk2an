"use client";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-700/60 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-orange-600">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-orange-600">Muskaan</span>. Built with Next.js &amp; Tailwind.
        </p>
        <div className="flex items-center gap-1.5 text-xs text-orange-600">
          <span className="inline-block w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
          Available for opportunities
        </div>
      </div>
    </footer>
  );
}
