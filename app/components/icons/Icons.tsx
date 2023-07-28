import React from "react";
import ShareIcon from "./ShareIcon";
import StorageIcon from "./StorageIcon";
import CpuIcon from "./CpuIcon";

function Icons({ icon }: { icon: string }) {
  switch (icon) {
    case "ShareIcon":
      return <ShareIcon />;
    case "CpuIcon":
      return <CpuIcon />;
    case "StorageIcon":
      return <StorageIcon />;

    default:
      return <></>;
  }
}

export default Icons;
