"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/profile";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const ids = ["home", ...navItems.map((item) => item.href.slice(1))];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((section) => section !== null);

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="shell flex h-16 items-center justify-between gap-6">
        <a
          href="#home"
          className="text-[15px] font-semibold tracking-[-0.01em] text-foreground"
        >
          {profile.name}
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {navItems.map((item) => {
              const isActive = activeId === item.href.slice(1);

              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "location" : undefined}
                    className={`inline-block border-b-2 pb-1 font-mono text-[11px] font-medium uppercase tracking-[0.16em] transition-colors ${
                      isActive
                        ? "border-accent text-accent"
                        : "border-transparent text-foreground hover:text-accent"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-[2px] border border-border text-foreground md:hidden"
        >
          {isOpen ? (
            <X size={18} aria-hidden="true" />
          ) : (
            <Menu size={18} aria-hidden="true" />
          )}
        </button>
      </div>

      <div id="mobile-menu" hidden={!isOpen} className="border-t border-border md:hidden">
        <nav aria-label="Mobile">
          <ul className="shell divide-y divide-border">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={
                    activeId === item.href.slice(1) ? "location" : undefined
                  }
                  className={`block py-4 text-lg font-medium ${
                    activeId === item.href.slice(1)
                      ? "text-accent"
                      : "text-foreground"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
