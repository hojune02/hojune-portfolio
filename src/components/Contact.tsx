import Reveal from "./Reveal";

const contactLinks = [
  {
    label: "GitHub",
    value: "github.com/hojune02",
    href: "https://github.com/hojune02",
  },
  {
    label: "LinkedIn",
    value: "Hojune Kim",
    href: "https://www.linkedin.com/in/hojune-kim/",
  },
];

export default function Contact() {
  return (
    <section
      className="flex min-h-[85vh] scroll-mt-28 items-center px-6 py-32 md:px-10 lg:px-8"
    >
      <Reveal     id="contact" className=" mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-[minmax(0,1.25fr)_minmax(360px,0.75fr)] lg:gap-24">
        <div>
          <p className="text-xs font-extrabold tracking-[0.2em] text-accent uppercase">
            Contact
          </p>

          <h2 className="mt-4 max-w-4xl text-[clamp(3.5rem,9vw,7rem)] leading-[0.9] font-black tracking-[-0.07em]">
            Let&apos;s build something meaningful.
          </h2>
        </div>

        <div className="rounded-3xl border border-line bg-panel/80 p-7 shadow-2xl shadow-black/25 backdrop-blur-md md:p-9">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/3 px-3 py-2 text-xs font-bold text-muted">
            <span className="size-2 rounded-full bg-emerald-300 shadow-[0_0_0_5px_rgb(110_231_183_/_10%)]" />
            Available for opportunities
          </span>

          <h3 className="mt-7 text-3xl font-extrabold tracking-[-0.04em]">
            Start a conversation.
          </h3>

          <p className="mt-4 leading-7 text-muted">
            I&apos;m open to software engineering opportunities, research
            collaborations, and conversations about interesting technical
            problems.
          </p>

          <a
            className="mt-7 inline-flex min-h-13 w-full items-center justify-between rounded-xl bg-accent px-5 py-3 font-extrabold text-page no-underline transition hover:-translate-y-0.5 hover:bg-accent-light"
            href="mailto:hojunekim1202@gmail.com"
          >
            <span>Email me</span>
            <span aria-hidden="true">↗</span>
          </a>

          <div className="mt-8 border-t border-line">
            {contactLinks.map((link) => (
              <a
                className="group flex items-center justify-between gap-6 border-b border-line py-5 no-underline"
                href={link.href}
                target="_blank"
                rel="noreferrer"
                key={link.label}
              >
                <span>
                  <small className="block text-xs font-bold tracking-[0.12em] text-muted uppercase">
                    {link.label}
                  </small>

                  <strong className="mt-1 block text-sm text-copy transition group-hover:text-white">
                    {link.value}
                  </strong>
                </span>

                <span
                  className="text-xl text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}