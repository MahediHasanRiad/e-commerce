

function Address() {
  return (
    <div className="p-3 bg-indigo-50/50 border border-indigo-100 rounded-lg shadow-sm">
      <p className="font-semibold text-indigo-800 mb-1 flex items-center">
        <svg
          className="w-5 h-5 mr-2 text-indigo-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17.657 16.726A8 8 0 016.343 5.274a8 8 0 0111.314 11.452zM12 11h.01M12 21h.01M12 17a4 4 0 100-8 4 4 0 000 8z"
          ></path>
        </svg>
        Shipping Address:
      </p>
      <span className="block text-sm text-gray-600 pl-7">
        Azomput kacha bazar, uttora 6, dhaka, bangladesh <br />
        <br />
        <i>{`( Please set your shipping address from your profile )`}</i>
      </span>
    </div>
  );
}

export default Address;
