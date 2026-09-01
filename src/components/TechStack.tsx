import { skillGroups } from "../data/skills";
import Reveal from "./Reveal";

export default function TechStack() {
  return (
    <section
      id="skills"
      className="min-h-screen scroll-mt-28 px-6 py-32 md:px-10 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-14 max-w-4xl">
          <p className="text-xs font-extrabold tracking-[0.2em] text-accent uppercase">
            Capabilities
          </p>

          <h2 className="mt-4 text-[clamp(2.8rem,7vw,5rem)] leading-none font-[850] tracking-[-0.055em]">
            Tools I use to turn ideas into working systems.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            My experience spans product interfaces, backend services, computer
            systems, security research, and local AI applications.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12">
          {skillGroups.map((group, index) => {
            const desktopWidth =
              index < 2 ? "lg:col-span-6" : "lg:col-span-4";

            return (
              <Reveal
                className={`md:col-span-1 ${desktopWidth}`}
                delay={index * 0.08}
                key={group.category}
              >
                <article className="group h-full min-h-0 rounded-2xl border border-line bg-panel p-7 transition duration-200 hover:-translate-y-1 hover:border-line-strong hover:bg-panel-raised lg:min-h-68">
                  <header className="grid grid-cols-[auto_1fr_auto] items-baseline gap-4 border-b border-line pb-6">
                    <span className="text-xs font-extrabold text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="m-0 text-lg font-extrabold tracking-tight">
                      {group.category}
                    </h3>

                    <small className="text-xs whitespace-nowrap text-muted">
                      {group.skills.length} skills
                    </small>
                  </header>

                  <ul className="mt-6 flex list-none flex-wrap content-start gap-2 p-0">
                    {group.skills.map((skill) => (
                      <li
                        className="rounded-lg border border-line bg-black/15 px-3 py-2 text-sm font-semibold text-copy"
                        key={skill}
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}