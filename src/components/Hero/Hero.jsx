import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";

function Hero() {
  return (
    <>
      <main>
        <div className="flex justify-between items-center mx-auto w-[80%] h-[84vh] mb-20 text-white">
        <div className="textContainer w-[55%]">
          <h1 className="bebas text-[101px] text leading-[90%]">
            HI, I AM <br /> GOURAV BASERA.
          </h1>
          <p className="manrope text-lg leading-[150%] mt-[8px] text-[#C7C7C7] mb-[40px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint velit
            quam repellat?{" "}
          </p>
          <div className="flex gap-4">
            <button className="manrope font-extrabold w-[187px] h-[54px] bg-[#D3E97A] text-[#0A0A0A] rounded-full">
              <Link to="contact" className="bg-[#D3E97A]" smooth={true} duration={500}>CONTACT ME</Link>
            </button>
            <a href="https://www.linkedin.com/in/gourav-basera/" target="_blank">
            <button className="h-[54px] w-[54px] rounded-full bg-[#222]">
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ color: "#d3e97a", height: 20 }}
              />
            </button>
            </a>
            <a href="https://github.com/GouravBasera" target="_blank">
            <button className="h-[54px] w-[54px] rounded-full bg-[#222]">
              <FontAwesomeIcon
                icon={faSquareGithub}
                style={{ color: "#d3e97a", height: 20 }}
              />
            </button>
            </a>
          </div>
        </div>
        <div className="imageContainer w-[40%] h-[80%]"></div>
        </div>
      </main>
      <hr className="h-px bg-[#484848] border-0"/>
    </>
  );
}

export default Hero;
