import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/themeContext";

export const metadata: Metadata = {
  title:
    "Zachary Sturman - Full Stack BuI Developer | Scalable Systems Architect,",
  description:
    "Full stack front end developer specializing in JavaScript and Python frameworks, building modern and responsive web experiences.",
};
const urbanist = Urbanist({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body
          className={`${urbanist.className} w-screen min-h-screen flex items-center justify-center `}
        >
          <main className="w-screen max-w-[2200px] ">{children}</main>
        </body>
      </html>
    </ThemeProvider>
  );
}
