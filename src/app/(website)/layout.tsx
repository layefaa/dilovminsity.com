"use client"
import React from "react";
import Header from "@/components/templates/Header";
import MenuContextProvider from "@/context/MenuContextProvider";
import {domAnimation, LazyMotion} from "framer-motion";
import {montserrat} from "@/utils/fonts";


export default function RootLayout({children,}: { children: React.ReactNode }) {
  return (
      <html lang="en">
      <body className={montserrat.className}>
      <MenuContextProvider>
        <LazyMotion features={domAnimation}>
          <Header/>
          <main className={'min-h-screen'}>
            {children}
          </main>
        </LazyMotion>
      </MenuContextProvider>
      </body>
      </html>
  )
}
