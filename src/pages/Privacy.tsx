import { Link } from "react-router-dom";

export default function Privacy() {
  return (
    <div className="privacy-container">
      <h1 className="privacy-title">Privacy Policy</h1>
      <p className="privacy-date">Last updated: October 2025</p>

      <section className="privacy-section">
        <h2>1. Introduction</h2>
        <p>
          Welcome to my portfolio website! I respect your privacy and am
          committed to protecting any personal information you may share while
          browsing this site. This policy explains how your data is collected,
          used, and protected.
        </p>
      </section>

      <section className="privacy-section">
        <h2>2. Information I Collect</h2>
        <p>
          This website does not collect sensitive personal information. However,
          if you choose to contact me via email or form submissions, I may
          collect basic details such as your name, email address, and message
          content — only to respond to your inquiry.
        </p>
      </section>

      <section className="privacy-section">
        <h2>3. How I Use Your Information</h2>
        <p>Your information is used solely for the following purposes:</p>
        <ul>
          <li>To respond to your messages or inquiries.</li>
          <li>To improve my portfolio’s user experience.</li>
          <li>To maintain communication if we collaborate professionally.</li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2>4. Data Security</h2>
        <p>
          I take reasonable steps to protect your personal data. No personal
          data is shared, sold, or distributed to third parties without your
          consent.
        </p>
      </section>

      <section className="privacy-section">
        <h2>5. External Links</h2>
        <p>
          My website may contain links to external sites such as GitHub,
          LinkedIn, or other platforms. I am not responsible for the privacy
          practices of those websites, so please review their respective privacy
          policies.
        </p>
      </section>

      <section className="privacy-section">
        <h2>6. Contact</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact me
          at:{" "}
          <a href="mailto:angelabhungane@gmail.com" className="privacy-email">
            angelabhungane@gmail.com
          </a>
        </p>
      </section>

      <Link to="/" className="privacy-back">
        ⬅ Back to Home
      </Link>
    </div>
  );
}
