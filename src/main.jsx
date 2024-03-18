import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import App1 from "./App1.jsx";
import ProfileCartSection from "./profileCart/ProfileCartSection.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <App1 /> */}
    <ProfileCartSection />
  </React.StrictMode>
);
