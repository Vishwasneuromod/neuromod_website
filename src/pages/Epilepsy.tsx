import { Link } from "react-router-dom";
import Seo from "../components/Seo";

export default function Epilepsy() {
  return (
    <div>
      <Seo
        title="Complex Epilepsy & Epilepsy Surgery"
        description="When two medicines haven't controlled seizures — presurgical evaluation (video-EEG, MRI, SEEG), resective surgery and neuromodulation options like VNS and thalamic DBS, explained honestly."
        path="/services/epilepsy"
      />
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-50 to-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-teal-600 text-sm font-semibold uppercase tracking-widest mb-2">Patient Education · 02</p>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Complex Epilepsy &amp; Epilepsy Surgery</h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">
            When medicines stop working, the question changes from "which drug next" to "where are the seizures actually coming from."
          </p>
        </div>
      </section>

      {/* Article */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
          <p className="italic text-teal-700 font-medium text-lg mb-3">"My medicines aren't controlling my seizures. Now what?"</p>
          <p className="mb-5">
            A seizure is an electrical storm — a group of neurons firing together, abnormally and excessively. Anti-seizure medicines raise the threshold for these storms, and for roughly two-thirds of people, that is enough. But about <strong className="text-gray-800">one in three</strong> patients continue to have seizures despite medication. There is even a formal definition: if seizures persist after adequate trials of <strong className="text-gray-800">two appropriate, well-tolerated medicines</strong>, the epilepsy is called <strong className="text-gray-800">drug-resistant</strong>. Here is the uncomfortable truth — once two suitable drugs have failed, the chance that a third or fourth drug alone will bring lasting freedom from seizures is small. Continuing to shuffle medicines for years, without asking a bigger question, wastes precious time.
          </p>
          <p className="mb-8">The bigger question is this: <em>where are the seizures coming from?</em></p>

          <p className="italic text-teal-700 font-medium text-lg mb-3">Finding the source: presurgical evaluation</p>
          <p className="mb-5">
            If the storms begin from one identifiable spot in the brain — a scar, a small malformation, a sclerosed hippocampus — then removing or disconnecting that spot can stop the seizures altogether. But first we must find it, and confirm that removing it is safe. This detective work is called presurgical evaluation, and it typically involves:
          </p>
          <ul className="space-y-3 mb-10 list-disc pl-5">
            <li><strong className="text-gray-800">Video-EEG monitoring</strong> — recording your actual seizures on camera and EEG simultaneously, in hospital, to see where they begin.</li>
            <li><strong className="text-gray-800">High-resolution MRI</strong> — using epilepsy-specific protocols to hunt for subtle abnormalities a routine scan misses.</li>
            <li><strong className="text-gray-800">Supportive tests</strong> — PET scans, neuropsychological assessment, and sometimes functional MRI to map language and memory.</li>
            <li><strong className="text-gray-800">SEEG (stereo-EEG)</strong> — when the scalp tests disagree, fine electrodes are placed <em>inside</em> the brain through tiny openings, to listen to the seizure at its source. This is an investigation, not a treatment — but it is often the step that makes curative surgery possible in complex cases.</li>
          </ul>

          <p className="italic text-teal-700 font-medium text-lg mb-3">What can surgery actually achieve?</p>
          <p className="mb-8">
            It depends entirely on what the evaluation finds. For the most common surgically treatable form — seizures arising from the mesial temporal lobe — resective surgery gives long-term seizure freedom to a majority of well-selected patients, results no medication change can match at that stage. For patients where the seizure focus cannot be safely removed, we do not simply give up. <strong className="text-gray-800">Neuromodulation</strong> options exist: <strong className="text-gray-800">vagus nerve stimulation (VNS)</strong>, where a pacemaker-like device stimulates a nerve in the neck, and <strong className="text-gray-800">deep brain stimulation</strong> of the anterior thalamus. These rarely eliminate seizures completely, but they can meaningfully reduce seizure frequency and severity — and I will always be upfront about that distinction: <em>resective surgery aims to cure; neuromodulation aims to reduce.</em>
          </p>

          <div className="border-l-4 border-amber-400 bg-amber-50 rounded-r-xl p-5 text-sm text-gray-700">
            <strong className="text-amber-700">The one message to take away:</strong> if you or your child has had seizures despite two proper medicines, ask for a referral to a comprehensive epilepsy programme for evaluation. Being evaluated does not commit you to surgery. It simply answers the question of what is possible.
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <a href="#contact" className="bg-teal-600 text-white font-semibold px-7 py-3 rounded-full hover:bg-teal-700 transition-colors">
              Book a Consultation
            </a>
            <Link to="/services/spasticity" className="border border-teal-600 text-teal-600 font-semibold px-7 py-3 rounded-full hover:bg-teal-50 transition-colors">
              Read about Spasticity →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
