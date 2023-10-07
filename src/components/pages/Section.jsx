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

  return (

    <div className="relative m-auto w-[500px] overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
    <div className="animate-infinite-slider flex w-[calc(250px*10)]">
        <div
          className="slide flex w-[125px] items-center justify-center"
        >
          <FaJava width={24} height={24} className="text-slate-800"/>
          <FaReact width={24} height={24} className="text-slate-800"/>
        </div>
        <div
          className="slide flex w-[125px] items-center justify-center"
        >
          <FaJava  width={24} height={24} className="text-slate-800"/>
          <FaReact width={24} height={24} className="text-slate-800"/>
        </div>
    </div>
  </div>
  );
};

export default Section;
