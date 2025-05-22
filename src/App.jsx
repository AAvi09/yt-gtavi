import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

function App() {
  const [showContent, setShowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      // scale: 1.5,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", (e) => {
      const moveX = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", { x: `${moveX * 0.4}%` });

      gsap.to(".sky", {
        x: moveX,
      });

      gsap.to(".bg", {
        x: moveX * 1.7,
      });
    });
  }, [showContent]);
  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="/bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full">
          <div className="landing w-full h-screen bg-black">
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10 bg-gradient-to-b from-black to-transparent">
              <div className="logo flex gap-7">
                <div className="lines flex flex-col gap-[5px]">
                  <div className="line w-15 h-2 bg-white rounded-lg"></div>
                  <div className="line w-8 h-2 bg-white rounded-lg"></div>
                  <div className="line w-5 h-2 bg-white rounded-lg"></div>
                </div>
                <h3 className="text-4xl -mt-[9px] leading-none text-white">
                  Rockstar
                </h3>
              </div>
            </div>

            <div className="imagesdiv relative w-full h-screen overflow-hidden">
              <img
                className="absolute sky scale-[1.2] top-0 left-0 w-full h-full object-cover "
                src="./sky.png"
              />
              <img
                className="absolute bg scale-[1.1] top-0 left-0 w-full h-full object-cover "
                src="./bg.png"
              />
              <div className="text text-white flex flex-col gap-3 top-20 left-1/2 -translate-x-1/2 absolute ">
                <h1 className="text-8xl -ml-40">grand</h1>
                <h1 className="text-8xl ml-20">theft</h1>
                <h1 className="text-8xl -ml-30">auto</h1>
              </div>
              <img
                className="absolute character -bottom-[60%] left-1/2 -translate-x-1/2 scale-[0.5] "
                src="./girlbg.png"
              />
            </div>
            <div className="btmbar absolute text-white bottom-0 left-0 w-full py-10 px-10  bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
                <i className="text-4xl ri-arrow-down-long-fill"></i>
                <h3 className=" text-2xl font-[Helvetica_Now_Display]">
                  Scroll Down
                </h3>
              </div>
              <img
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[65px]"
                src="./ps5.png"
                alt="ps5"
              />
            </div>
          </div>
          <div className="w-full h-screen flex px-10 bg-black items-center justify-center">
            <div className="cntnr flex relative w-full h-[80%] text-white">
              <div className="limg w-1/2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                <img src="./imag.png" alt="" />
              </div>
              <div className="rg ">
                <h1 className="text-3xl">still runnning,</h1>
                <h1 className="text-3xl">not hunting</h1>
                <p className="font-[Helvetica_Now_Display] text-2xl mt-10">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Maxime laudantium excepturi dolores qui inventore odit, porro,
                  vero quam enim at reprehenderit tenetur dicta.
                </p>
                <p className="font-[Helvetica_Now_Display] text-2xl mt-10">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quidem aliquam temporibus molestiae hic.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
