const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/hojune02",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hojune-kim/",
  },
];

export default function Hero() {
  return (
    <section id="home" className="section hero">
      <div className="hero__content">
        <p className="hero__eyebrow">Hello, I&apos;m</p>

        <h1>Hojune Kim.</h1>

        <h2>Software engineer exploring AI, systems, and cybersecurity.</h2>

        <p className="hero__description">
          I&apos;m a computer science student at KAIST who enjoys understanding
          how technology works beneath the abstraction—and turning that
          understanding into working software.
        </p>

        <div className="hero__actions">
          <a className="button button--primary" href="#projects">
            View my work
          </a>

          <a className="button button--secondary" href="#contact">
            Contact me
          </a>
        </div>

        <ul className="hero__socials" aria-label="Social links">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            </li>
          ))}

          <li>
            <a href="mailto:hojunekim1202@gmail.com">Email</a>
          </li>
        </ul>
      </div>

      <div className="hero__visual" aria-hidden="true">
        <p>React</p>
        <p>TypeScript</p>
        <p>Node.js</p>
        <p>Python</p>
        <p>Linux</p>
      </div>
    </section>
  );
}