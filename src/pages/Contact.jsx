import { useState, useEffect } from "react";
import Navbar from "../components/contact/Navbar";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [isSnackbarVisible, setIsSnackbarVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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
    <div id="contact" className="bg-black text-white min-h-screen">
       <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e]/30 via-[#16213e]/20 to-black/80"></div>
        <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-purple-700/15 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-blue-700/15 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-72 h-72 rounded-full bg-emerald-500/15 blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.03),transparent_60%)]"></div>
        <div className="absolute inset-0 opacity-5 bg-[size:40px_40px] [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]"></div>
      </div>

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
