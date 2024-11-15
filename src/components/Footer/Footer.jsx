import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Element } from "react-scroll";

export default function Footer() {
  return (
    <>
      <Element name="contact">
        <div className="mt-20 w-[80%] flex mx-auto">
          <div className="w-[50%] h-[90vh]">
            <h2 className="text-white bebas text-[4.5rem]">LET'S CONNECT</h2>
            <p className="text-[#C7C7C7] text-lg mb-2">
              Say hello at{" "}
              <span className="text-decoration-line: underline">
                <a href="mailto:gouravbasera06@gmail.com">
                  Gouravbasera06@gmail.com
                </a>
              </span>
            </p>
            <p className="text-[#C7C7C7] text-lg mb-10">
              For more info, here's my{" "}
              <button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href =
                    "/dist/assets/gourav basera - software developer.pdf";
                  link.download = "Gourav Basera";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="underline"
              >
                resume.
              </button>
            </p>
            <div className="flex justify-between w-52">
              <FontAwesomeIcon
                icon={faLinkedinIn}
                style={{ color: "#D3E97A", height: 32 }}
              />
              <FontAwesomeIcon
                icon={faGithub}
                style={{ color: "#D3E97A", height: 32 }}
              />
              <FontAwesomeIcon
                icon={faXTwitter}
                style={{ color: "#D3E97A", height: 32 }}
              />
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ color: "#D3E97A", height: 32 }}
              />
            </div>
          </div>
          <div className="w-[50%] text-[#C7C7C7] h-[90vh]">
            <form className="flex flex-col gap-y-2">
              <label htmlFor="name">Name</label>
              <input
                className="mb-6 rounded outline-none px-4 py-3 bg-[#1A1A1A]"
                type="text"
                id="name"
              />
              <label htmlFor="email">Email</label>
              <input
                className="mb-6 rounded outline-none px-4 py-3 bg-[#1A1A1A]"
                type="text"
                id="email"
              />
              <label htmlFor="subject">Subject</label>
              <input
                className="mb-6 rounded outline-none px-4 py-3 bg-[#1A1A1A]"
                type="text"
                id="subject"
              />
              <label htmlFor="message">Message</label>
              <textarea
                className="mb-6 resize-none rounded outline-none px-4 py-3 bg-[#1A1A1A] h-[156px]"
                type="text"
                id="message"
              />
              <div className="w-36 bg-[#D3E97A] flex justify-center items-center manrope text-[#0A0A0A] rounded-full font-bold h-14">
                SUBMIT
              </div>
            </form>
          </div>
        </div>
      </Element>
    </>
  );
}
