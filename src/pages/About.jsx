import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function About() {
  return (
    <div className="about">
      <h1>About</h1>
      <hr />
      <div className="link-div">
        <Link className="link" style={{ marginRight: "10px" }} to="employee">
          Çalışanlar Kakkında
        </Link>
        <Link className="link" style={{ marginRight: "10px" }} to="company">
          Şirket Hakkında
        </Link>
        <Outlet />
      </div>
    </div>
  );
}
