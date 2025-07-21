import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    userName: "",
    userAge: "",
    userEmail: "",
    userPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (formData.userName.trim().length < 3) {
      newErrors.userName = "Name must be at least 3 characters.";
    }

    if (!formData.userAge || isNaN(formData.userAge)) {
      newErrors.userAge = "Age must be a number.";
    }

    if (
      !formData.userEmail.includes("@") ||
      !formData.userEmail.includes(".")
    ) {
      newErrors.userEmail = "Enter a valid email.";
    }

    if (formData.userPassword.length < 6) {
      newErrors.userPassword = "Password must be at least 6 characters.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert(`Thank you, ${formData.userName}! Your message has been sent.`);
      setFormData({
        userName: "",
        userAge: "",
        userEmail: "",
        userPassword: "",
      });
    }
  };

  return (
    <>
      <div className="header-about text-center">
        <h2 className="contact-title">Contact Section</h2>
        <div className="lines-contact">
          <div className="line-contact"></div>
          <i className="fa-solid fa-star" style={{ color: "#2c3e50" }}></i>
          <div className="line-contact"></div>
        </div>
      </div>

      <form
        className="form-container w-50 p-3 mx-auto mt-5"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="userName"
          className="form-control"
          placeholder="Your Name"
          value={formData.userName}
          onChange={handleChange}
        />
        {errors.userName && <p className="text-danger">{errors.userName}</p>}

        <input
          type="number"
          name="userAge"
          className="form-control"
          placeholder="Your Age"
          value={formData.userAge}
          onChange={handleChange}
        />
        {errors.userAge && <p className="text-danger">{errors.userAge}</p>}

        <input
          type="email"
          name="userEmail"
          className="form-control"
          placeholder="Your Email"
          value={formData.userEmail}
          onChange={handleChange}
        />
        {errors.userEmail && <p className="text-danger">{errors.userEmail}</p>}

        <input
          type="password"
          name="userPassword"
          className="form-control"
          placeholder="Your Password"
          value={formData.userPassword}
          onChange={handleChange}
        />
        {errors.userPassword && (
          <p className="text-danger">{errors.userPassword}</p>
        )}

        <button
          type="submit"
          className="btn mt-4 text-white"
          style={{ backgroundColor: "#1abc9c" }}
        >
          Send Message
        </button>
      </form>
    </>
  );
}
