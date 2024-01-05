import React from "react";
import Logo from "../logo/logo";

function Navbar() {
  return (
    <nav className="bg-rathalosBrown">
      <div className="container mx-auto py-6 mb-6">
        <Logo></Logo>
      </div>
    </nav>
  );
}

export default Navbar;
