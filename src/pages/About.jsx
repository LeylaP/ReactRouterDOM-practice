import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h1>About</h1>
      <hr />
      <Link style={{ marginRight: "10px" }} to="employee">
        Çalışanlar Kakkında
      </Link>
      <Link style={{ marginRight: "10px" }} to="company">
        Şirket Hakkında
      </Link>
      <Outlet />
    </div>
  );
}
