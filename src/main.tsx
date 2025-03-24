import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"

// Add security headers
if (typeof window !== "undefined") {
  // Content Security Policy
  const meta = document.createElement("meta");
  meta.httpEquiv = "Content-Security-Policy";
  meta.content = `
    default-src 'self' https://*.clarity.ms https://c.bing.com;
    script-src 'self' 'unsafe-inline' 
      https://analytics.vercel.app
      https://va.vercel-scripts.com
      https://www.googletagmanager.com 
      https://www.google-analytics.com
      https://www.clarity.ms
      https://clarity.microsoft.com
      https://*.clarity.ms
      https://c.bing.com;
    style-src 'self' 'unsafe-inline';
    img-src 'self' data: https://*.cloudinary.com blob: 
      https://res.cloudinary.com
      https://www.google-analytics.com
      https://www.googletagmanager.com
      https://www.clarity.ms
      https://clarity.microsoft.com
      https://*.clarity.ms
      https://c.bing.com;
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
      https://clarity.microsoft.com
      https://*.clarity.ms
      https://c.bing.com;
    frame-src 'self'
      https://www.google-analytics.com
      https://www.googletagmanager.com
      https://www.clarity.ms
      https://clarity.microsoft.com
      https://*.clarity.ms
      https://c.bing.com;
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
    <SpeedInsights />
  </StrictMode>
);
