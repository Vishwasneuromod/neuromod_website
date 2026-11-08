import { FormEvent, useState } from "react";
import { login } from "../../lib/adminApi";
import { btn, input } from "./ui";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState("");

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setMsg("");
    try {
      await login(username.trim(), password);
      // logging in updates the shared session state, so the page switches over by itself
    } catch (err) {
      setPassword("");
      setMsg(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="max-w-sm mx-auto py-20 px-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Editor login</h1>
      <form onSubmit={submit} className="space-y-4">
        <label className="block text-sm font-medium text-gray-700">
          Username
          <input className={`${input} mt-1`} autoComplete="username" autoCapitalize="none" required value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label className="block text-sm font-medium text-gray-700">
          Password
          <input className={`${input} mt-1`} type="password" autoComplete="current-password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button disabled={busy} className={`${btn} bg-teal-600 text-white hover:bg-teal-700`}>{busy ? "Logging in…" : "Log in"}</button>
      </form>
      {msg && <p role="alert" className="mt-4 text-sm text-red-600">{msg}</p>}
    </div>
  );
}
