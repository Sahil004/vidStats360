import { LogoProps } from "@/app/utils/types";
import React from "react";

function CpuIcon({ width, height, color }: LogoProps) {
  return (
    <svg
      width={width ?? 55}
      height={height ?? 56}
      viewBox="0 0 55 56"
      fill={color || "rgb(143, 150, 157)"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="none" d="M0 0h24v24H0V0z"></path>
      <path d="M15 9H9v6h6V9zm-2 4h-2v-2h2v2zm8-2V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2zm-4 6H7V7h10v10z"></path>
    </svg>
  );
}

export default CpuIcon;
