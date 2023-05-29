"use client"
import React from "react";
import MenuContextProvider from "@/context/MenuContextProvider";
import {domAnimation, LazyMotion} from "framer-motion";
import {CeraPro} from "@/fonts";
import {Footer, Header} from "@/components/templates";


export default function RootLayout({children,}: { children: React.ReactNode }) {
  return (
      <html lang="en">
      <body className={CeraPro.className}>
      <MenuContextProvider>
        <LazyMotion features={domAnimation}>
          <Header/>
          <main className={'min-h-screen'}>
            {children}
          </main>
          <Footer/>
        </LazyMotion>
      </MenuContextProvider>
      </body>
      </html>
  )
}
