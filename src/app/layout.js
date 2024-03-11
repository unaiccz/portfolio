import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/navigation/Nav";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Unai Compaired portfolio",
  description: "Next.js portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <div className="container">
       <Nav/>
        {children}
      <Footer/>
       </div>
      </body>
    </html>
  );
}
