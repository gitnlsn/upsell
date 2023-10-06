import React from "react";
import { DesktopHeader } from "./DesktopHeader";
import { headerItems } from "../constants/headerItems";

export const DefinedDesktopHeader: React.FC = () => {
  return <DesktopHeader items={headerItems} />;
};
