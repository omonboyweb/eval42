import React, { SVGProps } from "react";

const LinerIcons = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      width={18}
      height={17}
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.7202 9.21739L14.8258 3.06828L8.57812 3.08929"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.67663 7.19955L2.57104 13.3487L8.81871 13.3276"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LinerIcons;
