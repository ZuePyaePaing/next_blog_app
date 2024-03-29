import { Montserrat, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "./components";
import ThemeProvider from "@/providers/ThemeProvider";
import { ThemeContextProvider } from "@/context/ThemeContext";


const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export const metadata = {
  title: "ZPP Blog",
  description: "Next js learning web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${roboto_mono.className}`}>
        <ThemeContextProvider>
          <ThemeProvider>
            <Navbar />
            <main>{children}</main>
            <Footer/>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
