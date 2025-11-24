function Cupon() {
  return (
    <div className="flex items-stretch w-full max-w-sm mx-auto shadow-md rounded-lg overflow-hidden">
      {/* Input Field */}
      <input
        type="text"
        placeholder="Enter coupon code..."
        className="flex-grow p-3 text-base text-gray-700 border-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-150"
        aria-label="Coupon Code Input"
      />

      {/* Button */}
      <button
        className="px-6 py-3 bg-[#fe8280] text-white font-semibold text-base uppercase tracking-wider 
                   hover:bg-red-700 transition duration-150 ease-in-out 
                   focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
      >
        APPLY
      </button>
    </div>
  );
}

export default Cupon;
