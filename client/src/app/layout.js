import { Inter } from "next/font/google";
import "./globals.css";
import LeftBar from './../components/leftBar';
import RightBar from './../components/rightBar';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-between">
          <LeftBar />
          {children}
          <RightBar />
        </div>
      </body>
    </html>
  );
}
