import { SVGProps } from "react";

const GreenCircle = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 700 700"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={350} cy={350} r={250} fill="#00D924" fillOpacity="0.8" />
    </svg>
  );
};

export default GreenCircle;
