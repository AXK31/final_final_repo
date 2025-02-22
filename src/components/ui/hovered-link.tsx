import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HoveredLinkProps {
  href: string;
  children: ReactNode;
}

export default function HoveredLink({ href, children }: HoveredLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "block px-4 py-2 transition-colors duration-200 rounded-md",
        "hover:bg-blue-500 hover:text-white"
      )}
    >
      {children}
    </Link>
  );
}
