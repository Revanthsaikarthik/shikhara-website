import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactForm from "./components/ContactForm";
import "./App.css"; // Import the new CSS file

const App = () => {
  return (
    <div className="app-container">
      {/* Hero Section */}
      <header className="hero-section">
        <h1 className="hero-title">Shikhara</h1>
        <div className="hero-subtitle-wrapper">
          <h2 className="hero-subtitle">Own your peak</h2>
          <h3 className="hero-subtitle" style={{ fontWeight: 400 }}>&</h3>
          <p className="hero-tagline">Build Your Sanctuary</p>
        </div>
      </header>

      {/* Main Section */}
      <main className="main-layout">
        <div className="content-body">
          <span className="location-label">Cheemaldari - Devarampally,</span>
          <h2 className="main-heading">Premium Hill Top Layout</h2>
          <p className="description-text">
            Escape the ordinary and rise to a new standard of living. Our hill
            top layout offers unrivaled panoramic views and a serene atmosphere
            designed for those who seek exclusivity and peace.
          </p>

          <div className="feature-list">
            <div className="feature-item">
              <span className="feature-icon">⛰️</span>
              <div><strong>Elevated Living:</strong> High altitude with fresh air.</div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🛣️</span>
              <div><strong>Road Access:</strong> Excellent connectivity to Devarampally.</div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">📜</span>
              <div><strong>Investment:</strong> High appreciation premium location.</div>
            </div>
          </div>
        </div>

        {/* The logic for the form stays inside ContactForm */}
        <ContactForm />
      </main>

      <footer className="app-footer">
        © 2026 Premium Hill Top Layouts | Cheemaldari - Devarampally
      </footer>

      {/* Notifications */}
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
};

export default App;