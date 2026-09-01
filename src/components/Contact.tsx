const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/hojune02",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hojune-kim/",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex min-h-[85vh] scroll-mt-28 flex-col items-start justify-center px-6 py-32 md:px-10 lg:px-8"
    >
      <div className="mx-auto w-full max-w-7xl">
        <p className="text-xs font-extrabold tracking-[0.2em] text-accent uppercase">
          Contact
        </p>

        <h2 className="mt-4 max-w-5xl text-[clamp(3.5rem,11vw,8rem)] leading-[0.9] font-black tracking-[-0.07em]">
          Let&apos;s build something meaningful.
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">
          I&apos;m open to software engineering opportunities, research
          collaborations, and conversations about interesting technical
          problems.
        </p>

        <a
          className="mt-8 inline-flex min-h-13 items-center justify-center rounded-full bg-accent px-7 py-3 text-sm font-extrabold text-page no-underline transition hover:-translate-y-0.5 hover:bg-accent-light"
          href="mailto:hojunekim1202@gmail.com"
        >
          Email me
        </a>

        <ul
          className="mt-8 flex list-none flex-wrap gap-6 p-0"
          aria-label="Contact links"
        >
          {contactLinks.map((link) => (
            <li key={link.label}>
              <a
                className="font-bold text-copy no-underline transition hover:text-accent"
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label} ↗
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}