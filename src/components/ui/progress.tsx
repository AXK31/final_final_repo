"use client";

import * as React from "react";

interface ProgressProps {
  value: number;
  max?: number;
}

export const Progress: React.FC<ProgressProps> = ({ value, max = 100 }) => {
  return (
    <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden">
      <div
        className="h-full bg-blue-600 transition-all duration-300"
        style={{ width: `${(value / max) * 100}%` }}
      ></div>
    </div>
  );
};
