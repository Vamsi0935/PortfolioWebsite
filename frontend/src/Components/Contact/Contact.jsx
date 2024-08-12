import React, { useContext, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./contact.css";
import { ContextAPI } from "../../utils/context";

const Contact = () => {
  const { setRef } = useContext(ContextAPI);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );
      if (response.data.success) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Message sent successfully!",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: "Failed to send message.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred.",
      });
    }
  };

  return (
    <div className="contact-container" ref={setRef("Contact Me")}>
      <div className="contact-header">
        <p>Get In Touch</p>
        <h1>Contact Me</h1>
      </div>
      <div className="contact-content">
        <div>
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to{" "}
            <br />
            send me a message about anything that you want me to work <br />
            on. You can contact me anytime.
          </p>
          <div className="contact-info">
            <p>
              <strong>Email: </strong>
              <a href="mailto:your.email@example.com">
                dvkrishna142000@gmail.com
              </a>
            </p>
            <p>
              <strong>Phone: </strong>
              <a href="tel:+1234567890">+91 9391128446</a>
            </p>
          </div>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
