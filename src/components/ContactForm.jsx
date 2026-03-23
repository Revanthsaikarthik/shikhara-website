import React, { useState } from "react";
import { toast } from "react-toastify";
import "./ContactForm.css"; // Link the new clean CSS file

const ContactForm = () => {
  // Logic remains identical to handle Google Sheets submission
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Controlled component handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form Validation
    if (!formData.name.trim()) {
      toast.error("Name is required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (phoneDigits.length < 10) {
      toast.error("Phone number must contain at least 10 digits.");
      return;
    }

    setIsLoading(true);

    try {
      const scriptURL = import.meta.env.VITE_GOOGLE_SHEET_URL;
      
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors", // Crucial for Google Apps Script
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      toast.success("Success! We will contact you soon.");
      setFormData({ name: "", email: "", phone: "" }); // Reset form
    } catch (error) {
      toast.error("Submission failed. Please try again.");
      console.error("Submission Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="form-card"> {/* Clean class name */}
      <h3>Register For More details</h3>
      <p>Leave your details for pricing and layout map.</p>
      
      <form onSubmit={handleSubmit} className="register-form">
        <div className="input-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="form-input" // Use a consistent class
          />
        </div>

        <div className="input-group">
          <label>Email ID</label>
          <input
            type="email"
            name="email"
            placeholder="email@example.com"
            required
            value={formData.email}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div className="input-group">
          <label>Contact Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <button 
          type="submit" 
          className="submit-btn" 
          disabled={isLoading} // Logic still controls the state
        >
          {isLoading ? "SENDING..." : "GET DETAILS"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;