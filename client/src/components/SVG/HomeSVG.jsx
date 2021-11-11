import * as React from "react";

const HomeSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    {...props}
  >
    <defs>
      <clipPath id="clip-path">
        <rect
          id="Rectangle_494"
          data-name="Rectangle 494"
          width={24}
          height={24}
          transform="translate(28 1310)"
          fill="#126154"
        />
      </clipPath>
    </defs>
    <g
      id="Groupe_de_masques_3"
      data-name="Groupe de masques 3"
      transform="translate(-28 -1310)"
      clipPath="url(#clip-path)"
    >
      <g id="home" transform="translate(26.909 1308.909)">
        <path
          id="Trac\xE9_10121"
          data-name="Trac\xE9 10121"
          d="M3.273,9.818l9.818-7.636,9.818,7.636v12A2.182,2.182,0,0,1,20.727,24H5.455a2.182,2.182,0,0,1-2.182-2.182Z"
          fill="none"
          stroke="current"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
        />
        <path
          id="Trac\xE9_10122"
          data-name="Trac\xE9 10122"
          d="M9.818,24V13.091h6.545V24"
          fill="none"
          stroke=""
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
        />
      </g>
    </g>
  </svg>
);

export default HomeSVG;