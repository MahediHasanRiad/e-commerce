function PopularItem({ image, text }) {
  return (
    <div
      className="
        flex 
        flex-col                  
        items-center             
        p-4                     
        border 
        border-gray-200          
        rounded-lg               
        shadow-sm                
        cursor-pointer
        transition transform duration-200 
        
        hover:shadow-md          
        hover:scale-[1.02]       
      "
    >
      {/* 1. Image Styling */}
      <img 
        src={image} 
        alt="" 
        className="
          w-full                 
          h-40                   
          object-cover            
          rounded-md              
          mb-3                    
        " 
      />
      
      {/* 2. Text Styling */}
      <span 
        className="
          text-center             
          text-base 
          font-medium             
          text-gray-800           
          truncate 
          m-3               
        "
      >
        {text}
      </span>
    </div>
  )
}

export default PopularItem