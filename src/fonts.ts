import localFont from "next/font/local"


export const CabinetGrotesk = localFont({
  preload: true,
  src: [
    {
      path: '../public/fonts/CabinetGrotesk-Bold.woff2',
    }, {
      path: '../public/fonts/CabinetGrotesk-Medium.woff2',
    },
  ],
})

export const CeraPro = localFont({
  preload: true,
  src: [
    {
      path: '../public/fonts/CeraProBlack.otf',
    },
    {
      path: '../public/fonts/CeraProMedium.otf',
    },
    {
      path: '../public/fonts/CeraProBold.otf',
    },
  ],
})