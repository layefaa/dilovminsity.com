"use client"
import React from "react";
import MenuContextProvider from "@/context/MenuContextProvider";
import {domAnimation, LazyMotion} from "framer-motion";
import {CabinetGrotesk} from "@/fonts";
import {Footer, Header} from "@/components/templates";


export default function RootLayout({children,}: { children: React.ReactNode }) {
  return (
      <html lang="en">
      <body>
      <MenuContextProvider>
        <LazyMotion features={domAnimation}>
          <Header/>
          <main className={`${CabinetGrotesk.className} mb-[15rem] leading-[120%] text-20 min-h-screen w-full  px-24 sm:px-40 md:px-48 lg:px-80`}>
            {children}
          </main>
          <Footer/>
        </LazyMotion>
      </MenuContextProvider>
      </body>
      </html>
  )
}
