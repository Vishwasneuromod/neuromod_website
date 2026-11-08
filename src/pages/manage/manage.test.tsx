import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ManageFaqs from "./ManageFaqs";
import ManageHome from "./ManageHome";

const json = (status: number, body: unknown) => Promise.resolve({ ok: status < 400, status, json: () => Promise.resolve(body) } as Response);

function setup(path: string) {
  return render(
    <HelmetProvider>
      <MemoryRouter initialEntries={[path]}>
        <Routes>
          <Route path="/manage" element={<ManageHome />} />
          <Route path="/manage/faqs" element={<ManageFaqs />} />
        </Routes>
      </MemoryRouter>
    </HelmetProvider>
  );
}

let faqsStatus = 200;
beforeEach(() => {
  sessionStorage.clear();
  faqsStatus = 200;
  global.fetch = jest.fn((url: RequestInfo | URL, init?: RequestInit) => {
    const u = String(url);
    if (u.endsWith("/api/auth/login")) {
      const { password } = JSON.parse(String(init?.body));
      return password === "right-password" ? json(200, { token: "t.k" }) : json(401, { error: "Incorrect username or password" });
    }
    if (u.endsWith("/api/faq/admin")) return faqsStatus === 200 ? json(200, { faqs: [] }) : json(401, { error: "Please log in" });
    return json(404, {});
  }) as jest.Mock;
});

const logIn = async (password = "right-password") => {
  await userEvent.type(screen.getByLabelText(/username/i), "dr.vishwas");
  await userEvent.type(screen.getByLabelText(/password/i), password);
  await userEvent.click(screen.getByRole("button", { name: /log in/i }));
};

test("logged out: /manage shows the login form and no dashboard", () => {
  setup("/manage");
  expect(screen.getByRole("heading", { name: /editor login/i })).toBeInTheDocument();
  expect(screen.queryByText(/manage faqs/i)).not.toBeInTheDocument();
});

test("logged out: /manage/faqs redirects to the login", () => {
  setup("/manage/faqs");
  expect(screen.getByRole("heading", { name: /editor login/i })).toBeInTheDocument();
  expect(global.fetch).not.toHaveBeenCalled();
});

test("wrong password shows an error and stays on login", async () => {
  setup("/manage");
  await logIn("nope");
  expect(await screen.findByRole("alert")).toHaveTextContent(/incorrect username or password/i);
  expect(screen.getByRole("heading", { name: /editor login/i })).toBeInTheDocument();
});

test("login shows the dashboard with a Manage FAQs button that opens the editor; logout returns to login", async () => {
  setup("/manage");
  await logIn();
  expect(await screen.findByRole("heading", { name: /dashboard/i })).toBeInTheDocument();
  await userEvent.click(screen.getByRole("link", { name: /open/i }));
  expect(await screen.findByRole("heading", { name: /patient questions/i })).toBeInTheDocument();
  await userEvent.click(screen.getByRole("button", { name: /log out/i }));
  expect(await screen.findByRole("heading", { name: /editor login/i })).toBeInTheDocument();
});

test("expired session (401 from the API) sends the editor back to the login", async () => {
  sessionStorage.setItem("faq-editor-token", "old.token");
  faqsStatus = 401;
  setup("/manage/faqs");
  await waitFor(() => expect(screen.getByRole("heading", { name: /editor login/i })).toBeInTheDocument());
});
