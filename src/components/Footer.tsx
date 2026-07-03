import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <p className="text-2xl font-extrabold tracking-widest text-white mb-1">NEUROMOD</p>
          <p className="text-sm text-teal-400 mb-4">Dr. Vishwas</p>
          <p className="text-sm text-gray-400 leading-relaxed">
            Precision neurology. Compassionate care. Dedicated to finding the root cause and restoring your quality of life.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <p className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-teal-400 transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-teal-400 transition-colors">About Dr. Vishwas</Link></li>
            <li><Link to="/services/1" className="hover:text-teal-400 transition-colors">Service 1</Link></li>
            <li><Link to="/services/2" className="hover:text-teal-400 transition-colors">Service 2</Link></li>
            <li><Link to="/services/3" className="hover:text-teal-400 transition-colors">Service 3</Link></li>
            <li><Link to="/services/4" className="hover:text-teal-400 transition-colors">Service 4</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div id="contact">
          <p className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Get in Touch</p>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-teal-400 mt-0.5">✦</span>
              <span>123 Neurology Lane, Medical District, Mumbai 400001</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-teal-400">✦</span>
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-teal-400">✦</span>
              <span>vishwas@neuromod.in</span>
            </li>
          </ul>
          <a
            href="#contact"
            className="inline-block mt-5 bg-teal-600 text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-teal-500 transition-colors"
          >
            Book Appointment
          </a>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-5 text-xs text-gray-500 px-6">
        © {new Date().getFullYear()} NEUROMOD — Dr. Vishwas. All rights reserved. &nbsp;|&nbsp; Medical information on this site is for educational purposes only and does not replace professional medical advice.
      </div>
    </footer>
  );
}
