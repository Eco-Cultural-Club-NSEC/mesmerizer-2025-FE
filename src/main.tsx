import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Analytics } from "@vercel/analytics/react";

// Add security headers
if (typeof window !== "undefined") {
  // Content Security Policy
  const meta = document.createElement("meta");
  meta.httpEquiv = "Content-Security-Policy";
  meta.content = `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 
      https://analytics.vercel.app
      https://va.vercel-scripts.com
      https://www.googletagmanager.com 
      https://www.google-analytics.com
      https://www.clarity.ms
      https://h.clarity.ms;
    style-src 'self' 'unsafe-inline';
    img-src 'self' data: https://*.cloudinary.com blob: 
      https://res.cloudinary.com
      https://www.google-analytics.com
      https://www.googletagmanager.com
      https://www.clarity.ms
      https://h.clarity.ms;
    font-src 'self';
    connect-src 'self' 
      ${import.meta.env.VITE_VERCEL_ENV_BACKEND_URL}
      https://*.cloudinary.com 
      https://api.cloudinary.com 
      https://analytics.vercel.app 
      https://va.vercel-scripts.com
      https://www.google-analytics.com
      https://www.googletagmanager.com
      https://www.clarity.ms
      https://h.clarity.ms;
    frame-src 'self'
      https://www.google-analytics.com
      https://www.googletagmanager.com
      https://www.clarity.ms
      https://h.clarity.ms;
    form-action 'self';
    object-src 'none';
    media-src 'self' https://*.cloudinary.com;
    worker-src 'self' blob:;
    base-uri 'self';
    upgrade-insecure-requests;
  `
    .replace(/\s+/g, " ")
    .trim();
  document.head.appendChild(meta);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Analytics />
  </StrictMode>
);
