import { Link } from "react-router-dom";

export default function ContactUs() {
  return (
    <div className="cv-page">
      {/* Back Button */}
      <Link to="/" className="cv-back-btn">
        ← Back to Home
      </Link>

      <div className="cv-container">
        <h1 className="cv-title">About Me</h1>
        <p className="cv-text">
          Hi, I'm <span className="highlight">Bongeka Bhungane</span> — a
          passionate tech enthusiast and aspiring developer. I enjoy exploring
          new technologies, building creative digital projects, and continuously
          improving my coding skills.
        </p>

        <div className="cv-info">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:angelabhungane@gmail.com">
              angelabhungane@gmail.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+27832964212">+27 83 296 4212</a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/bongeka-bhungane-623a6a252/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.linkedin.com/in/bongeka-bhungane-623a6a252/
            </a>
          </p>
        </div>

        <a
          href="/src/assets/Bongeka_Bhungane _ CV.pdf"
          download
          className="cv-download-btn"
        >
          Download My CV
        </a>
      </div>
    </div>
  );
}
