const GoogleMaps = () => {
  return (
    <div className="mt-8 relative group" data-aos="zoom-in">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
      <div className="relative">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.17200013802!2d110.38647354194605!3d-7.771578392280079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59b774d44be3%3A0x3ec0d62de939e00!2sJJ%20House%20Kost%20Exclusive!5e0!3m2!1sid!2sid!4v1732203268698!5m2!1sid!2sid"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMaps;
