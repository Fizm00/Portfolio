import PropTypes from "prop-types";
import { FiUser, FiMail, FiMessageSquare, FiSend } from "react-icons/fi";

const ContactForm = ({
  handleFormSubmit,
  isSubmitting,
}) => {
  return (
    <form
      onSubmit={handleFormSubmit}
      className="relative backdrop-blur-sm bg-gray-900/40 p-8 rounded-2xl shadow-2xl space-y-6 border border-gray-800/50"
      data-aos="zoom-in"
    >
      <h3 className="text-2xl font-bold mb-6 flex items-center">
        <span className="inline-block w-4 h-4 bg-purple-500 mr-3 rounded-sm transform rotate-45"></span>
        Send a <span className="text-purple-500 ml-2">Message</span>
      </h3>
      
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-500">
          <FiUser />
        </div>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-4 pl-12 bg-gray-800/50 text-white rounded-xl border border-gray-700/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none backdrop-blur-sm transition-all duration-300"
        />
      </div>
      
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-500">
          <FiMail />
        </div>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-4 pl-12 bg-gray-800/50 text-white rounded-xl border border-gray-700/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none backdrop-blur-sm transition-all duration-300"
        />
      </div>
      
      <div className="relative">
        <div className="absolute left-4 top-6 text-purple-500">
          <FiMessageSquare />
        </div>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          className="w-full p-4 pl-12 bg-gray-800/50 text-white rounded-xl border border-gray-700/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none backdrop-blur-sm transition-all duration-300"
        ></textarea>
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-4 rounded-xl transform transition-all duration-300 flex items-center justify-center gap-2 ${
          isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20"
        }`}
      >
        <FiSend className={`${isSubmitting ? "" : "animate-pulse"}`} />
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
      
    </form>
  );
};

ContactForm.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
};

export default ContactForm;