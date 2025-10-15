import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Профессиональный монтаж печей | Master Kaminoff",
  description:
    "Профессиональная установка печей, каминов и дымоходов. Гарантия. Опыт более 15 лет.",
  keywords: [
    "заказать монтаж печей",
    "монтаж печи заказать",
    "монтаж печи",
    "установка дымохода",
    "установка дымохода заказать",
    "установка печи заказать",
    "установка печи",
    "монтаж печий в самаре",
    "монтаж печи цена",
    "монтаж камина цена",
    "монтаж камина",
    "установка камина",
    "установка камина цена",
  ],
  metadataBase: new URL('https://masterkaminoff.ru'),
  other: {
    'yandex-verification': '2a450249699004b5',
  },
  openGraph: {
    title: "Профессиональный монтаж печей | Master Kaminoff",
    description: "Профессиональная установка печей, каминов и дымоходов. Гарантия. Опыт более 15 лет.",
    images: ["/images/contact11.jpg"],
    url: "https://masterkaminoff.ru",
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}