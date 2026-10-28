import { profile } from "@/data/profile";

export default function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="shell flex flex-col gap-3 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-medium text-foreground">{profile.name}</p>
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
          © 2026 · Built with Next.js and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
