import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import logo from "../public/logo.png"; // Adjust the path if necessary
import wheelchair from "../public/wheelchair.png"; // Adjust the path if necessary
import landingpagesidebarimage from "../public/landingpagesidebarimage.png"; // Adjust the path if necessary

function App() {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const changeLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "es" : "en"));
    // Add logic to change the language of the site here
  };

  const [url, setUrl] = useState("");

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleUrlSubmit = (e) => {
    e.preventDefault();
    const urlPattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
      "i"
    );
    if (!urlPattern.test(url)) {
      alert("Please enter a valid URL.");
      return;
    }
    // Handle the valid URL submission here
    console.log("Valid URL submitted:", url);
  };

  return (
    <Router>
      <div className={`container ${theme}`} style={{ marginTop: '-100px' }}>
        <a href="/dashboard" className="dashboard-btn">
          Dashboard
        </a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="84"
          height="81"
          viewBox="0 0 84 81"
          fill="none"
          className="theme-toggle"
          onClick={toggleTheme}
        >
          <path
            d="M33.8205 57.375H50.176M42 10.125V13.5M64.274 19.0215L61.7995 21.4076M73.5 40.5H70M14 40.5H10.5M22.2005 21.4076L19.726 19.0215M29.624 52.434C27.177 50.0738 25.5108 47.067 24.8359 43.7937C24.1611 40.5204 24.5079 37.1276 25.8325 34.0443C27.1572 30.9611 29.4002 28.3258 32.278 26.4718C35.1558 24.6177 38.539 23.6281 42 23.6281C45.461 23.6281 48.8442 24.6177 51.722 26.4718C54.5998 28.3258 56.8428 30.9611 58.1675 34.0443C59.4921 37.1276 59.8389 40.5204 59.1641 43.7937C58.4892 47.067 56.823 50.0738 54.376 52.434L52.458 54.2801C51.3615 55.3377 50.4917 56.5931 49.8984 57.9748C49.3051 59.3565 48.9998 60.8374 49 62.3329V64.125C49 65.9152 48.2625 67.6321 46.9497 68.898C45.637 70.1638 43.8565 70.875 42 70.875C40.1435 70.875 38.363 70.1638 37.0503 68.898C35.7375 67.6321 35 65.9152 35 64.125V62.3329C35 59.3122 33.754 56.4131 31.542 54.2801L29.624 52.434Z"
            stroke={theme === "light" ? "#18181B" : "#FFFFFF"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="84"
          height="81"
          viewBox="0 0 84 81"
          fill="none"
          className="language-toggle"
          onClick={changeLanguage}
        >
          <path
            d="M73.5 40.5C73.5 48.556 70.1813 56.2819 64.2739 61.9784C58.3665 67.6748 50.3543 70.875 42 70.875M73.5 40.5C73.5 32.444 70.1813 24.718 64.2739 19.0216C58.3665 13.3252 50.3543 10.125 42 10.125M73.5 40.5H10.5M42 70.875C33.6457 70.875 25.6335 67.6748 19.7261 61.9784C13.8187 56.2819 10.5 48.556 10.5 40.5M42 70.875C47.7995 70.875 52.5 57.2737 52.5 40.5C52.5 23.7263 47.7995 10.125 42 10.125M42 70.875C36.2005 70.875 31.5 57.2737 31.5 40.5C31.5 23.7263 36.2005 10.125 42 10.125M42 10.125C33.6457 10.125 25.6335 13.3252 19.7261 19.0216C13.8187 24.718 10.5 32.444 10.5 40.5"
            stroke="#18181B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <img src={logo} alt="Logo" className="logo-image" />
        <div className="content-container">
          <div className="text-box-1">
            Improve your site
            <br />
            <span className="accessibility-text">Accessibility</span>
            <img
              src={wheelchair}
              alt="Wheelchair"
              className="wheelchair-image"
            />
            <br />
            in mere seconds
          </div>
          <br />
          <div className="text-box-2">
            <p1
              style={{
                color: "#333",
                fontFamily: "Work Sans",
                fontSize: "28px",
                fontStyle: "normal",
                fontWeight: "900",
                lineHeight: "35px",
              }}
            >
              4,000 digital accessibility lawsuits
            </p1>
            <p2
              style={{
                color: "#333",
                fontFamily: "Work Sans",
                fontSize: "28px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "35px",
              }}
            >
              {" "}
              filed in the U.S. last year—
            </p2>
            <p3
              style={{
                color: "#AB09FB",
                fontFamily: "Work Sans",
                fontSize: "28px",
                fontStyle: "normal",
                fontWeight: "900",
                lineHeight: "35px",
              }}
            >
              77% targeting eCommerce websites
            </p3>
            <p2               style={{
                color: "#333",
                fontFamily: "Work Sans",
                fontSize: "28px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "35px",
              }}>
              —small businesses are increasingly at risk. In fact, 
            </p2>
            <p4 style={{ color: '#FC0808', fontFamily: 'Work Sans', fontSize: '28px', fontStyle: 'normal', fontWeight: 'bold ', lineHeight: '35px' }}>       67% of lawsuits focused on YOU
            </p4>
          </div>
          <form onSubmit={handleUrlSubmit}>
            <input
              type="text"
              className="text-input"
              placeholder="Enter your site name..."
              value={url}
              onChange={handleUrlChange}
            />
            <div style={{ marginTop: "20px" }}>
              <button
                type="submit"
                className="submit-btn"
                style={{
                  color: "#FFF",
                  fontFamily: "Work Sans",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "18px",
                  width: "276px",
                  height: "66px",
                  gap: "10px",
                  borderRadius: "16px",
                  borderWidth: "1px",
                  paddingTop: "24px",
                  paddingRight: "48px",
                  paddingBottom: "24px",
                  paddingLeft: "48px",
                }}
              >
                Scan for Issues
              </button>
            </div>
          </form>
        </div>
        <img src={landingpagesidebarimage} alt="Sidebar" className="sidebar-image" />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;