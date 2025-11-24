import React from "react";

function Footer() {
  return (
    <div className="bg-gray-100 border-t border-gray-200">
      <div
        style={{ width: "70%" }}
        className="
          container 
          mx-auto 
          px-4 
          py-10 
          md:py-16 
          grid 
          grid-cols-2 
          sm:grid-cols-2 
          md:grid-cols-4 
          gap-8 
          lg:gap-12
        "
      >
        {/* Section 1: About Shapnoo */}
        <div className="space-y-3">
          <h1 className="text-xl font-bold text-gray-800 mb-3">
            About Shapnoo
          </h1>
          <p className="text-sm text-gray-600 hover:text-indigo-600 cursor-pointer transition">
            Our Story
          </p>
          <p className="text-sm text-gray-600 hover:text-indigo-600 cursor-pointer transition">
            Teams
          </p>
          <p className="text-sm text-gray-600 hover:text-indigo-600 cursor-pointer transition">
            Privacy Policy
          </p>
          <p className="text-sm text-gray-600 hover:text-indigo-600 cursor-pointer transition">
            Terms of Use
          </p>
        </div>

        {/* Section 2: Customer Service */}
        <div className="space-y-3">
          <h1 className="text-xl font-bold text-gray-800 mb-3">
            Customer Service
          </h1>
          <p className="text-sm text-gray-600 hover:text-indigo-600 cursor-pointer transition">
            Contact us
          </p>
          <p className="text-sm text-gray-600 hover:text-indigo-600 cursor-pointer transition">
            FAQ
          </p>
        </div>

        {/* Section 3: Shop With Us */}
        <div className="space-y-3">
          <h1 className="text-xl font-bold text-gray-800 mb-3">Shop With Us</h1>
          <p className="text-sm text-gray-600 hover:text-indigo-600 cursor-pointer transition">
            Groceries
          </p>
          <p className="text-sm text-gray-600 hover:text-indigo-600 cursor-pointer transition">
            Baby Care
          </p>
          <p className="text-sm text-gray-600 hover:text-indigo-600 cursor-pointer transition">
            Personal Care
          </p>
        </div>

        {/* Section 4: Follow Us (Social Icons) */}
        <div className="space-y-3">
          <h1 className="text-xl font-bold text-gray-800 mb-3">Follow Us</h1>
          <div className="flex space-x-4 text-gray-500 text-3xl">
            <span className="hover:text-blue-600 cursor-pointer transition">
              <i className="fab fa-facebook-f"></i>
              👍
            </span>
            <span className="hover:text-blue-400 cursor-pointer transition">
              <i className="fab fa-twitter"></i>
              🔗
            </span>
            <span className="hover:text-pink-600 cursor-pointer transition">
              <i className="fab fa-instagram"></i>
              📸
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 py-4">
        <p className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Shapnoo. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
