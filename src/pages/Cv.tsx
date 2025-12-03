import { Link } from "react-router-dom";

const Cv = () => {
  return (
    <div className="resume-container">
      <Link to="/" className="cv-back-btn">
        ← Back to Home
      </Link>

      <div className="header">
        <h1>Bongeka Bhungane</h1>
        <p className="role">Mobile and Web Developer</p>

        <div className="contact">
          <p>
            Email:{" "}
            <a href="mailto:angelabhungane@gmail.com">
              angelabhungane@gmail.com
            </a>
          </p>
          <p>Phone: 083 296 4212</p>
          <p>Location: 23 Sim Place, Effingham Heights, Durban North</p>
        </div>
      </div>

      <section className="section">
        <h2>Professional Summary</h2>
        <p>
          Passionate and detail-oriented developer with growing experience in
          technology and design. I focus on building clean, user-friendly
          interfaces and developing efficient, scalable solutions. My goal is to
          create meaningful digital experiences that combine functionality with
          great design.
        </p>
      </section>

      <section className="section">
        <h2>Professional Experience</h2>

        <div className="experience-item">
          <h3>Web and Mobile Developer – CodeTribe</h3>
          <p className="date">
            07/2025 – Present | Pietermaritzburg, KwaZulu-Natal
          </p>

          <ul>
            <li>
              Collaborate with trainees to define and develop requirements.
            </li>
            <li>
              Identify and work with a small business to define digital solution
              requirements.
            </li>
            <li>
              Develop applications that meet business requirements and UI
              designs.
            </li>
            <li>Write requirement specifications and design documents.</li>
            <li>Refactor, debug, and fix application issues.</li>
            <li>Document processes to ensure quality.</li>
            <li>Evaluate system specifications against client requirements.</li>
            <li>Implement new software features and maintain existing ones.</li>
            <li>Assist in developing user guides/manuals.</li>
            <li>
              Participate in Scrum events: Standups, Planning, Reviews,
              Retrospectives.
            </li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>Education</h2>
        <p>
          <strong>Diploma in ICT: Application Development</strong> – Durban
          University of Technology
        </p>
        <p className="date">01/2020 – 06/2024 | Durban, KwaZulu-Natal</p>
      </section>

      <section className="section">
        <h2>Skills</h2>
        <div className="skills">
          <span>JavaScript</span>
          <span>TypeScript</span>
          <span>React</span>
          <span>Redux</span>
          <span>HTML5 / CSS3 / Tailwind</span>
          <span>UI Design (Figma)</span>
          <span>Git & GitHub</span>
        </div>
      </section>

      <section className="section">
        <h2>References</h2>
        <p>
          <strong>Dlozi Mthethwa</strong> – Facilitator, CodeTribe
        </p>
        <p>Email: dlozi@mlab.co.za</p>
      </section>

      <a
        href="/src/assets/Bongeka_Bhungane _ CV.pdf"
        download
        className="cv-download"
      >
        Download My CV
      </a>
    </div>
  );
};

export default Cv;
