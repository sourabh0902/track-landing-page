import Navbar from '@/Components/Navbar'
import './globals.css'
import 'tailwindcss/tailwind.css'
import Footer from '@/Components/Footer'

export const metadata = {
  title: 'Track Landing Page',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Navbar />
        {children}
      <Footer />  
      </body>
    </html>
  )
}
