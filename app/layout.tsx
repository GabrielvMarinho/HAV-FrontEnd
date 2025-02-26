import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin-ext'],
  variable: "--font-montserrat"
});


export default function RootLayout({
  children,
}: Readonly<{

  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
