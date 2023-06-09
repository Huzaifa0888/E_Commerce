import { useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SmallSlider = ({ items }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollCount = null;
    let scroll = null;

    const handleWheel = (e) => {
      e.preventDefault();
      clearTimeout(scroll);
      scroll = setTimeout(() => {
        scrollCount = 0;
      }, 200);

      if (scrollCount) return 0;

      scrollCount = 1;

      if (e.deltaY < 0) {
        slider.slickNext();
      } else {
        slider.slickPrev();
      }
    };

    // Add event listener to handle mouse wheel scroll
  }, [sliderRef]);

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    initialSlide: 0,
    slidesToScroll: 1,
    slidesToShow: 7,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <>
      <div className="bbg-white max-w-7xl mx-auto lg:w-[92%]   rounded-tl-2xl rounded-tr-2xl">
        <div className=" lg:pb-16  lg:pt-0 md:pt-0  px-4 sm:py-24 sm:px-6 lg:max-w-full  lg:w-[1250px] md:w-11/12 mx-auto bg-white rounded-tl-2xl rounded-tr-2xl   py-16 md:px-8   lg:px-8">
          <h2 className="text-[35px] text-center font-bold tracking-tight text-gray-900 mx-auto max-w-2xl lg:pt-28 py-5 px-4  ">
            You Might Like
          </h2>
          <Slider {...settings} ref={sliderRef}>
            {items.map((item) => (
              <div
                key={item.id}
                className="inline-flex w-full h-full lg:pl-8 md:pl-6 pl-12 pt-4 bg-white justify-center  text-[16px]  mx-auto lg:w-[92%]"
              >
                <img src={item.img} alt="" className="w-[60%] h-[60%] " />
                <h1 className="lg:text-left md:text-left pt-2   pl-[1px] bg-white font-bold">
                  {item.para}
                </h1>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};
const items = [
  { id: 1, img: "/h3-2.jpg", para: "Women tops" },
  { id: 2, img: "/h3-2.jpg", para: "Women tops" },
  { id: 3, img: "/h3-2.jpg", para: "Women tops" },
  { id: 4, img: "/h3-2.jpg", para: "Women tops" },
  { id: 5, img: "/h3-2.jpg", para: "Women tops" },
  { id: 6, img: "/h3-2.jpg", para: "Women tops" },
  { id: 6, img: "/h3-2.jpg", para: "Women tops" },
  { id: 6, img: "/h3-2.jpg", para: "Women tops" },
  { id: 6, img: "/h3-2.jpg", para: "Women tops" },
];

const App = () => {
  return (
    <div className="">
      <SmallSlider items={items} />
      {/* <BigSlider items={items} /> */}
    </div>
  );
};

export default App;
