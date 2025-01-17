// Import React into the bundle
import React from "react";
import ReactDOM from "react-dom/client";  // Use 'react-dom/client' for React 18+

// Include your index.scss file into the bundle
import "../styles/index.css";

// Import your own components
import Layout from "./layout.js";

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://7a3b3271f267f85ce872f77c50311823@o4508657431609344.ingest.us.sentry.io/4508657433051136",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  // Tracing
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: [
    "https://effective-palm-tree-5ww6qprg57rfwv7-3000.app.github.dev", // Frontend URL
    "https://effective-palm-tree-5ww6qprg57rfwv7-3001.app.github.dev", // Backend URL
  ],
  
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

// Render your React application
const root = ReactDOM.createRoot(document.querySelector("#app"));  // Create root with React 18 API
root.render(<Layout />);  // Render the Layout component


