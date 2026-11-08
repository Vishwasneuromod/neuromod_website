import { useEffect, useState } from "react";
import { defaultFaqs, Faq } from "../data/faqs";
import { API_BASE } from "./api";

const API = `${API_BASE}/api/faq`;

/** Questions from the database, falling back to the built-in list if the API fails or returns nothing. */
export function useFaqs(): Faq[] {
  const [faqs, setFaqs] = useState<Faq[]>(defaultFaqs);

  useEffect(() => {
    let cancelled = false;
    fetch(API)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((data: { faqs?: Faq[] }) => {
        if (!cancelled && data.faqs && data.faqs.length > 0) setFaqs(data.faqs);
      })
      .catch(() => {
        /* keep the built-in questions */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return faqs;
}
