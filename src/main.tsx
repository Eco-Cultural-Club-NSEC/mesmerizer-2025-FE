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
      https://www.google-analytics.com;
    style-src 'self' 'unsafe-inline';
    img-src 'self' data: https://*.cloudinary.com blob: 
      https://res.cloudinary.com
      https://www.google-analytics.com
      https://www.googletagmanager.com;
    font-src 'self';
    connect-src 'self' 
      https://api.mesmerizernsec.club 
      https://*.cloudinary.com 
      https://api.cloudinary.com 
      https://analytics.vercel.app 
      https://va.vercel-scripts.com
      https://www.google-analytics.com
      https://www.googletagmanager.com;
    frame-src 'self'
      https://www.google-analytics.com
      https://www.googletagmanager.com;
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
