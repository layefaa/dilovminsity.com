import Header from "@/components/templates/Header";

export const metadata = {}

export default function RootLayout({children,}: { children: React.ReactNode }) {
  return (
      <html lang="en">
      <body>
      <Header/>
      <main className={'h-[200vh]'}>
        {children}
      </main>

      </body>
      </html>
  )
}
