import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = ({ darkMode }) => {
  return (
    <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Get In{' '}
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Touch
          </span>
        </h2>

        <p className={`text-xl mb-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          I'm always open to discussing new projects, opportunities, or collaborations.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Email */}
          <a
            href="mailto:mahendarbyra@gmail.com"
            className={`p-6 rounded-xl ${
              darkMode
                ? 'bg-gray-900 hover:bg-gray-700'
                : 'bg-gray-50 hover:bg-gray-100'
            } transition-colors group`}
          >
            <Mail className="w-8 h-8 mx-auto mb-3 text-blue-500 group-hover:scale-110 transition-transform" />
            <p className="font-medium">Email</p>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              mahendarbyra@gmail.com
            </p>
          </a>

          {/* Phone */}
          <a
            href="tel:+919392435443"
            className={`p-6 rounded-xl ${
              darkMode
                ? 'bg-gray-900 hover:bg-gray-700'
                : 'bg-gray-50 hover:bg-gray-100'
            } transition-colors group`}
          >
            <Phone className="w-8 h-8 mx-auto mb-3 text-purple-500 group-hover:scale-110 transition-transform" />
            <p className="font-medium">Phone</p>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              +91-9392435443
            </p>
          </a>

          {/* Location */}
          <a
            href="https://www.google.com/maps?q=Raidurg,Hyderabad,India"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-6 rounded-xl ${
              darkMode
                ? 'bg-gray-900 hover:bg-gray-700'
                : 'bg-gray-50 hover:bg-gray-100'
            } transition-colors group block`}
          >
            <MapPin className="w-8 h-8 mx-auto mb-3 text-green-500 group-hover:scale-110 transition-transform" />
            <p className="font-medium">Location</p>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Raidurg, Hyderabad, India
            </p>
          </a>
        </div>

        {/* Contact Form Section */}
        <form
          action="https://formspree.io/f/xwprnrgb" 
          method="POST"
          className="space-y-6 mt-10"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className={`p-3 rounded-lg w-full outline-none ${
                darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
              }`}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className={`p-3 rounded-lg w-full outline-none ${
                darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
              }`}
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className={`p-3 rounded-lg w-full outline-none ${
              darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
            }`}
          ></textarea>

          <button
            type="submit"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
};

export default Contact;
