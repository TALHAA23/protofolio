import { useEffect, useRef, useState } from "react";

export default function Nav() {
  const ref = useRef();
  const [navigations, setNavigation] = useState("d-none");
  function scroll(container) {
    const projects = document.querySelector(container);
    window.scrollTo(0, projects.offsetTop);
  }

  function toggleMenu() {
    setNavigation((prevNav) => (prevNav == "d-none" ? "" : "d-none"));
  }

  return (
    <nav
      ref={ref}
      className="nav-wrapper d-flex flex-column flex-sm-row position-fixed align-items-center h-auto py-2 mt-3 rounded"
    >
      <button className="d-sm-none btn btn-warning" onClick={toggleMenu}>
        {navigations == "d-none" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrows-expand"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8ZM7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2ZM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10Z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrows-collapse"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8Zm7-8a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 4.293V.5A.5.5 0 0 1 8 0Zm-.5 11.707-1.146 1.147a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 11.707V15.5a.5.5 0 0 1-1 0v-3.793Z"
            />
          </svg>
        )}
      </button>
      <p
        className={`${navigations} d-sm-block`}
        onClick={() => scroll(".about-wrapper")}
      >
        About
      </p>
      <p
        className={`${navigations} d-sm-block`}
        onClick={() => scroll(".skills-wrapper")}
      >
        Skills
      </p>
      <p
        className={`${navigations} d-sm-block`}
        onClick={() => scroll(".projects-wrapper")}
      >
        Personal Projects
      </p>
      <p
        className={`${navigations} d-sm-block`}
        onClick={() => scroll(".work-wrapper")}
      >
        Work
      </p>
      <p
        className={`${navigations} d-sm-block`}
        onClick={() => scroll(".contact-wrapper")}
      >
        Contact
      </p>
    </nav>
  );
}
