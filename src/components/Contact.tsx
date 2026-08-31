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
    <section id="contact" className="section contact">
      <p className="section__label">Contact</p>

      <h2>Let&apos;s build something meaningful.</h2>

      <p>
        I&apos;m open to software engineering opportunities, research
        collaborations, and conversations about interesting technical
        problems.
      </p>

      <a
        className="button button--primary"
        href="mailto:hojunekim1202@gmail.com"
      >
        Email me
      </a>

      <ul className="contact__links" aria-label="Contact links">
        {contactLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.label} ↗
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}