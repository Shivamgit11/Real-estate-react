import React from "react";

import { Link } from "react-router-dom";

// import Logo from 

const Header = () => {
  return (
    <header className="py-6 mb-12 border-b">
      <div className="container mx-auto flex justify-between items-center">
        {/* {Logo} */}
        <Link to="/">
          {/* <img src={Logo} alt="logo mission" /> */}
          <h1>Home-Rent-service</h1>
        </Link>
        {/* buttons */}

        <div className="flex items-center gap-6">
          <Link className="hover:text-violet-900 transition" to="">Log in</Link>
          <Link className="bg-voilet-700 hover:bg-voilet-800 text-black px-4 py-3 rounded-lg transition" to="">sign up</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
