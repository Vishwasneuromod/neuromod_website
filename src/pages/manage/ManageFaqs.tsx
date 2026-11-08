import { FormEvent, useCallback, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import {
  AdminFaq, AuthError, createFaq, deleteFaq, listFaqs, logout, reorderFaqs, updateFaq, useLoggedIn,
} from "../../lib/adminApi";
import ManageShell from "./ManageShell";
import { btn, input, MANAGE_BASE } from "./ui";

const links = [
  { value: "", label: "No link" },
  { value: "/services/movement-disorders", label: "Movement Disorders" },
  { value: "/services/epilepsy", label: "Epilepsy" },
  { value: "/services/spasticity", label: "Spasticity" },
  { value: "/services/chronic-pain", label: "Chronic Pain" },
];


function Row({
  faq, first, last, onSaved, onDeleted, onMove, onAuthLost,
}: {
  faq: AdminFaq; first: boolean; last: boolean;
  onSaved: (f: AdminFaq) => void; onDeleted: (id: string) => void; onMove: (dir: -1 | 1) => void; onAuthLost: () => void;
}) {
  const [draft, setDraft] = useState({ q: faq.q, a: faq.a, to: faq.to || "", published: faq.published });
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState("");
  const dirty = draft.q !== faq.q || draft.a !== faq.a || draft.to !== (faq.to || "") || draft.published !== faq.published;

  const act = async (fn: () => Promise<void>, ok = "") => {
    setBusy(true);
    setMsg("");
    try {
      await fn();
      setMsg(ok);
    } catch (e) {
      if (e instanceof AuthError) onAuthLost();
      else setMsg(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setBusy(false);
    }
  };

  return (
    <li className={`border rounded-2xl p-5 bg-white shadow-sm ${draft.published ? "border-gray-100" : "border-amber-300 bg-amber-50"}`}>
      <div className="space-y-3">
        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">Question
          <input className={`${input} mt-1 normal-case font-normal`} value={draft.q} maxLength={300} onChange={(e) => setDraft({ ...draft, q: e.target.value })} />
        </label>
        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">Answer
          <textarea className={`${input} mt-1 normal-case font-normal`} rows={5} maxLength={5000} value={draft.a} onChange={(e) => setDraft({ ...draft, a: e.target.value })} />
        </label>
        <div className="flex flex-wrap items-center gap-4">
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Read more link
            <select className={`${input} mt-1 normal-case font-normal`} value={draft.to} onChange={(e) => setDraft({ ...draft, to: e.target.value })}>
              {links.map((l) => <option key={l.value} value={l.value}>{l.label}</option>)}
            </select>
          </label>
          <label className="flex items-center gap-2 text-sm text-gray-700 mt-5">
            <input type="checkbox" checked={draft.published} onChange={(e) => setDraft({ ...draft, published: e.target.checked })} />
            Show on website
          </label>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2 mt-4">
        <button disabled={busy || !dirty} className={`${btn} bg-teal-600 text-white hover:bg-teal-700`}
          onClick={() => act(async () => { onSaved(await updateFaq(faq.id, draft)); }, "Saved")}>Save</button>
        <button disabled={busy || first} aria-label="Move up" className={`${btn} border border-gray-300 text-gray-700`} onClick={() => onMove(-1)}>↑</button>
        <button disabled={busy || last} aria-label="Move down" className={`${btn} border border-gray-300 text-gray-700`} onClick={() => onMove(1)}>↓</button>
        <button disabled={busy} className={`${btn} text-red-600 hover:bg-red-50 ml-auto`}
          onClick={() => { if (window.confirm("Delete this question permanently?")) act(async () => { await deleteFaq(faq.id); onDeleted(faq.id); }); }}>Delete</button>
        {msg && <span role="status" className="text-sm text-gray-500">{msg}</span>}
      </div>
    </li>
  );
}

function Editor() {
  const [faqs, setFaqs] = useState<AdminFaq[] | null>(null);
  const [error, setError] = useState("");
  const [adding, setAdding] = useState({ q: "", a: "" });
  const [busy, setBusy] = useState(false);

  const lost = useCallback(() => logout(), []); // clears the session; the page then redirects to the login
  const fail = (e: unknown) => (e instanceof AuthError ? lost() : setError(e instanceof Error ? e.message : "Something went wrong"));

  useEffect(() => {
    listFaqs().then(setFaqs).catch(fail);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const move = async (i: number, dir: -1 | 1) => {
    if (!faqs) return;
    const next = [...faqs];
    [next[i], next[i + dir]] = [next[i + dir], next[i]];
    setFaqs(next);
    try { await reorderFaqs(next.map((f) => f.id)); } catch (e) { fail(e); listFaqs().then(setFaqs).catch(fail); }
  };

  const add = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      const f = await createFaq({ q: adding.q, a: adding.a });
      setFaqs((cur) => [...(cur || []), f]);
      setAdding({ q: "", a: "" });
    } catch (err) { fail(err); } finally { setBusy(false); }
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <Link to={MANAGE_BASE} className="text-sm text-teal-700 font-semibold">← Dashboard</Link>
      <div className="flex items-center justify-between mb-2 mt-3">
        <h1 className="text-2xl font-bold text-gray-900">Patient questions</h1>
        <button onClick={lost} className="text-sm text-gray-500 underline">Log out</button>
      </div>
      <p className="text-sm text-gray-500 mb-8">Changes go live within a few minutes. Answers are plain text.</p>
      {error && <p role="alert" className="mb-4 text-sm text-red-600">{error}</p>}
      {!faqs && !error && <p className="text-gray-400">Loading…</p>}
      <ul className="space-y-4">
        {faqs?.map((f, i) => (
          <Row key={f.id} faq={f} first={i === 0} last={i === faqs.length - 1}
            onSaved={(u) => setFaqs((cur) => cur!.map((x) => (x.id === u.id ? u : x)))}
            onDeleted={(id) => setFaqs((cur) => cur!.filter((x) => x.id !== id))}
            onMove={(d) => move(i, d)} onAuthLost={lost} />
        ))}
      </ul>
      <form onSubmit={add} className="mt-10 border-t pt-8 space-y-3">
        <h2 className="font-bold text-gray-900">Add a question</h2>
        <input className={input} placeholder="Question" required maxLength={300} value={adding.q} onChange={(e) => setAdding({ ...adding, q: e.target.value })} />
        <textarea className={input} placeholder="Answer" required rows={4} maxLength={5000} value={adding.a} onChange={(e) => setAdding({ ...adding, a: e.target.value })} />
        <button disabled={busy} className={`${btn} bg-teal-600 text-white hover:bg-teal-700`}>{busy ? "Adding…" : "Add question"}</button>
      </form>
    </div>
  );
}

export default function ManageFaqs() {
  const loggedIn = useLoggedIn();
  if (!loggedIn) return <Navigate to={MANAGE_BASE} replace />;
  return (
    <ManageShell title="Patient questions">
      <Editor />
    </ManageShell>
  );
}
