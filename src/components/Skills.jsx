import { data } from "../data";
const { skills } = data;

export default function Skills() {
  const skillElements = skills.map((skill) => {
    const linearGradient = {
      background: `linear-gradient(-45deg, ${skill.logoColor.first} 0%, ${skill.logoColor.last} 100%)`,
    };
    const projectListEl = skill.projects?.map((project) => (
      <li>
        {project
          .charAt(0)
          .toUpperCase()
          .concat(project.substring(1, project.length))}
      </li>
    ));
    return (
      <div key={skill.title} className="card m-3 h3" style={linearGradient}>
        {skill.title.toUpperCase()}
        <div className="card__content">
          <div className="card__title">
            Projects -{" "}
            {`${projectListEl?.length < 10 ? 0 : ""}${projectListEl?.length}`}
          </div>
          <div className="card__description">{projectListEl}</div>
        </div>
      </div>
    );
  });

  return (
    <div className="skills-wrapper min-vh-100 d-flex justify-content-center align-items-center p-5">
      <div className="skills d-flex justify-content-center flex-wrap">
        {skillElements}
      </div>
    </div>
  );
}
