'use client'
import { SessionProvider } from "next-auth/react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <html lang="en">
        <body>
          <main>{children}</main>
        </body>
      </html>
    </SessionProvider>
  );
}