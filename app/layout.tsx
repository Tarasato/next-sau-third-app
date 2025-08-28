import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: "DTI-SAU Calculator Varity",
  description: "เว็บรวบรวมเครื่องในการคำนวณต่างๆ",
  keywords: ["เครื่องคำนวณ", "Calculator", "Money share", "BMI", "BMR", "Car Installment"],
  icons: {
    icon: "/next.svg",
  },
  authors: [{ 
    name: "Tarasato",
    url: "https://github.com/Tarasato"
  }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kanit.className}`}
      >
        {children}
      </body>
    </html>
  );
}
