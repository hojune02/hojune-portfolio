import { skillGroups } from "../data/skills";

export default function TechStack() {
  return (
    <section id="skills" className="section skills">
      <div className="section__heading">
        <p className="section__label">Skills</p>
        <h2>Technologies I work with</h2>

        <p>
          Tools and technologies I have used across web development,
          artificial intelligence, systems, and security projects.
        </p>
      </div>

      <div className="skills__grid">
        {skillGroups.map((group) => (
          <article className="skills__group" key={group.category}>
            <h3>{group.category}</h3>

            <ul className="skills__list">
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}