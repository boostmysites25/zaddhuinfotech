import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const ThankYou = () => {
  return (
    <div className="min-h-screen py-16 bg-black text-white flex flex-col">
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center">
        <div className="wrapper max-w-4xl mx-auto px-4">
          <div className="text-center space-y-8" data-aos="fade-up">
            {/* Success Icon */}
            <div className="flex justify-center">
              <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center">
                <FaCheckCircle className="text-primary text-5xl" />
              </div>
            </div>

            {/* Thank You Message */}
            <div className="space-y-4">
              <h1 className="text_xl text-white">
                Thank You for{" "}
                <span className="text-primary">Reaching Out!</span>
              </h1>
              <p className="desc text-white/70 max-w-2xl mx-auto">
                We've received your message and truly appreciate you taking the
                time to contact us. Our team will review your inquiry and get
                back to you within 24 hours.
              </p>
            </div>

            {/* Additional Info */}
            <div className="bg-[#121212] rounded-2xl p-8 space-y-6">
              <h2 className="text2 text-white">What happens next?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-primary font-bold text-lg">1</span>
                  </div>
                  <h3 className="text3 text-white">Review</h3>
                  <p className="desc text-white/70">
                    We'll carefully review your requirements and project
                    details.
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-primary font-bold text-lg">2</span>
                  </div>
                  <h3 className="text3 text-white">Connect</h3>
                  <p className="desc text-white/70">
                    Our team will reach out to discuss your project in detail.
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-primary font-bold text-lg">3</span>
                  </div>
                  <h3 className="text3 text-white">Collaborate</h3>
                  <p className="desc text-white/70">
                    We'll work together to bring your vision to life.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/"
                className="btn-fullrounded bg-primary text-black hover:bg-white border border-primary min-w-[12rem] flex items-center justify-center gap-2"
              >
                Go to Home
                <IoIosArrowForward />
              </Link>
              <Link
                to="/our-services"
                className="btn-fullrounded bg-transparent text-white hover:bg-primary hover:text-black border border-white min-w-[12rem] flex items-center justify-center gap-2"
              >
                Explore Services
                <IoIosArrowForward />
              </Link>
            </div>

            {/* Contact Info */}
            <div className="pt-8 border-t border-gray-800">
              <p className="desc text-white/50">
                Need immediate assistance? Contact us at{" "}
                <a
                  href="tel:+91-7550081119"
                  className="text-primary hover:text-white transition-colors"
                >
                  +91-7550081119
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ThankYou;
