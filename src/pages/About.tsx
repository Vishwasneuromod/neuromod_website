export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-50 to-white py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0 w-56 h-56 rounded-full overflow-hidden shadow-xl ring-4 ring-teal-100">
            <img
              src="/dr-vishwas--h-v-4604.jpg"
              alt="Dr. Vishwas H V"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div>
            <p className="text-teal-600 text-sm font-semibold uppercase tracking-widest mb-2">About</p>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Dr. Vishwas H V</h1>
            <p className="text-teal-600 font-medium mb-5">Neurosurgeon &amp; Neuromodulation Specialist, Bengaluru</p>
            <p className="text-gray-500 leading-relaxed max-w-2xl mb-3">
              Dr. Vishwas H V is a neurosurgeon and spine surgeon with a focused interest in <strong className="text-gray-700">functional neurosurgery and neuromodulation</strong> — the surgical treatment of movement disorders, drug-resistant epilepsy, spasticity and chronic pain.
            </p>
            <p className="text-gray-500 leading-relaxed max-w-2xl">
              After MBBS from M. S. Ramaiah Medical College and DNB in Neurosurgery, he trained and worked as a consultant neurosurgeon at Narayana Health, Bengaluru. He then completed a fellowship in minimally invasive spine surgery in Seoul, South Korea, followed by the Royal College Fellowship in Functional Neurosurgery and Complex Epilepsy at the Walton Centre, Liverpool, UK — one of Europe's largest dedicated neuroscience hospitals — with further training in endoscopic and robotic spine surgery. He is a Fellow of the Royal College of Surgeons of England (FRCS).
            </p>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div>
            <p className="text-teal-600 text-sm font-semibold uppercase tracking-widest mb-3">Qualifications</p>
            <ul className="space-y-3">
              {[
                "MBBS — M. S. Ramaiah Medical College, Bengaluru",
                "DNB (Neurosurgery) — National Board of Examinations",
                "FRCS (Surgical Neurology) — Royal College of Surgeons of England",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-teal-500 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-teal-600 text-sm font-semibold uppercase tracking-widest mb-3 mt-8">Fellowships</p>
            <ul className="space-y-3">
              {[
                "Functional Neurosurgery & Complex Epilepsy — Walton Centre, Liverpool, UK",
                "Minimally Invasive Spine Surgery — Seoul, South Korea",
                "Endoscopic & Robotic Spine Surgery",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-teal-500 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-teal-600 text-sm font-semibold uppercase tracking-widest mb-3">Recognition</p>
            <ul className="space-y-3">
              {[
                "Best Paper Award — Indian Society of Stereotactic & Functional Neurosurgery, 2019",
                "International Surgeon Training Programme Fellowship Award, 2020",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-teal-500 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-teal-600 text-sm font-semibold uppercase tracking-widest mb-3 mt-8">Registration</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-teal-500 flex-shrink-0" />
                <span className="text-gray-600 text-sm">Karnataka Medical Council — Reg. No. 76352</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-teal-600 text-sm font-semibold uppercase tracking-widest mb-2">Philosophy</p>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">No Exaggeration, In Either Direction</h2>
          <p className="text-gray-500 leading-relaxed text-lg max-w-2xl mx-auto">
            His practice philosophy is simple: explain plainly, select patients carefully, set expectations honestly, and let the results speak. Where a treatment works well, he says so. Where it does not help — and every treatment has its limits — he says that too. Nothing on this website replaces a consultation; it prepares you for one.
          </p>
        </div>
      </section>
    </div>
  );
}
