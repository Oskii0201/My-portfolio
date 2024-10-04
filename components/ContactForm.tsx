"use client";
import React, { useState } from "react";
import axios from "axios";
import ButtonPrimary from "./ButtonPrimary";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await axios.post("/api/send-email", formData);
      console.log(response);
      if (response.status === 200) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="mb-4 w-full rounded bg-gray-800 px-4 py-2 text-white"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        className="mb-4 w-full rounded bg-gray-800 px-4 py-2 text-white"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        className="mb-4 h-32 w-full rounded bg-gray-800 px-4 py-2 text-white"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>
      <div className="flex items-center">
        <ButtonPrimary type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send Message"}
        </ButtonPrimary>
        {status === "sent" && (
          <p className="ml-4 text-green-500">Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="ml-4 text-red-500">Failed to send message.</p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
