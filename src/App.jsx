import React, { useState } from 'react';
import shikara from './assets/shikara.jpeg'
// INSTRUCTIONS:
// 1. Save your uploaded mountain image as "sikara.jpeg"
// 2. Place it in the /public folder of your React project.
const BACKGROUND_IMAGE = shikara; // Update this path if your image is located elsewhere
console.log(BACKGROUND_IMAGE); 
const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We will contact you soon about the Cheemaldari plots.`);
  };

  const styles = {
    container: { fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif', color: '#333', margin: 0, padding: 0, backgroundColor: '#fff' },
    hero: {
      height: '70vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#1a202c',
      color: 'white',
      textAlign: 'center',
      backgroundImage: `url(${BACKGROUND_IMAGE})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    main: { maxWidth: '1000px', margin: '40px auto', padding: '0 20px', display: 'flex', flexWrap: 'wrap', gap: '50px' },
    content: { flex: '1.5', minWidth: '320px' },
    formCard: { 
      flex: '1', 
      minWidth: '320px', 
      padding: '35px', 
      borderRadius: '16px', 
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      backgroundColor: '#fff',
      border: '1px solid #f0f0f0'
    },
    input: { width: '100%', padding: '14px', margin: '10px 0 20px 0', border: '1px solid #ddd', borderRadius: '8px', boxSizing: 'border-box', fontSize: '16px' },
    button: { width: '100%', padding: '16px', backgroundColor: '#e2ddcc', color: 'black', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px' },
    locationText: { color: '#141413', fontWeight: 'bold', fontSize: '1.4rem', marginBottom: '10px', display: 'block' },
    featureList: { listStyle: 'none', padding: 0, marginTop: '30px' },
    featureItem: { display: 'flex', alignItems: 'center', marginBottom: '20px', fontSize: '1.1rem' },
    icon: { fontSize: '1.6rem', marginRight: '15px' }
  };

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <header style={styles.hero}>
        <h1 style={{ fontSize: '4.5rem', margin: '0', fontWeight: '800' }}>Shikhara</h1>
        <h2 style={{ fontSize: '2.5rem', margin: '0', fontWeight: '500' }}>Own your peak</h2>
        <h3 style={{ fontSize: '2.5rem', margin: '0', fontWeight: '400' }}>&</h3>
        <p style={{ fontSize: '1.5rem', fontStyle: 'italic', color: '#ea9d04' }}>Build Your Sanctuary</p>
      </header>

      {/* Main Section */}
      <main style={styles.main}>
        <div style={styles.content}>
          <span style={styles.locationText}>Cheemaldari - Devarampally,</span>
          <h2 style={{ fontSize: '3.2rem', color: '#1a202c', margin: '0 0 20px 0', lineHeight: '1.1' }}>
            Premium Hill Top Layout
          </h2>
          
          <p style={{ lineHeight: '1.8', color: '#555', fontSize: '1.2rem', marginBottom: '30px' }}>
            Escape the ordinary and rise to a new standard of living. Our 
            hill top layout offers unrivaled panoramic views and a serene 
            atmosphere designed for those who seek exclusivity and 
            peace.
          </p>

          <div style={styles.featureList}>
            <div style={styles.featureItem}>
              <span style={styles.icon}>⛰️</span>
              <div><strong>Elevated Living:</strong> High altitude with fresh air.</div>
            </div>
            <div style={styles.featureItem}>
              <span style={styles.icon}>🛣️</span>
              <div><strong>Road Access:</strong> Excellent connectivity to Devarampally.</div>
            </div>
            <div style={styles.featureItem}>
              <span style={styles.icon}>📜</span>
              <div><strong>Investment:</strong> High appreciation premium location.</div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div style={styles.formCard}>
          <h3 style={{ marginTop: 0, fontSize: '1.6rem' }}>Register For More details</h3>
          <p style={{ color: '#666', marginBottom: '25px' }}>Leave your details for pricing and layout map.</p>
          <form onSubmit={handleSubmit}>
            <label style={{ fontWeight: 'bold' }}>Name</label>
            <input 
              type="text"
              name="name" 
              placeholder="Your Full Name" 
              required 
              style={styles.input} 
              onChange={handleChange} 
            />

            <label style={{ fontWeight: 'bold' }}>Email ID</label>
            <input 
              type="email" 
              name="email" 
              placeholder="email@example.com" 
              required 
              style={styles.input} 
              onChange={handleChange} 
            />

            <label style={{ fontWeight: 'bold' }}>Contact Number</label>
            <input 
              type="tel" 
              name="phone" 
              placeholder="Phone Number" 
              required 
              style={styles.input} 
              onChange={handleChange} 
            />

            <button type="submit" style={styles.button}>GET DETAILS</button>
          </form>
        </div>
      </main>

      <footer style={{ textAlign: 'center', padding: '50px', color: '#999', fontSize: '0.9rem', backgroundColor: '#fafafa' }}>
        © 2026 Premium Hill Top Layouts | Cheemaldari - Devarampally
      </footer>
    </div>
  );
};

export default App;