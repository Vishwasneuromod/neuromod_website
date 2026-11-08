import { useSyncExternalStore } from "react";
import { API_BASE } from "./api";

export interface AdminFaq {
  id: string;
  q: string;
  a: string;
  to?: string | null;
  published: boolean;
  order: number;
}

const TOKEN_KEY = "faq-editor-token";

// sessionStorage: cleared when the tab closes. The token also expires on the server.
export const getToken = (): string | null => {
  try {
    return sessionStorage.getItem(TOKEN_KEY) ?? memoryToken;
  } catch {
    return memoryToken;
  }
};
let memoryToken: string | null = null; // fallback when sessionStorage is unavailable
const listeners = new Set<() => void>();

const setToken = (t: string | null) => {
  memoryToken = t;
  try {
    t ? sessionStorage.setItem(TOKEN_KEY, t) : sessionStorage.removeItem(TOKEN_KEY);
  } catch {
    /* storage unavailable: the in-memory token still works for this tab */
  }
  listeners.forEach((l) => l());
};

/** True while an editor token is held. Re-renders on login, logout and expiry (a 401 from the API clears it). */
export const useLoggedIn = () =>
  useSyncExternalStore(
    (cb) => {
      listeners.add(cb);
      return () => listeners.delete(cb);
    },
    () => !!getToken()
  );

export class AuthError extends Error {}

async function call<T>(method: string, path: string, body?: unknown, auth = true): Promise<T> {
  const headers: Record<string, string> = {};
  if (body !== undefined) headers["Content-Type"] = "application/json";
  const token = getToken();
  if (auth && token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(`${API_BASE}${path}`, { method, headers, body: body === undefined ? undefined : JSON.stringify(body) });
  const data = await res.json().catch(() => ({}));
  if (res.status === 401 && auth) {
    setToken(null);
    throw new AuthError(data.error || "Please log in again");
  }
  if (!res.ok) throw new Error(data.error || "Something went wrong");
  return data as T;
}

export async function login(username: string, password: string) {
  const { token } = await call<{ token: string }>("POST", "/api/auth/login", { username, password }, false);
  setToken(token);
}

export const logout = () => setToken(null);

export const listFaqs = () => call<{ faqs: AdminFaq[] }>("GET", "/api/faq/admin").then((r) => r.faqs);
export const createFaq = (f: { q: string; a: string; to?: string; published?: boolean }) =>
  call<{ faq: AdminFaq }>("POST", "/api/faq/admin", f).then((r) => r.faq);
export const updateFaq = (id: string, f: Partial<Pick<AdminFaq, "q" | "a" | "published">> & { to?: string }) =>
  call<{ faq: AdminFaq }>("PUT", `/api/faq/admin/${id}`, f).then((r) => r.faq);
export const deleteFaq = (id: string) => call<{ ok: true }>("DELETE", `/api/faq/admin/${id}`);
export const reorderFaqs = (ids: string[]) => call<{ ok: true }>("POST", "/api/faq/admin/reorder", { ids });
