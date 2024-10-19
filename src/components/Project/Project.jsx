import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { Element } from "react-scroll";

export default function Project() {
  const data = [
    {
      _id: 1,
      heading: "Ecommerce Website Using Wordpress",
      description:
        "Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.",
      year: "2023",
      role: "Wordpress Developer",
      imageUrl: "undefined",
      liveLink: "https://www.fitnesstack.com",
      githubLink: "",
    },
    {
      _id: 2,
      heading: "Portfolio Website for Real Estate Client",
      description:
        "Mastered CSS Grid complexities in building an innovative news homepage, navigating intricate design decisions for a seamless user experience. Leveraged the challenge to enhance skills in  front-end development.",
      year: "2022",
      role: "Wordpress Developer",
      imageUrl: "undefined",
      liveLink: "https://natrajproperties.com/",
      githubLink: "undefined",
    },
    {
      _id: 3,
      heading: "Appointment Booking App for Therapists",
      description:
        "Successfully crafted an engaging product page featuring a dynamic lightbox gallery and seamless cart functionality, showcasing proficiency in JavaScript development.",
      year: "2024",
      role: "Junior Web Developer",
      imageUrl: "undefined",
      liveLink: "https://zummit-chandan.vercel.app/",
      githubLink: "https://github.com/Vaibhav-Thalanki/Zummit",
    },
  ];

  return (
    <>
      <Element name="project">
        <div className="text-white w-[80%] mx-auto my-20">
          <h2 className="bebas text-[76px]">FEATURED PROJECTS</h2>
          <p className="manrope text-lg leading-[150%] font-normal color-[#C7C7C7]">
            Here are some of the selected projects that showcase my passion for
            Software Development.
          </p>
        </div>
        {data.map((dataSet, index) => (
          <div
            className="flex manrope justify-between items-center mx-auto w-[80%] text-white"
            key={index}
          >
            <div className="cardContainer text-white mb-[120px] flex h-[600px] w-full justify-between">
              <div className="cardImage w-[50%] rounded-xl bg-[#1A1A1A]"></div>
              <div className="cardText w-[45%] m-auto">
                <h3 className="text-3xl font-medium mb-4">{dataSet.heading}</h3>
                <p className="mb-8 text-[#C7C7C7]">{dataSet.description}</p>
                <table className="w-full">
                  <thead className="text-left">
                    <tr>
                      <th className="pb-4">PROJECT INFO</th>
                    </tr>
                  </thead>
                  <hr className="w-[237%]" />
                  <tbody>
                    <tr>
                      <td>Year</td>
                      <td className="text-right py-4">{dataSet.year}</td>
                    </tr>
                    <hr className="w-[237%]" />
                    <tr>
                      <td>Role</td>
                      <td className="text-right py-4">{dataSet.role}</td>
                    </tr>
                    <hr className="w-[237%]" />
                  </tbody>
                </table>
                <div className="buttonsDiv manrope pt-12 font-bold text-[#D3E97A] items-end flex gap-6">
                  <div>
                    <a href={dataSet.liveLink}>
                      LIVE DEMO
                      <FontAwesomeIcon
                        icon={faSquareArrowUpRight}
                        className="pl-1"
                      />
                    </a>
                    <hr />
                  </div>

                  {dataSet.githubLink && dataSet.githubLink !== "undefined" && (
                    <div>
                      <a href={dataSet.githubLink}>
                        SEE ON GITHUB
                        <FontAwesomeIcon
                          icon={faGithub}
                          className="pl-1"
                          style={{ color: "#d3e97a", height: 20 }}
                        />
                      </a>
                      <hr />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Element>
    </>
  );
}
