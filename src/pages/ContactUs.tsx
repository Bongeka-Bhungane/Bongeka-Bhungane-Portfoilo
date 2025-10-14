import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";

export default function ContactUs() {
  const form = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setMessage("✅ Message sent successfully!");
          form.current?.reset();
        },
        () => {
          setMessage("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Let's Connect 🚀</h1>
      <p className="contact-subtitle">
        Have a question or opportunity? Drop me a message below.
      </p>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="contact-input"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="contact-input"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="contact-textarea"
        />
        <button type="submit" className="contact-btn">
          Send Message
        </button>
      </form>

      {message && <p className="contact-message">{message}</p>}

      <Link to="/" className="back-btn">
        ⬅ Back to Home
      </Link>
    </div>
  );
}
