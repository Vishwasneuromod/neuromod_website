import { Link } from "react-router-dom";

export default function MovementDisorders() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-50 to-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-teal-600 text-sm font-semibold uppercase tracking-widest mb-2">Patient Education · 01</p>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Movement Disorders &amp; Deep Brain Stimulation</h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">
            Tremor, stiffness and slowness are not vague mysteries — they are a circuit falling out of rhythm. Here's how that circuit works, and how it can be modulated.
          </p>
        </div>
      </section>

      {/* Article */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
          <p className="italic text-teal-700 font-medium text-lg mb-3">What exactly goes wrong in Parkinson's disease?</p>
          <p className="mb-5">
            Deep inside the brain sit clusters of cells called the <strong className="text-gray-800">basal ganglia</strong> — think of them as the volume control and smoothing filter for movement. In Parkinson's disease, cells that produce a chemical messenger called <strong className="text-gray-800">dopamine</strong> slowly die off. Without enough dopamine, this circuit falls out of rhythm. The result: tremor, stiffness, slowness. That's it. (That's an oversimplification, but really, that's the core of it.)
          </p>
          <p className="mb-8">
            Medicines like levodopa replace the missing dopamine, and for years they work beautifully. But with time, two problems creep in: the effect of each dose becomes shorter (<em>wearing off</em>), and the doses themselves start producing involuntary dance-like movements (<em>dyskinesias</em>). The patient swings between "off" periods of stiffness and "on" periods of excess movement. This is where surgery enters the discussion.
          </p>

          <p className="italic text-teal-700 font-medium text-lg mb-3">So what is Deep Brain Stimulation (DBS)?</p>
          <p className="mb-5">
            DBS is a pacemaker for the brain. Thin electrodes — about the width of a noodle — are placed with millimetre precision into the misfiring circuit (usually a target called the <strong className="text-gray-800">subthalamic nucleus</strong> or the <strong className="text-gray-800">globus pallidus</strong>). A small battery implanted under the collarbone delivers continuous, gentle electrical pulses that calm the abnormal firing. Nothing is destroyed. The stimulation is adjustable, and it is reversible — switch it off, and the brain returns to its previous state.
          </p>

          <ul className="space-y-3 mb-8 list-disc pl-5">
            <li><strong className="text-gray-800">What DBS helps:</strong> tremor, stiffness, slowness, motor fluctuations and dyskinesias — broadly, the symptoms that respond to levodopa on a good day.</li>
            <li><strong className="text-gray-800">What DBS does not help:</strong> balance problems, freezing that doesn't respond to medication, speech difficulty, and memory or thinking problems. It does not cure Parkinson's or stop its progression.</li>
            <li><strong className="text-gray-800">Who is a good candidate:</strong> typically someone with a clear diagnosis for several years, a good response to levodopa, troublesome fluctuations or tremor despite best medical therapy, and no significant dementia. Candidate selection is done jointly with a neurologist — never by the surgeon alone.</li>
          </ul>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
              <p className="font-bold text-gray-800 mb-1">Pacemaker, not scalpel</p>
              <p className="text-sm text-gray-500">DBS modulates a circuit; it removes nothing. Settings are tuned in clinic, over multiple visits.</p>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
              <p className="font-bold text-gray-800 mb-1">Adjustable &amp; reversible</p>
              <p className="text-sm text-gray-500">Stimulation can be changed or switched off. Batteries are replaceable; rechargeable versions exist.</p>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-5">
              <p className="font-bold text-gray-800 mb-1">Team decision</p>
              <p className="text-sm text-gray-500">Neurologist + neurosurgeon + neuropsychologist assess suitability together.</p>
            </div>
          </div>

          <p className="italic text-teal-700 font-medium text-lg mb-3">And essential tremor and dystonia?</p>
          <p className="mb-8">
            <strong className="text-gray-800">Essential tremor</strong> is a common shaking disorder — often familiar, often familial — that mainly affects the hands during action (holding a cup, writing). When medicines fail and the tremor interferes with daily life, DBS of a relay station called the <strong className="text-gray-800">thalamus (VIM nucleus)</strong> can suppress it substantially. <strong className="text-gray-800">Dystonia</strong> — sustained, twisting muscle contractions — can also respond to DBS of the globus pallidus, though improvement here builds up gradually over months rather than minutes.
          </p>

          <div className="border-l-4 border-amber-400 bg-amber-50 rounded-r-xl p-5 text-sm text-gray-700">
            <strong className="text-amber-700">An honest word:</strong> DBS is one of the best-studied procedures in neurosurgery, backed by decades of trial evidence. But it is a treatment, not a miracle. The most satisfied patients are the ones who came in with accurate expectations — which is exactly why this page exists.
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <a href="#contact" className="bg-teal-600 text-white font-semibold px-7 py-3 rounded-full hover:bg-teal-700 transition-colors">
              Book a Consultation
            </a>
            <Link to="/services/epilepsy" className="border border-teal-600 text-teal-600 font-semibold px-7 py-3 rounded-full hover:bg-teal-50 transition-colors">
              Read about Epilepsy →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
