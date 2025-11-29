import React from "react";
import heroImage from "../assets/hero.png";
const hero = [
  {
    heading: "missed your chance at HNG? here's your comeback",
    paragraph:
      "HNG learn gives you a scond chance to continue your leaning journey \n HNG learn gives you a scond chance to continue your leaning journey ",
  },
  {
    img: heroImage,
  },
];
// console.log(hero[0].heading);

function Hero() {
  return (
    <>
      <main className="bg-[#e6f7ff] px-6 py-12">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-2 lg:gap-8 md:flex-row m-auto max-w-[1440px] min-w-[320px] min-h-screen md:min-h-0">
          {/* hero component child 1 */}
          <div className=" flex flex-1 flex-col items-center text-center lg:items-start gap-5 ">
            <h2 className=" text-3xl lg:text-6xl font-semibold capitalize lg:text-left">
              missed your chance at HNG? here's your comeback
            </h2>
            <p className="text-sm lg:text-lg text-[#444] lg:text-left max-w-md ">
              HNG learn gives you a scond chance to continue your leaning
              journey in tech with structure, mentorship, real projects.These
              interactive section will equip you with practical skills you need
              to confidently kick start your tech career
            </p>

            <button className="capitalize py-3 px-6 bg-[#00aeff] font-semibold rounded-xl text-white text-sm md:text-base tracking-wide ">
              Start learning
            </button>
          </div>

          {/* hero side 2 */}
          <div className="flex-1 justify-center hover:scale-z-150">
            <img src={hero[1].img} alt="hero-logo" />
          </div>
        </div>
      </main>
    </>
  );
}

export default Hero;
