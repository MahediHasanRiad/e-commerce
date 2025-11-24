function MenuIcon({ icon: Icon }) {
  return (
    <div
      className="
        w-8 h-8 
        text-gray-800         
        hover:text-blue-600 
        transition duration-300
        flex items-center justify-center 
      "
    >
      <Icon className="w-4 h-4" />
    </div>
  )
}

export default MenuIcon