import "./about.css";

const About = () => {
  return (
    <div className="aboutContainer">
      <section className="about">
        Sito <u>didattico</u> interamente realizzato da{" "}
        <span className="focus">Eleonora Pisacane</span> <br />
        come progetto finale del corso <br />
        <span className="focus">Web Developer Full Stack</span> <br />{" "}
        organizzato da{" "}
        <a href="https://www.digitazon.school" target="_blank">
          Digitazon Tech School
        </a>
        .
      </section>
      <section className="about">
        Tutti i diritti appartengono ai rispettivi proprietari.
      </section>
      <section className="about">
        Le locandine dei film sono prese dal sito{" "}
        <a
          href="https://www.mymovies.it"
          target="_blank"
          rel="noopener noreferrer"
        >
          MyMovies
        </a>
        .
      </section>
      <section className="about">
        Contact: +39 340 27 47 401 <br />
        Email:{" "}
        <a href="mailto:eleonora.pisacane84@gmail.com">
          eleonora.pisacane84@gmail.com
        </a>
      </section>
    </div>
  );
};
export default About;
