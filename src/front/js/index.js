// Import React into the bundle
import React from "react";
import ReactDOM from "react-dom/client";  // Use 'react-dom/client' for React 18+

// Include your index.scss file into the bundle
import "../styles/index.css";

// Import your own components
import Layout from "./layout.js";

// Render your React application
const root = ReactDOM.createRoot(document.querySelector("#app"));  // Create root with React 18 API
root.render(<Layout />);  // Render the Layout component


