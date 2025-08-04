import React from "react";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <>
      <header className="mx-14 text-white font-medium">
        <ul className="flex justify-between items-center h-[14vh] w-{100%}">
          <div className="logo">
            <li>Gourav Basera</li>
          </div>
          <div className="flex w-[207px] justify-evenly">
            <li>
              <Link className="cursor-pointer" to="project" smooth={true} duration={500}>
                Work
              </Link>
            </li>
            <li>
              <Link className="cursor-pointer" to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link className="cursor-pointer" to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </div>
        </ul>
      </header>
    </>
  );
}
