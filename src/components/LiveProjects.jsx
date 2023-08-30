import { useRef } from "react";
import { data } from "../data";
const { projects } = data;
export default function LiveProjects() {
  const projectElements = projects.map((project) => (
    <a href={project.link} class="card h-auto text-black" key={project.link}>
      <p className="tip h2 py-2">{project.title}</p>
      <img
        className="ratio ratio-4x3"
        height="40%"
        // width="100%"
        src={project.imgSrc}
        alt=""
      />
      <p className="second-text p-2">{project.desc}</p>
    </a>
  ));
  return (
    <div className="projects-wrapper min-vh-100 d-flex justify-content-center align-items-center">
      <div class="project-cards d-flex flex-column flex-md-row">
        {projectElements}
      </div>
    </div>
  );
}
