function ControleQuantity({ value }) {
  return (
    <div class="flex items-center space-x-2">
      <button
        style={{ background: "#fe8280", cursor: "pointer" }}
        className="hover:bg-red-500 text-white font-bold py-1 px-3 rounded-full focus:outline-none focus:shadow-outline text-lg"
        onClick={""}
      >
        -
      </button>
      <span class="text-xl font-semibold">{value}</span>
      <button
        style={{ background: "#fe8280", cursor: "pointer" }}
        className="hover:bg-red-600 text-white font-bold py-1 px-3 rounded-full focus:outline-none focus:shadow-outline text-lg "
        onClick={""}
      >
        +
      </button>
    </div>
  );
}

export default ControleQuantity;
