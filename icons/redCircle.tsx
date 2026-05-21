import { SVGProps } from "react";

const RedCircle = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 577 606"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <ellipse
        cx="397.5"
        cy={209}
        rx="297.5"
        ry={297}
        fill="#FF333D"
        fillOpacity="0.8"
      />
    </svg>
  );
};

export default RedCircle;
