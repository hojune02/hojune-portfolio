import Reveal from "./Reveal";

const facts = [
  {
    label: "Education",
    value: "Computer Science at KAIST",
  },
  {
    label: "International experience",
    value: "Georgia Tech exchange student",
  },
  {
    label: "Research",
    value: "AI, industrial security, and Bluetooth security",
  },
  {
    label: "Current focus",
    value: "Production-oriented full-stack engineering",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen scroll-mt-28 bg-white/[0.015] px-6 py-32 md:px-10 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(400px,1.1fr)] lg:gap-24">
        <Reveal className="lg:sticky lg:top-36">
          <p className="text-xs font-extrabold tracking-[0.2em] text-accent uppercase">
            About me
          </p>

          <h2 className="mt-4 text-[clamp(3rem,13vw,4.5rem)] leading-[0.98] font-[850] tracking-[-0.065em] lg:text-[clamp(3rem,5.5vw,5.5rem)]">
            I like understanding what happens{" "}
            <span className="text-accent">beneath the abstraction.</span>
          </h2>
        </Reveal>

        <Reveal className="lg:pt-12">
          <div className="border-b border-line pb-10">
            <p className="mb-6 text-[clamp(1.2rem,1.8vw,1.45rem)] leading-8 text-white">
              I&apos;m a computer science student at KAIST with experience
              across software engineering, artificial intelligence, computer
              systems, and cybersecurity research.
            </p>

            <p className="mb-6 text-[clamp(1.05rem,1.5vw,1.25rem)] leading-8 text-copy">
              My work has taken me from building React interfaces and local AI
              applications to studying operating systems, network protocols,
              industrial-control binaries, and Bluetooth security.
            </p>

            <p className="text-[clamp(1.05rem,1.5vw,1.25rem)] leading-8 text-copy">
              I&apos;m now focused on becoming an engineer who can move between
              product-level interfaces and the systems underneath them.
            </p>
          </div>

          <dl className="m-0">
            {facts.map((fact) => (
              <div
                className="grid grid-cols-1 gap-2 border-b border-line py-6 md:grid-cols-[minmax(140px,0.45fr)_1fr] md:gap-8"
                key={fact.label}
              >
                <dt className="text-xs font-bold tracking-[0.12em] text-muted uppercase">
                  {fact.label}
                </dt>

                <dd className="m-0 font-bold leading-6 text-white">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}