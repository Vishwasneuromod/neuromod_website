import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <p className="text-2xl font-extrabold tracking-widest text-white mb-1">NEUROMOD</p>
          <p className="text-sm text-teal-400 mb-4">Dr. Vishwas H V</p>
          <p className="text-sm text-gray-400 leading-relaxed">
            Functional neurosurgery and neuromodulation — treating movement disorders, drug-resistant epilepsy, spasticity and chronic pain. Explained in plain language, without the hype.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <p className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-teal-400 transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-teal-400 transition-colors">About Dr. Vishwas H V</Link></li>
            <li><Link to="/services/movement-disorders" className="hover:text-teal-400 transition-colors">Movement Disorders</Link></li>
            <li><Link to="/services/epilepsy" className="hover:text-teal-400 transition-colors">Complex Epilepsy</Link></li>
            <li><Link to="/services/spasticity" className="hover:text-teal-400 transition-colors">Spasticity</Link></li>
            <li><Link to="/services/chronic-pain" className="hover:text-teal-400 transition-colors">Chronic Pain</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div id="contact">
          <p className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Consult</p>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-teal-400 mt-0.5">✦</span>
              <span>Fortis Hospital, Bannerghatta Road, Bengaluru, Karnataka</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-400 mt-0.5">✦</span>
              <span> For consultations regarding DBS, epilepsy surgery, baclofen pump or spinal cord stimulation.</span>
            </li>
          </ul>
          <a
            href="https://www.fortishealthcare.com/doctors/dr-vishwas-h-v-4604-0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-5 bg-teal-600 text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-teal-500 transition-colors"
          >
            Book via Fortis Healthcare →
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-8">
        <p className="border-t border-gray-800 pt-6 text-xs text-gray-500 leading-relaxed max-w-3xl">
          <strong className="text-gray-400">Disclaimer:</strong> The information on this website is for patient education only. It is general in nature, does not constitute medical advice, and cannot replace an individual consultation, examination and review of your investigations. Treatment decisions — including suitability for any surgery or implant — are always made after a full evaluation, often jointly with neurology colleagues. In an emergency, contact your nearest hospital immediately.
        </p>
      </div>

      <div className="border-t border-gray-800 text-center py-5 text-xs text-gray-500 px-6">
        © {new Date().getFullYear()} Dr. Vishwas H V — Neurosurgery &amp; Neuromodulation, Bengaluru. All rights reserved.
      </div>
    </footer>
  );
}
