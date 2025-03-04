import { Montserrat } from 'next/font/google';

import HeaderAdm from "../components/Header/HeaderAdm";
import HeaderOptions from "../components/Header/HeaderOptions";
import Cellphone from "../components/IconsTSX/CellPhone"
import Footer from '../components/Footer/Footer';

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin-ext'],
  variable: "--font-montserrat"
});


export default function RootLayout({ children }: { children: React.ReactNode }) {

  
  var theme = "lightPallete";
  

  return (
    <html lang="en" className={`${montserrat.variable}`}>
      
      <body>
          <HeaderAdm/>
              
        {children}
      </body>
    </html>
  );
}