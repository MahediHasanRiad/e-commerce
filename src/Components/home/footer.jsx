function Footer() {
  return (
    <div className=" bg-gray-100" >
      <div
        style={{ width: "70%" }}
        className="
          grid 
          grid-cols-2                  
          md:grid-cols-4              
          gap-6                        
          md:gap-8                    
          mt-12 p-8
          m-auto
        "
        
      >
        <div className="space-y-2">
          <h1 className="text-xl font-bold text-gray-800 mb-3">
            About Shapnoo
          </h1>
          <p className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer transition">
            Our Story
          </p>
          <p className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer transition">
            Teams
          </p>
          <p className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer transition">
            Privacy Policy
          </p>
          <p className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer transition">
            Terms of Use
          </p>
        </div>

        <div className="space-y-2">
          <h1 className="text-xl font-bold text-gray-800 mb-3">
            Customer Service
          </h1>
          <p className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer transition">
            Contact us
          </p>
          <p className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer transition">
            FAQ
          </p>
        </div>

        <div className="space-y-2">
          <h1 className="text-xl font-bold text-gray-800 mb-3">Shop With Us</h1>
          <p className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer transition">
            Groceries
          </p>
          <p className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer transition">
            Baby Care
          </p>
          <p className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer transition">
            Personal Care
          </p>
        </div>

        <div className="space-y-2">
          <h1 className="text-xl font-bold text-gray-800 mb-3">Follow Us</h1>
          <div className="flex space-x-3 text-gray-500 text-2xl">
            <span>🔗</span>
            <span>👍</span>
            <span>📸</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
