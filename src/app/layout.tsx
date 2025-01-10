import type { Metadata } from "next";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Phrase Generator",
  description: "Sebastián Roldán Giraldo",
};

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '600']});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
