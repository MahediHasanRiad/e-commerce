import Icons from "../../utils/icons";

function Service({ icon, text }) {
  return (
    <div
      className="
        flex 
        flex-col                     
        md:flex-row                   
        items-start                  
        md:items-center              
        border 
        border-gray-200 
        rounded 
        p-4                         
        md:p-8                      
      "
    >
      <div className="mb-2 md:mb-0 md:mr-4">
        <Icons icon={icon} />
      </div>

      <span className="text-gray-500 text-sm md:text-base">{text}</span>
    </div>
  );
}

export default Service;
