import { ReactNode } from "react";

interface MenuProps {
  children: ReactNode;
  setActive: (item: string | null) => void;
}

export default function Menu({ children }: MenuProps) {
  return (
    <nav className="bg-white shadow-md rounded-lg p-4 flex justify-around">
      {children}
    </nav>
  );
}
