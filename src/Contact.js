import React from "react";
import { Link, Outlet } from "react-router-dom";

function Contact() {
  return (
    <div>
      <h1> Contact page</h1>
      <h2>Nested Router</h2>
      <Link to={"nested"}>Nested</Link>
      <Outlet />
    </div>
  );
}

export default Contact;
