import React from "react";
import { DefaultCardProps } from "../../utils/types";

function DefaultCard({ children, className, style }: DefaultCardProps) {
  return (
    <div
      className={`w-full p-6 bg-card-bg-color rounded-lg ${className ?? ""}`}
      style={style}
    >
      {children}
    </div>
  );
}

export default DefaultCard;
