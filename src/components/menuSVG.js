import * as React from "react";
const MenuSVG = ({ openMenu, setOpenMenu }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    className="md:hidden"
    viewBox="0 -5 32 32"
    onClick={() => setOpenMenu(!openMenu)}
  >
    <title>{"menu"}</title>
    <defs>
      <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="99.045%">
        <stop offset="0%" stopColor="#B4B5C6" />
        <stop offset="100%" stopColor="#8F90A1" />
      </linearGradient>
    </defs>
    <path
      fill="url(#a)"
      fillRule="nonzero"
      d="M974 58a2 2 0 0 1 0 4h-28a2 2 0 0 1 0-4h28Zm0-9a2 2 0 0 1 0 4h-28a2 2 0 0 1 0-4h28Zm0-9a2 2 0 0 1 0 4h-28a2 2 0 0 1 0-4h28Z"
      transform="translate(-944 -40)"
    />
  </svg>
);
export default MenuSVG;
