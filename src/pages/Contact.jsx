import React, { useState } from "react";
import Navbar from "../components/Navbar";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [isSnackbarVisible, setIsSnackbarVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        (result) => {
          console.log("SUCCESS!", result.text);
          setIsSnackbarVisible(true);
          setIsSubmitting(false); 
          e.target.reset(); 
          
          setTimeout(() => {
            setIsSnackbarVisible(false);
          }, 3000);
        },
        (error) => {
          console.error("FAILED...", error.text);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div id="contact" className="bg-black text-white min-h-screen pt-20">
      <Navbar />
      <section className="max-w-screen-lg mx-auto px-6 py-20">
        {/* Konten Halaman */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informasi Kontak */}
          <div className="space-y-8" data-aos="fade-right">
            <h2 className="text-2xl font-bold">Contact <span className="text-purple-500">Information</span></h2>
            <p className="text-gray-400 leading-loose">
              I’m open to discussing new projects, creative ideas, or
              opportunities to be part of your visions. Feel free to contact me
              via email or social media platforms below.
            </p>
            <div className="space-y-4">
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:himawanfirza21@gmail.com"
                  className="text-purple-500 hover:underline"
                >
                  himawanfirza21@gmail.com
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <span className="text-purple-500">+62-813-2073-2375</span>
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/firzahimawan/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-purple-500 hover:text-purple-700 transition-colors duration-300"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Fizm00"
                  target="_blank"
                  rel="noreferrer"
                  className="text-purple-500 hover:text-purple-700 transition-colors duration-300"
                >
                  GitHub
                </a>
                <a
                  href="https://www.instagram.com/firza_hmn/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-purple-500 hover:text-purple-700 transition-colors duration-300"
                >
                  Instagram
                </a>
              </div>
            </div>
            {/* Google Maps Embed */}
            <div className="mt-8">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.17200013802!2d110.38647354194605!3d-7.771578392280079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59b774d44be3%3A0x3ec0d62de939e00!2sJJ%20House%20Kost%20Exclusive!5e0!3m2!1sid!2sid!4v1732203268698!5m2!1sid!2sid"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>

          {/* Form Kontak */}
          <form
            onSubmit={handleFormSubmit}
            className="bg-gray-800 p-8 rounded-lg shadow-lg space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-bold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
                className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-bold mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message"
                rows="4"
                required
                className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-purple-500 hover:bg-purple-700 text-white py-3 rounded-lg transform transition-transform duration-300 ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Snackbar Notification */}
        {isSnackbarVisible && (
          <div className="fixed bottom-5 right-5 bg-purple-500 text-white py-2 px-4 rounded-lg shadow-lg transition-opacity duration-300">
            Message sent successfully!
          </div>
        )}
      </section>
    </div>
  );
};

export default Contact;
