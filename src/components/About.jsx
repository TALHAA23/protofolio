export default function About() {
  function scrollToSkills() {
    console.log(document.querySelector(".skills-wrapper"));
    window.scrollTo(0, document.querySelector(".skills-wrapper").offsetTop);
  }

  return (
    <div className="about-wrapper d-flex flex-column align-items-center justify-content-center">
      <h1 className="name h1 rounded px-3 py-2">Hey, I'm Talha</h1>
      <h1 className="about h1">a web developer with</h1>

      <button
        className="btn btn-lg btn-outline-warning"
        onClick={scrollToSkills}
      >
        Skilled In
      </button>
    </div>
  );
}
