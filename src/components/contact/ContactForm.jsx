import PropTypes from "prop-types";

const ContactForm = ({
  handleFormSubmit,
  isSubmitting,
}) => {
  return (
    <form
      onSubmit={handleFormSubmit}
      className="bg-gray-800 p-8 rounded-lg shadow-lg space-y-6"
      data-aos="zoom-in"
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
  );
};
ContactForm.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
};

export default ContactForm;
