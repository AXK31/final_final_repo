import * as React from "react";

export const Separator = ({ className }: { className?: string }) => {
  return <div className={`w-full h-[1px] bg-gray-300 ${className}`} />;
};
