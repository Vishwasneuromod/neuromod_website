import { Link } from "react-router-dom";

export default function Spasticity() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-50 to-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-teal-600 text-sm font-semibold uppercase tracking-widest mb-2">Patient Education · 03</p>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Spasticity — When Muscles Won't Let Go</h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">
            Stiffness after stroke, cerebral palsy or spinal injury is treatable at every stage — from therapy through to surgery.
          </p>
        </div>
      </section>

      {/* Article */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
          <p className="italic text-teal-700 font-medium text-lg mb-3">Why do muscles become stiff after a stroke or brain injury?</p>
          <p className="mb-8">
            Your spinal cord contains reflex loops that keep muscles ready for action. Normally, the brain sends a constant calming signal down the cord, holding these reflexes in check. When that pathway is damaged — by stroke, cerebral palsy, spinal cord injury, or multiple sclerosis — the brakes are lost. The reflexes run unchecked, and muscles stay contracted: tight, resistant, sometimes painful. That is spasticity. It can interfere with walking, hygiene, sleep, and caregiving, and over years it can lead to fixed joint deformities.
          </p>

          <p className="italic text-teal-700 font-medium text-lg mb-3">How is it treated? Think of a ladder.</p>
          <ul className="space-y-4 mb-10 list-disc pl-5">
            <li><strong className="text-gray-800">Step 1 — Therapy:</strong> physiotherapy, stretching, splints and positioning. This remains the foundation at every step; nothing below replaces it.</li>
            <li><strong className="text-gray-800">Step 2 — Oral medicines:</strong> baclofen, tizanidine and similar drugs. Useful, but the doses needed for stiff limbs often cause drowsiness, because the drug bathes the whole body to reach the spinal cord.</li>
            <li><strong className="text-gray-800">Step 3 — Botulinum toxin injections:</strong> when spasticity affects a few specific muscles, targeted injections weaken exactly those muscles for around three to four months, and are repeated as needed.</li>
            <li><strong className="text-gray-800">Step 4 — Intrathecal baclofen (ITB) pump:</strong> for severe, widespread spasticity. A small pump implanted under the skin of the abdomen delivers baclofen directly into the fluid around the spinal cord — the drug reaches where it is needed at a tiny fraction of the oral dose, with far less sedation. A test dose is always given first, so you and your family can see the effect before committing to a pump.</li>
            <li><strong className="text-gray-800">Step 5 — Selective dorsal rhizotomy (SDR):</strong> mainly for carefully selected children with cerebral palsy. Overactive sensory rootlets entering the spinal cord are tested electrically during surgery, and only the abnormal ones are divided — permanently reducing spasticity in the legs. It is a one-time procedure, followed by months of committed rehabilitation.</li>
          </ul>

          <div className="border-l-4 border-amber-400 bg-amber-50 rounded-r-xl p-5 text-sm text-gray-700">
            <strong className="text-amber-700">What defines success?</strong> Not a number on a scale, but a goal that matters to you: sitting comfortably in a wheelchair, easier dressing and hygiene, better sleep, or improved walking. We define that goal <em>before</em> any procedure — and measure the result against it.
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <a href="#contact" className="bg-teal-600 text-white font-semibold px-7 py-3 rounded-full hover:bg-teal-700 transition-colors">
              Book a Consultation
            </a>
            <Link to="/services/chronic-pain" className="border border-teal-600 text-teal-600 font-semibold px-7 py-3 rounded-full hover:bg-teal-50 transition-colors">
              Read about Chronic Pain →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
