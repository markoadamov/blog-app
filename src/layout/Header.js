import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="navigation">
      <Link to="/posts">
        <button className="navigationButtons">Posts</button>
      </Link>
    </div>
  );
}
