import { LogoProps } from "@/app/utils/types";
import React from "react";

function ShareIcon({ width, height, color }: LogoProps) {
  return (
    <svg
      width={width ?? 55}
      height={height ?? 55}
      viewBox="0 0 55 56"
      fill={color || "rgb(143, 150, 157)"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="none" d="M0 0H24V24H0z"></path>
      <circle cx="20" cy="12" r="2"></circle>
      <circle cx="4" cy="12" r="2"></circle>
      <circle cx="12" cy="20" r="2"></circle>
      <path
        d="M13.74 6.13H19.96V8.129999999999999H13.74z"
        transform="rotate(-44.919 16.852 7.129)"
      ></path>
      <path d="M8.32 9.68L8.63 10 10.05 8.59 6.03 4.55 6.02 4.55 5.71 4.23 4.29 5.64 8.31 9.69z"></path>
      <path d="M15.41 13.94L14 15.35 17.99 19.36 18.34 19.71 19.76 18.3 15.77 14.29z"></path>
      <path d="M8.59 13.95L4.56 17.96 4.24 18.29 5.65 19.7 9.68 15.68 10.01 15.36z"></path>
      <circle cx="12" cy="4" r="2"></circle>
    </svg>
  );
}

export default ShareIcon;
