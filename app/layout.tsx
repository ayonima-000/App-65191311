import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Exam_SMK Tamil v.2.0',
  description: 'Aplikasi Ujian SMK Taman Ilmu',
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    title: 'Exam_SMK Tamil v.2.0',
    statusBarStyle: 'black-translucent',
  },
  icons: {
    icon: [
      { url: '/logosmk.png', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '152x152', type: 'image/png' },
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      { url: '/apple-touch-icon.png', sizes: '167x167', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <meta name="application-name" content="Exam SMK TAMIL" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-TileColor" content="#059363" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="msapplication-square70x70logo" content="/favicon-96x96.png" />
        <meta name="msapplication-square150x150logo" content="/web-app-manifest-192x192.png" />
        <meta name="msapplication-square310x310logo" content="/web-app-manifest-512x512.png" />
        <meta name="msapplication-wide310x150logo" content="/test.png" />
        <meta name="theme-color" content="#059363" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
