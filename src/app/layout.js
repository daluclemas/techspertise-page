import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "./globals.css";
import { CookiesProvider } from "next-client-cookies/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Techspertise Task",
  description: "Techspertise task for internship",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CookiesProvider>
          <ToastContainer />
          <>{children}</>
        </CookiesProvider>
      </body>
    </html>
  );
}
