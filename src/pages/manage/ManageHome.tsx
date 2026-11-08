import { Link } from "react-router-dom";
import { logout, useLoggedIn } from "../../lib/adminApi";
import Login from "./Login";
import ManageShell from "./ManageShell";
import { btn, MANAGE_BASE } from "./ui";

// To add another tool: add an entry here, then add its route in App.tsx (use `${MANAGE_BASE}/your-tool`)
// and protect the page the same way ManageFaqs does (redirect to MANAGE_BASE when logged out).
const tools = [
  {
    to: `${MANAGE_BASE}/faqs`,
    title: "Manage FAQs",
    desc: "Edit the “Questions Patients Ask” section on the home page: add, edit, hide, reorder.",
  },
];

export default function ManageHome() {
  const loggedIn = useLoggedIn();

  return (
    <ManageShell title={loggedIn ? "Dashboard" : "Editor login"}>
      {!loggedIn ? (
        <Login />
      ) : (
        <div className="max-w-3xl mx-auto py-12 px-6">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <button onClick={logout} className="text-sm text-gray-500 underline">Log out</button>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {tools.map((t) => (
              <li key={t.to} className="border border-gray-100 rounded-2xl p-6 bg-white shadow-sm flex flex-col">
                <h2 className="font-bold text-gray-900 mb-1">{t.title}</h2>
                <p className="text-sm text-gray-500 mb-5 flex-1">{t.desc}</p>
                <Link to={t.to} className={`${btn} bg-teal-600 text-white hover:bg-teal-700 self-start`}>Open</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </ManageShell>
  );
}
