import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaJava,
  FaReact,
  FaCss3,
  FaGitSquare,
  FaHtml5,
  FaJsSquare,
  FaNode,
  FaPhp,
} from "react-icons/fa";

const Section = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
    cssEase: "linear",
  };
  return (
    <div className="mt-5 mx-auto container opacity-10">
      <div className="">
        <Slider {...settings}>
          <div>
            <FaJava className="w-16 h-16 text-slate-950 font-bold"/>
          </div>
          <div>
            <FaReact className="w-16 h-16 text-slate-950 font-bold"/>
          </div>
          <div>
            <FaCss3 className="w-16 h-16 text-slate-950 font-bold"/>
          </div>
          <div>
            <FaGitSquare className="w-16 h-16 text-slate-950 font-bold"/>
          </div>
          <div>
            <FaHtml5 className="w-16 h-16 text-slate-950 font-bold"/>
          </div>
          <div>
            <FaJsSquare className="w-16 h-16 text-slate-950 font-bold"/>
          </div>
          <div>
            <FaNode className="w-16 h-16 text-red-700 font-bold"/>
          </div>
          <div>
            <FaPhp className="w-16 h-16 text-red-700 font-bold"/>
          </div>
          <div>
            <FaPhp className="w-16 h-16 text-red-700 font-bold"/>
          </div>
          <div>
            <FaPhp className="w-16 h-16 text-red-700 font-bold"/>
          </div>
          <div>
            <FaPhp className="w-16 h-16 text-red-700 font-bold"/>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Section;
