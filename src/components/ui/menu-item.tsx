import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MenuItemProps {
  item: string;
  active: string | null;
  setActive: (item: string | null) => void;
  children: ReactNode;
}

export default function MenuItem({ item, active, setActive, children }: MenuItemProps) {
  const isActive = active === item;

  return (
    <div
      className={cn(
        "relative cursor-pointer px-4 py-2 rounded-md transition-all",
        isActive ? "bg-gray-200 text-gray-900 font-semibold" : "hover:bg-gray-100"
      )}
      onMouseEnter={() => setActive(item)}
      onMouseLeave={() => setActive(null)}
    >
      {children}
    </div>
  );
}
