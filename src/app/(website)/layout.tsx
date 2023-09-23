"use client"
import React, {useEffect} from "react";
import MenuContextProvider from "@/context/MenuContextProvider";
import {domAnimation, LazyMotion} from "framer-motion";
import {CabinetGrotesk} from "@/fonts";
import {Footer, Header} from "@/components/templates";

// @ts-ignore
const OpacityReducer = ({startDate}) => {
    useEffect(() => {
        // Calculate the time difference between the current date and the start date
        const currentDate = new Date();
        const startTime = new Date(startDate);
        // @ts-ignore
        const timeDifference = currentDate - startTime;

        // Calculate the number of 24-hour periods elapsed
        const daysElapsed = Math.floor(timeDifference / (24 * 60 * 60 * 1000));

        // Calculate the new opacity (1/7 reduction for each 24-hour period)
        const newOpacity = 1 - (daysElapsed / 7);

        // Apply the new opacity to document.body (ensure it doesn't go below 0)
        document.body.style.opacity = String(Math.max(newOpacity, 0));

        // Save the new opacity to localStorage for the next visit
        localStorage.setItem('opacity', newOpacity.toString());
    }, [startDate]);

    return null;
};


export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <MenuContextProvider>
            <LazyMotion features={domAnimation}>
                <Header/>
                {/*<OpacityReducer startDate="20"

                "




                3-09-13T00:00:00"/>*/}
                <main
                    className={`${CabinetGrotesk.className} mb-[3.5rem] md:mb-[7.5rem] leading-[120%] text-20 w-full  `}>
                    {children}
                </main>
                <Footer/>
            </LazyMotion>
        </MenuContextProvider>
        </body>
        </html>
    )
}
