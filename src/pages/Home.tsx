import { useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { useFaqs } from "../lib/faq";
import doctorHero from "../assets/images/doctor-hero.jpg";
import movementDisordersImg from "../assets/images/services/movement-disorders.jpg";
import epilepsyImg from "../assets/images/services/epilepsy.jpg";
import spasticityImg from "../assets/images/services/spasticity.jpg";
import chronicPainImg from "../assets/images/services/chronic-pain.jpg";

// const credentials = [
//   { value: "FRCS", label: "Surgical Neurology, Royal College of Surgeons of England" },
//   { value: "DNB", label: "Neurosurgery, National Board of Examinations" },
//   { value: "Liverpool, UK", label: "Fellowship, Functional Neurosurgery & Complex Epilepsy, Walton Centre" },
//   { value: "2019", label: "Best Paper Award, Indian Society of Stereotactic & Functional Neurosurgery" },
// ];

const services = [
  {
    to: "/services/movement-disorders",
    title: "Movement Disorders",
    image: movementDisordersImg,
    desc: "Parkinson's disease, essential tremor and dystonia — how deep brain stimulation calms a misfiring circuit, and who it can help.",
  },
  {
    to: "/services/epilepsy",
    title: "Complex Epilepsy",
    image: epilepsyImg,
    desc: "When two medicines haven't controlled seizures — presurgical evaluation, resective surgery and neuromodulation options.",
  },
  {
    to: "/services/spasticity",
    title: "Spasticity",
    image: spasticityImg,
    desc: "Stiffness after stroke, cerebral palsy or spinal injury — from therapy and medicines to baclofen pumps and SDR.",
  },
  {
    to: "/services/chronic-pain",
    title: "Chronic Pain",
    image: chronicPainImg,
    desc: "Persistent nerve pain after spine surgery or CRPS — how spinal cord stimulation interrupts pain signals, with a trial run first.",
  },
];

const steps = [
  { num: "01", title: "Initial Consultation", desc: "A thorough review of your history, medicines tried, and goals." },
  { num: "02", title: "Targeted Diagnostics", desc: "MRI, video-EEG or other tests, only where they change the plan." },
  { num: "03", title: "Team Evaluation", desc: "Neurologist, neurosurgeon and neuropsychologist assess suitability together." },
  { num: "04", title: "Honest Discussion", desc: "What the treatment can realistically achieve — and what it can't." },
  { num: "05", title: "Long-term Follow-up", desc: "Programming, monitoring and adjustment over time." },
];

function FAQSection() {
  const questions = useFaqs();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-gray-50 py-20 px-6" id="faq">
      <div className="max-w-6xl mx-auto">
        <p className="text-teal-600 text-sm font-semibold uppercase tracking-widest text-center mb-12">Start Here</p>
        <div className="max-w-3xl mx-auto flex flex-col gap-12">
          {/* Why patient education */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Why patient education, and why in this tone?</h2>
            <p className="text-gray-600 font-medium text-lg mb-6">
              Because an informed patient makes better decisions — and asks better questions.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              When you hear the words <em>brain surgery</em>, the mind jumps to the dramatic. But a large part of modern neurosurgery is not about removing things at all. It is about <strong className="text-gray-700">modulating</strong> — nudging a misbehaving circuit back towards normal, using precisely placed electrodes, pumps, or targeted lesions. This field is called <strong className="text-gray-700">functional neurosurgery, or neuromodulation</strong>.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Everything on this site follows one rule: <strong className="text-gray-700">no exaggeration</strong>. Where a treatment works well, I will say so. Where it does not help — and every treatment has its limits — I will say that too. Nothing here replaces a consultation; it prepares you for one.
            </p>
          </div>

          {/* FAQ */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-8">Questions Patients Ask</h3>
            <div className="space-y-4">
              {questions.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                  <div key={i} className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                    >
                      <span className="font-semibold text-gray-800">{item.q}</span>
                      <svg
                        className={`w-5 h-5 text-teal-600 flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <p className="text-sm text-gray-400 mt-10">
              Full detail on each condition:{" "}
              <Link to="/services/movement-disorders" className="text-teal-600 font-semibold">Movement Disorders</Link>
              {" · "}
              <Link to="/services/epilepsy" className="text-teal-600 font-semibold">Epilepsy</Link>
              {" · "}
              <Link to="/services/spasticity" className="text-teal-600 font-semibold">Spasticity</Link>
              {" · "}
              <Link to="/services/chronic-pain" className="text-teal-600 font-semibold">Chronic Pain</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div>
      <Seo
        title="Neurosurgery & Neuromodulation in Bengaluru"
        description="Dr. Vishwas H V, Neurosurgeon (MBBS, DNB, FRCS), Bengaluru. Patient education on movement disorders, complex epilepsy, spasticity and chronic pain — deep brain stimulation, epilepsy surgery, baclofen pumps and spinal cord stimulation."
        path="/"
      />
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-teal-50 via-white to-teal-50 py-32 px-6">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
              The brain works on electricity.{" "}
              <span className="text-teal-600">Sometimes, so does the treatment.</span>
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-4 max-w-lg">
              Tremor, seizures, stiffness, pain — these are not vague mysteries. They are circuits misfiring. And circuits can be studied, modulated, and in some cases, corrected.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-lg">
              Dr. Vishwas H V — MBBS, DNB (Neurosurgery), FRCS (Surgical Neurology) · Fellowship in Functional Neurosurgery &amp; Complex Epilepsy, Walton Centre, Liverpool, UK
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="bg-teal-600 text-white font-semibold px-7 py-3 rounded-full hover:bg-teal-700 transition-colors"
              >
                Explore Conditions
              </a>
            </div>
          </div>
          {/* Doctor hero image */}
          <div className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-teal-100">
            <img src={doctorHero} alt="Dr. Vishwas H V" className="w-full h-full object-cover object-top" />
          </div>
        </div>
      </section>

      {/* ── Credentials strip ── */}
      <section className="bg-teal-700 py-1 px-2">
      </section>


        {/* ── Services ── */}
      <section id="services" className="bg-teal-700 py-4 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-teal-600 text-sm font-semibold uppercase tracking-widest text-center mb-2">Patient Education</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-12">Conditions We Treat</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((svc) => (
              <Link
                key={svc.to}
                to={svc.to}
                className="group border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:border-teal-200 transition-all flex flex-col overflow-hidden"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-teal-700 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{svc.desc}</p>
                  <span className="text-teal-600 text-sm font-semibold">Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      
      
      {/* ── Questions Patients Ask (FAQ) ── */}
      <FAQSection />

      
      {/* ── Quote ── */}
      <section className="bg-gray-50 py-14 px-6 text-center">
        <p className="max-w-2xl mx-auto text-xl md:text-2xl font-light text-gray-600 italic leading-relaxed">
          "Where a treatment works well, I will say so. Where it does not help, I will say that too. Nothing here replaces a consultation; it prepares you for one."
        </p>
        <p className="mt-3 text-teal-600 font-semibold text-sm">— Dr. Vishwas H V</p>
      </section>

      {/* ── About Strip ── */}
      <section className="bg-gradient-to-r from-teal-700 to-teal-700 py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0 w-48 h-48 rounded-full bg-white/20 flex items-center justify-center text-7xl">
            🩺
          </div>
          <div className="text-white">
            <p className="text-teal-200 text-sm font-semibold uppercase tracking-widest mb-2">The Surgeon</p>
            <h2 className="text-3xl font-extrabold mb-4">Dr. Vishwas H V</h2>
            <p className="text-teal-100 leading-relaxed max-w-2xl mb-5">
              A neurosurgeon and spine surgeon based in Bengaluru, with a focused interest in functional neurosurgery and neuromodulation — the surgical treatment of movement disorders, drug-resistant epilepsy, spasticity and chronic pain. His practice philosophy: explain plainly, select patients carefully, set expectations honestly, and let the results speak.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-teal-100 mb-6">
              {[
                "MBBS — M. S. Ramaiah Medical College, Bengaluru",
                "DNB (Neurosurgery) & FRCS (Surgical Neurology)",
                "Fellowship — Walton Centre, Liverpool, UK",
                "Best Paper Award, ISSFN 2019",
              ].map((c) => (
                <li key={c} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-300 flex-shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="inline-block bg-white text-teal-700 font-semibold px-6 py-2.5 rounded-full hover:bg-teal-50 transition-colors"
            >
              Full Profile
            </Link>
          </div>
        </div>
      </section>

      {/* ── Patient Journey ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-teal-600 text-sm font-semibold uppercase tracking-widest text-center mb-2">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-14">Your Patient Journey</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-teal-600 text-white flex items-center justify-center text-lg font-extrabold mb-4 shadow-md">
                  {step.num}
                </div>
                <h3 className="font-bold text-gray-800 mb-1">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="bg-teal-700 py-16 px-6 text-center">
        <h2 className="text-3xl font-extrabold text-white mb-3">Ready to ask the bigger question?</h2>
        <p className="text-teal-200 mb-8 max-w-xl mx-auto">
          Book a consultation with Dr. Vishwas H V and get a plain-language answer about what's actually possible.
        </p>
        <a
          href="#contact"
          className="bg-white text-teal-700 font-bold px-8 py-3 rounded-full hover:bg-teal-50 transition-colors text-sm"
        >
          Book a Consultation
        </a>
      </section>
    </div>
  );
}
