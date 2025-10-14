import Footer from "../components/footer";
import Nav from "../components/Nav";
export default function Home() {
  return (
    <div className="home">
      <Nav />

      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm Bongeka Bhungane</h1>
          <p className="hero-subtitle">
            I'm a tech enthusiast and aspiring developer creating digital
            experiences that are sleek, modern, and functional. Explore my
            portfolio and see what I build.
          </p>
          <a
            href="https://github.com/Bongeka-Bhungane?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn"
          >
            View My Work
          </a>
        </div>
      </header>

      <Footer />
    </div>
  );
}
