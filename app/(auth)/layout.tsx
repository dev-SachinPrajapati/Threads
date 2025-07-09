import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider} from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Signup from "@/app/(auth)/sign-up/[[...sign-up]]/page"

import "../globals.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thread App",
  description: "By Sachin Prajapati",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>
          <Signup />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
