import React from "react";
import { useParams } from "react-router-dom";
import { FaRegFaceSadTear } from "react-icons/fa6";

export default function NotFound() {
  const { id } = useParams();
  return (
    <div className="not_found">
      <h1>Page not found</h1>
      <h4>Sorry, the page http://localhost:5174/{id} could not be found.</h4>
      <FaRegFaceSadTear className="sad_icon" />
    </div>
  );
}
