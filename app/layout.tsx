import type { Metadata } from "next";
import "./globals.css";
import AppLayout from "@/components/(website)/layout";

export const metadata: Metadata = {
  title: "Nursing Sarathi - Best Nursing Services in Patna | Home Care & Critical Care",
  description: "Get professional nursing services in Patna. Expert home care, dialysis care, critical care, and medical support. 24/7 nursing assistance in Patna, Bihar. Book now!",
  keywords: "home nursing services, home nursing care services, nursing services at home, professional home care nursing, 24/7 home nurse services, emergency nurse at home, ICU trained nurse at home, post-surgery nursing care at home, elderly nursing care at home, pediatric nursing services at home, chronic illness home nursing, bedridden patient care at home, routine medical care at home, home nursing services in Patna, Patna home nursing care, nursing care at home near me, local home nurse services in Patna, certified nurse at home, qualified home nursing professionals, trusted home healthcare services, affordable home nursing care, skilled caregiver at home, benefits of nursing services at home, when to get a home nurse, how to choose a home nursing provider, cost of home nursing services, home care vs hospital care, nursing services patna, home care patna, dialysis care patna, critical care patna, medical nursing patna, 24/7 nursing patna, nursing sarathi patna, home healthcare patna, patient care patna, medical support patna",
  authors: [{ name: "Nursing Sarathi" }],
  creator: "Nursing Sarathi",
  publisher: "Nursing Sarathi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nursingsarathi.in'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
    },
  },
  openGraph: {
    title: "Nursing Sarathi - Best Nursing Services in Patna | Home Care & Critical Care",
    description: "Get professional nursing services in Patna. Expert home care, dialysis care, critical care, and medical support. 24/7 nursing assistance in Patna, Bihar.",
    url: 'https://nursingsarathi.in',
    siteName: 'Nursing Sarathi',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Nursing Sarathi - Professional Nursing Services in Patna',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Nursing Sarathi - Best Nursing Services in Patna",
    description: "Professional nursing services in Patna. Home care, dialysis care, critical care & medical support.",
    images: ['/images/logo.png'],
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
