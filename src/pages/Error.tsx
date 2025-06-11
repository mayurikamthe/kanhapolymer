import React from "react";
import { Link } from "react-router-dom";

const Error: React.FC = () => {
  return (
    <div className="flex items-center justify-center flex-col min-h-screen">
      <h1 className="text-2xl">404 - Page not found!</h1>
      <Link  className="text-[14px] mt-5 rounded-full  uppercase text-white bg-[#F76B6A] hover:bg-[#d8111b] transition-all px-4 py-2 " to="/">GO TO HOMEPAGE</Link>
    </div>
  );
};

export default Error;
