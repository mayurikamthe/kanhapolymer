import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md text-left space-y-4">
        <p>
          <strong>Name:</strong> Nikhil Khengare
        </p>
        <p>
          <strong>Email:</strong> nikhilukhengare@gmail.com
        </p>
        <p>
          <strong>Phone:</strong> +91 9767686311
        </p>
        <p>
          <strong>Location:</strong> NH 965,Shivari Purandhar,Pune,Maharashtra,
          412301
        </p>
        <p>
          <strong>GSTIN:</strong> 27DHPPK5717M1ZM
        </p>
      </div>
    </div>
  );
};

export default Contact;
