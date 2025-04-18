import { useEffect } from "react";
import Navbar from "../components/About/Navbar";
import Introduction from "../components/About/Introduction";
import Skills from "../components/About/Skills";
import CTA from "../components/About/CTA";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    AOS.init({
      duration: 800,
      once: true,
      throttleDelay: 99,
      disable: window.innerWidth < 768
    });

    return () => {
      AOS.refresh();
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto';
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e]/30 via-[#16213e]/20 to-black/80"></div>
        <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-purple-700/15 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-blue-700/15 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-72 h-72 rounded-full bg-emerald-500/15 blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.03),transparent_60%)]"></div>
        <div className="absolute inset-0 opacity-5 bg-[size:40px_40px] [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)]"></div>
        <div className="absolute inset-0 opacity-10 bg-[size:30px_30px] [background-image:linear-gradient(to_right,rgba(123,104,238,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(123,104,238,0.15)_1px,transparent_1px)]"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <section className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-screen-xl mx-auto space-y-32">
            <div data-aos="fade-up">
              <Introduction />
            </div>

            <div data-aos="fade-up">
              <Skills />
            </div>

            <div data-aos="fade-up">
              <CTA />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;