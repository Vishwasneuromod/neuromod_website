/**
 * Base URL of the backend (the separate neuromod-api project), without a trailing slash.
 * Empty in local dev, where `npm start` proxies /api/* to localhost:8787 (no CORS involved).
 * In production set REACT_APP_API_BASE=https://api.yourdomain.com at build time;
 * the API must then list this site's origin in its CORS_ORIGINS.
 */
export const API_BASE = (process.env.REACT_APP_API_BASE || "").replace(/\/$/, "");
