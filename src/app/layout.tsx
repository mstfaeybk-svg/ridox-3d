import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Ridox 3D - Premium 3D Manufacturing & Digital Services',
  description: 'Professional 3D printing, prototyping, and custom manufacturing services. High-precision parts with premium materials.',
  keywords: ['3D printing', 'prototyping', 'manufacturing', 'digital services', 'custom parts'],
  authors: [{ name: 'Ridox 3D Team' }],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ridox3d.com',
    title: 'Ridox 3D - Premium 3D Manufacturing',
    description: 'Professional 3D printing and digital manufacturing services',
    images: [
      {
        url: 'https://ridox3d.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ridox 3D',
      },
    ],
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#1a3a33" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="bg-ridox-white dark:bg-ridox-dark text-ridox-dark dark:text-ridox-white">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}