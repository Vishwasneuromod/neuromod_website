/** Where the editor area lives. Set REACT_APP_ADMIN_PATH at build time to use a private path (e.g. /staff-9x2k). */
export const MANAGE_BASE = (process.env.REACT_APP_ADMIN_PATH || "/manage").replace(/\/$/, "");

export const input =
  "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500";
export const btn = "text-sm font-semibold px-4 py-2 rounded-full transition-colors disabled:opacity-50";
