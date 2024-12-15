import Navbar from "@/components/Navbar";
import "./globals.css"
import Footer from "@/components/Footer";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className="bg-gradient-to-b  from-gray-900 via-black to-gray-900">
      <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
