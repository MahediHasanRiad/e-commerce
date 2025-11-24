function AddToCardQuantity({ value }) {

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="flex gap-1 items-center mt-1">
      <button
        style={{ background: "#fe8280" }}
        className="hover:bg-red-600 text-white font-bold py-1 px-2 rounded-full focus:outline-none focus:shadow-outline text-sm"
        onClick={stopPropagation}
      >
        +
      </button>
      <span className="text-sm font-semibold w-4 text-center">{value}</span>
      <button
        style={{ background: "#fe8280" }}
        className="hover:bg-red-600 text-white font-bold py-1 px-2 rounded-full focus:outline-none focus:shadow-outline text-sm"
        onClick={stopPropagation}
      >
        -
      </button>
    </div>
  );
}

export default AddToCardQuantity;
