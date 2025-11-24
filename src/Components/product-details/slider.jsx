import image from "../../Image/category/hair-color.webp";
import image2 from "../../Image/category/hair-color.webp";
import image3 from "../../Image/category/skin-care.webp";
import Slider from "react-slick";

const images = [{ url: image }, { url: image2 }, { url: image3 }];

function SliderImage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
  };

  return (
    <section className="md:col-span-3 bg-white overflow-hidden flex items-center justify-center p-4">
      <div className="w-full max-w-md md:max-w-none">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div
              key={index}
              className="flex justify-center items-center h-full"
            >
              <img
                src={img.url}
                alt={`Product image ${index + 1}`}
                className="w-full h-100 object-contain max-h-[500px]"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default SliderImage;
