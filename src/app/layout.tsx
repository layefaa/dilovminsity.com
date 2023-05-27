import '@/styles/globals.css'
import {styles} from "@/styles";


export const metadata = {
  title: 'Dilovministry',
  description: 'Dilovministry Website',
  openGraph: {
    title: '',
    description: '',
    url: '',
    siteName: '',
    images: [
      {
        url: '/favicon.svg',
        width: 800,
        height: 600,
      },
      {
        url: '/favicon.svg',
        width: 1800,
        height: 1600,
        alt: '',
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
    // other: {
    //   rel: 'apple-touch-icon-precomposed',
    //   url: '/apple-touch-icon-precomposed.png',
    // },
  },
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
      <body className={`${styles.baseFontSize}`}>{children}</body>
      </html>
  )
}
