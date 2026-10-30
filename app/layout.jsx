import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito",
});

export const metadata = {
  title: "VUKA | Turn your scroll time into career pathways",
  description: "Helping Kenyan students unlock opportunities",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${nunito.variable}`}>
      <body className="bg-[#F8FAFC] text-[#072540] antialiased">
        {children}
      </body>
    </html>
  );
}