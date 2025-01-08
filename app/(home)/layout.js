import { Inter } from "next/font/google";
import Navbar from "../components/Navbar/Navbar";
import "../globals.css";
import { dbConnection } from "../service/mongo";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Air BnB",
  description: "This is an Priama Project for the next app RO",
};

export default async function RootLayout({ children }) {
  await dbConnection()
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar sideMenu={true} />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
