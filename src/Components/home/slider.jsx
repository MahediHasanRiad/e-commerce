import backgroundImg from '../../Image/slider1.png'

function Slider() {
  return (
    <div className="w-full h-80"> 
      <img 
        src={backgroundImg} 
        alt="Slider Background" 
        className="w-full h-full object-cover" 
      />
    </div>
  )
}

export default Slider