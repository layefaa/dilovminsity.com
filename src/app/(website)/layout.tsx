"use client"
import Header from "@/components/templates/Header";
import MenuContextProvider from "@/context/MenuContextProvider";
import {domAnimation, LazyMotion} from "framer-motion";


export default function RootLayout({children,}: { children: React.ReactNode }) {
  return (
      <html lang="en">
      <body>
      <MenuContextProvider>
        <LazyMotion features={domAnimation}>
          <Header/>
          <main className={'h-[200vh]'}>
            {children}
          </main>
        </LazyMotion>
      </MenuContextProvider>
      </body>
      </html>
  )
}
