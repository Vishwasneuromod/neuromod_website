import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import doctorHero from "../assets/images/doctor-hero.jpg";

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "5000+", label: "Patients Treated" },
  { value: "99%", label: "Patient Satisfaction" },
  { value: "24/7", label: "Ongoing Support" },
];

const services = [
  {
    to: "/services/1",
    title: "Service 1",
    icon: "🧠",
    desc: "Comprehensive neurological assessment and personalised treatment plans tailored to your unique condition.",
  },
  {
    to: "/services/2",
    title: "Service 2",
    icon: "⚡",
    desc: "Advanced neuromodulation therapies using the latest evidence-based protocols for lasting relief.",
  },
  {
    to: "/services/3",
    title: "Service 3",
    icon: "🔬",
    desc: "Precision diagnostic testing to identify root causes and guide targeted intervention strategies.",
  },
  {
    to: "/services/4",
    title: "Service 4",
    icon: "🌿",
    desc: "Integrative wellness programmes combining conventional neurology with holistic lifestyle medicine.",
  },
];

const steps = [
  { num: "01", title: "Initial Consultation", desc: "A thorough review of your history, symptoms, and goals." },
  { num: "02", title: "Advanced Diagnostics", desc: "State-of-the-art neurological and functional testing." },
  { num: "03", title: "Personalised Protocol", desc: "A bespoke treatment plan designed around you." },
  { num: "04", title: "Regular Monitoring", desc: "Ongoing check-ins to track progress and adjust care." },
  { num: "05", title: "Long-term Wellness", desc: "Building resilience and maintaining your best neurological health." },
];

const testimonials = [
  {
    name: "Priya Mehta",
    text: "Dr. Vishwas completely changed my life. After years of misdiagnoses, he found the root cause of my chronic migraines and I've been pain-free for six months.",
    rating: 5,
  },
  {
    name: "Rajiv Nair",
    text: "The most thorough neurologist I have ever seen. His attention to detail and compassionate care is unmatched. Highly recommended.",
    rating: 5,
  },
  {
    name: "Sunita Sharma",
    text: "NEUROMOD is unlike any clinic I've visited. Dr. Vishwas takes time to truly listen and his treatment protocol worked wonders for my nerve condition.",
    rating: 5,
  },
  {
    name: "Rajiv Nair",
    text: "The most thorough neurologist I have ever seen. His attention to detail and compassionate care is unmatched. Highly recommended.",
    rating: 5,
  },
  {
    name: "Sunita Sharma",
    text: "NEUROMOD is unlike any clinic I've visited. Dr. Vishwas takes time to truly listen and his treatment protocol worked wonders for my nerve condition.",
    rating: 5,
  },
  {
    name: "Rajiv Nair",
    text: "The most thorough neurologist I have ever seen. His attention to detail and compassionate care is unmatched. Highly recommended.",
    rating: 5,
  },
  {
    name: "Sunita Sharma",
    text: "NEUROMOD is unlike any clinic I've visited. Dr. Vishwas takes time to truly listen and his treatment protocol worked wonders for my nerve condition.",
    rating: 5,
  },
];

function TestimonialsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animId: number;
    let isPaused = false;

    const step = () => {
      if (!isPaused && track) {
        track.scrollLeft += 0.8;
        if (track.scrollLeft >= track.scrollWidth / 2) {
          track.scrollLeft = 0;
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);

    // pause on hover (desktop) and on touch (mobile) so native swipe isn't fought
    const pause = () => { isPaused = true; };
    const resume = () => { isPaused = false; };

    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", resume);
    track.addEventListener("touchstart", pause, { passive: true });
    track.addEventListener("touchend", resume, { passive: true });

    return () => {
      cancelAnimationFrame(animId);
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", resume);
      track.removeEventListener("touchstart", pause);
      track.removeEventListener("touchend", resume);
    };
  }, []);

  const cards = [...testimonials, ...testimonials];

  return (
    <section className="bg-gray-50 py-20 overflow-hidden">
      <p className="text-teal-600 text-sm font-semibold uppercase tracking-widest text-center mb-2">Patient Stories</p>
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-12 px-6">
        What Our Patients Say
      </h2>
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto px-6"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        } as React.CSSProperties}
      >
        {cards.map((t, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-80 bg-white rounded-2xl p-7 shadow-sm border border-gray-100"
          >
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <span key={j} className="text-yellow-400 text-lg">★</span>
              ))}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
            <p className="font-semibold text-gray-800 text-sm">— {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-teal-50 via-white to-teal-50 py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="flex-1">
            <span className="inline-block bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wider uppercase">
              Neurology &amp; Neuromodulation
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
              Looking for care that gets to the{" "}
              <span className="text-teal-600">root cause</span> of your neurological issues?
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-lg">
              Dr. Vishwas at NEUROMOD combines precision neuroscience with compassionate, patient-centred care to restore your quality of life.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="bg-teal-600 text-white font-semibold px-7 py-3 rounded-full hover:bg-teal-700 transition-colors"
              >
                Our Services
              </a>
              <a
                href="#contact"
                className="border border-teal-600 text-teal-600 font-semibold px-7 py-3 rounded-full hover:bg-teal-50 transition-colors"
              >
                Book Appointment
              </a>
            </div>
          </div>
          {/* Doctor hero image */}
          <div className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-teal-100">
            <img src={doctorHero} alt="Dr. Vishwas" className="w-full h-full object-cover object-top" />
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-teal-700 py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-4xl font-extrabold">{s.value}</p>
              <p className="text-teal-200 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Quote ── */}
      <section className="bg-gray-50 py-14 px-6 text-center">
        <p className="max-w-2xl mx-auto text-xl md:text-2xl font-light text-gray-600 italic leading-relaxed">
          "Honouring the design of the human nervous system — precision at the cellular level, healing at the human level."
        </p>
        <p className="mt-3 text-teal-600 font-semibold text-sm">— Dr. Vishwas, NEUROMOD</p>
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-teal-600 text-sm font-semibold uppercase tracking-widest text-center mb-2">What We Offer</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((svc) => (
              <Link
                key={svc.to}
                to={svc.to}
                className="group border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-md hover:border-teal-200 transition-all flex flex-col gap-4"
              >
                <div className="text-4xl">{svc.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-teal-700 transition-colors">
                  {svc.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{svc.desc}</p>
                <span className="text-teal-600 text-sm font-semibold">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Strip ── */}
      <section className="bg-gradient-to-r from-teal-700 to-teal-700 py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0 w-48 h-48 rounded-full bg-white/20 flex items-center justify-center text-7xl">
            🩺
          </div>
          <div className="text-white">
            <p className="text-teal-200 text-sm font-semibold uppercase tracking-widest mb-2">About the Doctor</p>
            <h2 className="text-3xl font-extrabold mb-4">Dr. Vishwas</h2>
            <p className="text-teal-100 leading-relaxed max-w-2xl mb-5">
              Board-certified neurologist and neuromodulation specialist with over 15 years of clinical experience. Dr. Vishwas combines cutting-edge diagnostics with a deeply patient-centred philosophy — listening carefully, thinking comprehensively, and treating holistically.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-teal-100 mb-6">
              {[
                "MD Neurology, AIIMS New Delhi",
                "Fellowship in Neuromodulation",
                "Member, Indian Neurological Society",
                "Published Researcher in Pain Management",
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

      {/* ── Testimonials ── */}
      <TestimonialsCarousel />

      {/* ── CTA Banner ── */}
      <section className="bg-teal-700 py-16 px-6 text-center">
        <h2 className="text-3xl font-extrabold text-white mb-3">Ready to take the first step?</h2>
        <p className="text-teal-200 mb-8 max-w-xl mx-auto">
          Book a consultation with Dr. Vishwas today and begin your journey back to neurological health.
        </p>
        <a
          href="#contact"
          className="bg-white text-teal-700 font-bold px-8 py-3 rounded-full hover:bg-teal-50 transition-colors text-sm"
        >
          Book Appointment
        </a>
      </section>
    </div>
  );
}
