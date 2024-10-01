import React from "react";

export default function Header() {
  return (
    <>
      <header className="mx-14 text-white font-medium">
        <ul className="flex justify-between items-center h-[14vh] w-{100%}">
          <div className="logo">
            <li>Logo</li>
          </div>
          <div className="flex w-[207px] justify-evenly ">
            <li>Work</li>
            <li>About</li>
            <li>Contact</li>
          </div>
        </ul>
      </header>
    </>
  );
}
