import { Link } from "react-router-dom";

export default function ChronicPain() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-50 to-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-teal-600 text-sm font-semibold uppercase tracking-widest mb-2">Patient Education · 04</p>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Chronic Pain &amp; Spinal Cord Stimulation</h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">
            When the scans look fine and the surgery was "successful," yet the pain continues — the problem is in the signalling, not the structure.
          </p>
        </div>
      </section>

      {/* Article */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
          <p className="italic text-teal-700 font-medium text-lg mb-3">Why does pain persist even after the injury has healed?</p>
          <p className="mb-8">
            Acute pain is an alarm — useful, protective, temporary. Chronic pain is what happens when the alarm system itself malfunctions. Damaged or sensitised nerves keep firing pain signals long after the original problem has settled. This is called <strong className="text-gray-800">neuropathic pain</strong>, and it explains a frustrating reality many patients know well: the scans look fine, the surgery was "successful," yet the burning, shooting, electric pain continues. The problem is no longer in the back or the leg. It is in the signalling.
          </p>

          <p className="italic text-teal-700 font-medium text-lg mb-3">If the wiring is the problem, can we work on the wiring?</p>
          <p className="mb-5">
            Yes — that is precisely the idea behind <strong className="text-gray-800">spinal cord stimulation (SCS)</strong>. Fine electrodes are placed in the epidural space, just outside the spinal cord, connected to a small implanted battery. The gentle electrical pulses interfere with pain signals travelling up to the brain, reducing how much pain is actually perceived. It is best established for:
          </p>
          <ul className="space-y-2 mb-8 list-disc pl-5">
            <li>Persistent leg and back pain after spine surgery (persistent spinal pain syndrome, previously called "failed back surgery syndrome")</li>
            <li>Complex regional pain syndrome (CRPS)</li>
            <li>Selected other neuropathic pain conditions, assessed case by case</li>
          </ul>
          <p className="mb-8">
            The most patient-friendly feature of SCS: <strong className="text-gray-800">you get to test it before committing.</strong> A temporary trial lead is placed through a needle, and you live with the stimulation for several days, at home, doing your normal activities. Only if the trial gives meaningful relief do we proceed to the permanent implant. If it doesn't, the trial lead is simply removed. Few treatments in medicine offer a test drive; this one does.
          </p>

          <p className="italic text-teal-700 font-medium text-lg mb-3">What about pain that isn't nerve pain?</p>
          <p className="mb-8">
            Not all chronic pain needs an implant — and honesty demands saying so. Much chronic back and neck pain arises from small joints of the spine (facet joints) or the sacroiliac joint. For these, targeted options like diagnostic nerve blocks and <strong className="text-gray-800">radiofrequency ablation</strong> — using heat to quieten the tiny nerves supplying a painful joint — can give months of relief without any implant at all. And chronic pain is never treated by procedures alone: medicines, physiotherapy, psychological support and pacing of activity all carry weight. The procedure is one instrument in the orchestra, not the whole performance.
          </p>

          <div className="border-l-4 border-amber-400 bg-amber-50 rounded-r-xl p-5 text-sm text-gray-700">
            <strong className="text-amber-700">A caution against overpromising:</strong> no pain procedure makes pain zero. A realistic and worthwhile target for stimulation therapies is a substantial reduction — commonly described as 50% or more — along with better sleep, function and reduced medication. If anyone promises you complete cure of long-standing chronic pain, be sceptical. I would be.
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <a href="#contact" className="bg-teal-600 text-white font-semibold px-7 py-3 rounded-full hover:bg-teal-700 transition-colors">
              Book a Consultation
            </a>
            <Link to="/services/movement-disorders" className="border border-teal-600 text-teal-600 font-semibold px-7 py-3 rounded-full hover:bg-teal-50 transition-colors">
              Read about Movement Disorders →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
