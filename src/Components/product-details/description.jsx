function Description() {
  return (
    <div className="bg-white p-6 w-3/4 m-auto">
      {/* Product Description Paragraph */}
      <div className="mb-8"> 
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Product Overview</h2> 
        <p className="text-gray-700 leading-relaxed text-base"> 
          This is a fantastic product description. It highlights all the key
          features, benefits, and reasons why a customer should buy this item.
          You can add more detailed information here, including materials, usage
          instructions, or unique selling points. Make sure to keep it engaging
          and informative!
          <br /><br /> 
          Experience unparalleled quality and design with this premium product, crafted to enhance your daily life.
        </p>
      </div>

      {/* Key Features List */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Key Features:
        </h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4"> 
          <li className="text-base">High-quality materials</li> 
          <li className="text-base">Ergonomic design for comfort and ease of use</li>
          <li className="text-base">Long-lasting durability, built to withstand daily wear and tear</li>
          <li className="text-base">Stylish and modern look, complementing any aesthetic</li>
          <li className="text-base">Easy to maintain and clean</li>
        </ul>
      </div>

      {/* Optional: Additional Details/Specifications */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Specifications:</h2>
        <div className="text-gray-700 grid grid-cols-2 gap-y-2">
          <span className="font-medium">Material:</span> <span>Premium Aluminum Alloy</span>
          <span className="font-medium">Weight:</span> <span>250g</span>
          <span className="font-medium">Dimensions:</span> <span>10cm x 5cm x 2cm</span>
          <span className="font-medium">Color:</span> <span>Space Gray</span>
        </div>
      </div>
    </div>
  );
}

export default Description;