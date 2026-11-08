import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";

/** Wraps every editor page: keeps them out of search results. */
export default function ManageShell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>
      {children}
    </>
  );
}
