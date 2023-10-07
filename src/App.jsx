import "./App.css";
import Navbar from "./components/Navbar";
import playicon from "./assets/PLay Icon.png";
import marketing from "./assets/Ai Marketing.png";
import seo from "./assets/Ai SEO.png";
import copyright from "./assets/Ai Copyright.png";
import cloude from "./assets/Cloude Solution.png";
import plus from "./assets/Plus Symbol.png";
import circle from "./assets/Circle Symbol.png";
import circleDoble from "./assets/Doble Circle.png";
import TypinAnimation from "./utils/TypeAnimation";
import AnimatedImages from "./utils/AnimatedImage";

const App = () => {
  return (
    <div className="relative w-[1920px] overflow-x-hidden">
      <Navbar />

      {/* Body Content */}
      <div className="flex justify-between items-center  text-white pl-[92px]  h-[940px] overflow-hidden">
        
        {/* Text Content */}
        <section className="mt-[-100px]">
          <div className="flex items-center gap-5">

            <div className="progress2 progress-moved rotate-[180deg]">
              <div className="progress-bar2"></div>
            </div>

            <h3 className="font-Sarina LandingPage">Landing Page</h3>

            <div className="progress2 progress-moved">
              <div className="progress-bar2"></div>
            </div>

          </div>

          <h1 className="text-[60px] font-Russo text-white leading-[60px]">
            AI MARKETING SOLUTION
          </h1>

          <div className="h-[96px]">
            <h1 className="font-Russo template flex">
              T<TypinAnimation />
            </h1>
          </div>

          <p className="font-Russo text-[20px] text-white w-[70%] leading-[25px]">
            Best AI Marketing Soluion Landing page with User interface.
          </p>

          <div className="font-Russo hover:scale-[1.05] transform duration-200 Watch-Now-Btn ml-1">
            Watch Now
            <img src={playicon} alt="" width={27} height={27} />
          </div>
        </section>

        {/* Image Content */}
        <section className="  relative flex ">
          <AnimatedImages
            marketing={marketing}
            seo={seo}
            copyright={copyright}
            cloude={cloude}
          />

          <div className="flex justify-center items-center relative  mr-[-75px] mt-[-125px] z-[99]">
            <div className="abstractCircle" />
            <div className="dotedCircle" />
            <div className="robot" />
          </div>
        </section>
      </div>

      {/* Floating Objects */}
      <>
        <img src={circle} alt="" className="w-[50px] h-[50px] absolute left-[417px] top-[180px] floating"
          style={{ animationDelay: "0s" }}/>

        <img src={circle} alt="" className="w-[70px] h-[70px] absolute left-[1760px] top-[140px] floating"
          style={{ animationDelay: "0.5s" }}/>

        <img src={circleDoble} alt="" className="w-[75px] h-[70px] absolute left-[977px] top-[890px] floating"
          style={{ animationDelay: "1s" }}/>


          

        <img src={plus} alt="" className="w-[50px] h-[50px] absolute left-[800px] top-[284px] floating"
          style={{ animationDelay: "1.5s" }}/>

        <img src={plus} alt="" className="w-[50px] h-[50px] absolute left-[651px] top-[650px] floating"
          style={{ animationDelay: "2s" }}/>

        <img src={plus} alt="" className="w-[50px] h-[50px] absolute left-[110px] bottom-[212px] floating"
          style={{ animationDelay: "2.5s" }}/>
      </>
    </div>
  );
};

export default App;
