export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-50 to-white py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0 w-56 h-56 rounded-full bg-gradient-to-br from-teal-200 to-teal-300 flex items-center justify-center shadow-xl text-8xl">
            👨‍⚕️
          </div>
          <div>
            <p className="text-teal-600 text-sm font-semibold uppercase tracking-widest mb-2">About</p>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Dr. Vishwas</h1>
            <p className="text-teal-600 font-medium mb-5">Neurologist &amp; Neuromodulation Specialist</p>
            <p className="text-gray-500 leading-relaxed max-w-2xl">
              With over 15 years of dedicated clinical practice, Dr. Vishwas has built NEUROMOD into a centre of excellence for neurological care. His philosophy is simple: every patient deserves a precise diagnosis, a personalised plan, and a compassionate partner throughout their healing journey.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-teal-600 text-sm font-semibold uppercase tracking-widest mb-2">Qualifications</p>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Education &amp; Credentials</h2>
          <ul className="space-y-4">
            {[
              "MD Neurology — All India Institute of Medical Sciences (AIIMS), New Delhi",
              "DM (Neurology) — National Institute of Mental Health and Neurosciences, Bangalore",
              "Fellowship in Neuromodulation — International Neuromodulation Society",
              "Certified in Pain Medicine — Indian Association for the Study of Pain",
              "Member, Indian Neurological Society",
              "Published researcher with 20+ peer-reviewed papers in neurological journals",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-teal-500 flex-shrink-0" />
                <span className="text-gray-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-teal-600 text-sm font-semibold uppercase tracking-widest mb-2">Philosophy</p>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">A Root-Cause Approach</h2>
          <p className="text-gray-500 leading-relaxed text-lg max-w-2xl mx-auto">
            Dr. Vishwas believes that managing symptoms is never enough. True healing requires understanding the underlying neurological, metabolic, and lifestyle factors driving your condition — and addressing every single one of them.
          </p>
        </div>
      </section>
    </div>
  );
}
