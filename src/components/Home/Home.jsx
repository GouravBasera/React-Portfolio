import React from "react";
import { Card } from "../route";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    <>
      <main>
        <div className="flex justify-between items-center mx-auto w-[80%] h-[84vh] mb-20 text-white">
        <div className="textContainer">
          <h1 className="bebas text-[101px] text leading-[90%]">
            HI, I AM <br /> GOURAV BASERA.
          </h1>
          <p className="manrope text-lg leading-[150%] mt-[8px] mb-[40px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint velit
            quam repellat?{" "}
          </p>
          <div className="flex gap-4">
            <button className="manrope font-extrabold w-[187px] h-[54px] bg-[#D3E97A] text-[#0A0A0A] rounded-full">
              CONTACT ME
            </button>
            <button className="h-[54px] w-[54px] rounded-full bg-[#222]">
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ color: "#d3e97a", height: 20 }}
              />
            </button>
            <button className="h-[54px] w-[54px] rounded-full bg-[#222]">
              <FontAwesomeIcon
                icon={faGithub}
                style={{ color: "#d3e97a", height: 20 }}
              />
            </button>
          </div>
        </div>
        <div className="imageContainer w-[600px] h-[700px] border"></div>
        </div>
      </main>
      <hr className="h-px bg-[#484848] border-0"/>
      <div className="text-white w-[80%] mx-auto">
        {/* Heading */}
        <div className="my-20">
          <h2 className="bebas text-[76px]">FEATURED PROJECTS</h2>
          <p className="manrope text-lg leading-[150%] font-normal color-[#C7C7C7]">
            Here are some of the selected projects that showcase my passion for
            Software Development.
          </p>
        </div>
      </div>
      <Card/>
    </>
  );
}

export default Home;
