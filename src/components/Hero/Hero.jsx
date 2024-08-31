import { FaPlay } from "react-icons/fa"; 
import heroImg from "../../assets/dumbell.png";
const Hero = () => {
  return (
    <>
      {/* Hero container */}
      <div className="px-8 container relative grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
        
        {/* Left side content (text and buttons) */}
        <div className="flex flex-col justify-center py-14 md:py-0 font-playfair">
          
          {/* Heading and subheading section */}
          <div className="text-center md:text-left space-y-6 mb-8 ">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-normal "
            style={{filter:"drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.1))"}}>
              Transform your body, transform your{" "}
              <span className="text-c1 font-bold ">Life</span>
            </h1>
            <p className="text-gray-600 md:text-xl xl:max-w-[600px]">
              Join us today and start your fitness journey.
            </p>
          </div>
          
          {/* Buttons section */}
          <div className="flex justify-center gap-8 md:justify-start">
            {/* Subscribe button */}
            <button className="btn-outline">Subscribe</button>
            
            {/* Live demo*/}
            <button className="flex justify-center items-center gap-2">
              <FaPlay /> Live Demo
            </button>
          </div>
          
        </div>
        
        {/* right side content in Hero sectiojn*/}
        <div className="hidden md:flex items-center justify-center relative">
          <img
            src={heroImg}
            alt=""
            className="w-[350px] md:wd-[450px] lg:w-[550px] xl:w-[650px] absolute inset-0 "
            style={{ filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.7))" }}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
