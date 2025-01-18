import { useState } from "react";
import Button from "./button";

export default function NavBar() {
  const [activeNav, setActiveNav] = useState("Home");
  return (
    <div className="nav-bar-container">
      <div className="logo">
        Pet<span>care</span>
      </div>
      <div className="navigation-list-container">
        <div
          className={`navigation-list ${(activeNav === "Home" ? "active" : "")}`}
          onClick={() => {
            setActiveNav("Home");
          }}
        >
          Home
        </div>
        <div
          className={`navigation-list ${(activeNav === "Services"
            ? "active"
            : "")}`}
          onClick={() => {
            // setActiveNav("Services");
          }}
        >
          Services
        </div>
        <div
          className={`navigation-list ${(activeNav === "Training"
            ? "active"
            : "")}`}
          onClick={() => {
            // setActiveNav("Training");
          }}
        >
          Training
        </div>
        <div
          className={`navigation-list ${(activeNav === "Blog" ? "active" : "")}`}
          onClick={() => {
            // setActiveNav("Blog");
          }}
        >
          Blog
        </div>
        <div
          className={`navigation-list ${(activeNav === "Contact"
            ? "active"
            : "")}`}
          onClick={() => {
            // setActiveNav("Contact");
          }}
        >
          Contact
        </div>
      </div>
      <Button
        value={"Register"}
        onClick={() => {
          console.log("Clicked");
        }}
        color={"#FFFFFF"}
        color3={"#ff7a49"}
      />
    </div>
  );
}
