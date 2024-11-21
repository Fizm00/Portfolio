import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [isSnackbarVisible, setIsSnackbarVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_zxblbtn",
        "template_dbk34d7",
        e.target,
        "IofbVji-P5CwLCO2K"
      )
      .then(
        () => {
          setIsSnackbarVisible(true);
          setIsSubmitting(false);
          e.target.reset();

          setTimeout(() => {
            setIsSnackbarVisible(false);
          }, 3000);
        },
        () => {
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div id="contact" className="bg-black text-white min-h-screen pt-20">
      <Navbar />
      <section className="max-w-screen-lg mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm
            handleFormSubmit={handleFormSubmit}
            isSubmitting={isSubmitting}
          />
        </div>
        {isSnackbarVisible && (
          <div
            className="fixed bottom-5 right-5 bg-purple-500 text-white py-2 px-4 rounded-lg shadow-lg transition-opacity duration-300"
            data-aos="fade-up"
          >
            Message sent successfully!
          </div>
        )}
      </section>
    </div>
  );
};

export default Contact;
