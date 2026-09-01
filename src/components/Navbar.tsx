import { useState } from "react";

const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="fixed top-3 left-1/2 z-50 flex min-h-15 w-[calc(100%-1.5rem)] max-w-7xl -translate-x-1/2 items-center justify-between rounded-full border border-line bg-page-soft/85 py-1 pr-1 pl-4 shadow-2xl shadow-black/30 backdrop-blur-xl md:top-4 md:min-h-16 md:w-[calc(100%-2rem)] md:py-3 md:pr-4 md:pl-6">
      <a
        className="text-lg font-black tracking-[-0.04em] no-underline"
        href="#home"
        onClick={closeMenu}
        aria-label="Hojune Kim — home"
      >
        HK<span className="text-accent">.</span>
      </a>

      <button
        className="grid size-12 place-content-center rounded-full border border-line bg-panel md:hidden"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span className="my-1 block h-0.5 w-5 bg-white" />
        <span className="my-1 block h-0.5 w-5 bg-white" />
      </button>

      <nav
        id="primary-navigation"
        className={[
          "absolute top-[calc(100%+0.6rem)] right-0 left-0 rounded-2xl border border-line bg-page-soft/98 p-2 shadow-2xl shadow-black/50 transition duration-200",
          "md:visible md:static md:translate-y-0 md:border-0 md:bg-transparent md:p-0 md:opacity-100 md:shadow-none",
          isMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0",
        ].join(" ")}
        aria-label="Main navigation"
      >
        <ul className="m-0 flex list-none flex-col items-stretch gap-0.5 p-0 md:flex-row md:items-center">
          {navigationLinks.map((link) => (
            <li key={link.href}>
              <a
                className="block rounded-full px-4 py-3 text-sm font-semibold text-copy no-underline transition hover:bg-white/7 hover:text-white"
                href={link.href}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}