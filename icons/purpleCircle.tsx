import { SVGProps } from "react";

const PurpleCircle = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 717 690"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <ellipse
        cx="296.5"
        cy={286}
        rx="320.5"
        ry={304}
        fill="#635BFF"
        fillOpacity="0.8"
      />
    </svg>
  );
};

export default PurpleCircle;
