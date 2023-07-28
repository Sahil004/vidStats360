import { LogoProps } from "@/app/utils/types";
import React from "react";

function StorageIcon({ width, height, color }: LogoProps) {
  return (
    <svg
      width={width ?? 55}
      height={height ?? 56}
      viewBox="0 0 55 56"
      fill={color || "rgb(143, 150, 157)"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="none" d="M0 0h24v24H0V0z"></path>
      <path d="M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z"></path>
    </svg>
  );
}

export default StorageIcon;
