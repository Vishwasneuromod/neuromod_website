import { render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";

test.each(["/manage", "/manage/faqs", "/manage/"])("real App at %s shows the editor login, not a blog page", (path) => {
  window.history.pushState({}, "", path);
  global.fetch = jest.fn(() => Promise.resolve({ ok: false, status: 404, json: () => Promise.resolve({}) })) as jest.Mock;
  render(<HelmetProvider><App /></HelmetProvider>);
  expect(screen.queryByText(/article not found/i)).not.toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /editor login/i })).toBeInTheDocument();
});
