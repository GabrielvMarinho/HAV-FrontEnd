import { Montserrat } from 'next/font/google';

import HeaderAdm from "./components/Header/HeaderAdm";
import HeaderOptions from "./components/Header/HeaderOptions";
import Cellphone from "./components/IconsTSX/CellPhone"
import Footer from './components/Footer/Footer';

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

  
  var theme = "lightPallete";
  
  
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      
      <body>
          <HeaderAdm dropdownLinks={[
          <HeaderOptions optionsLinks={[                                                      
              "/imóveis",
              "/oi",
              "/thchau"
            ]}title={"Área do Admin"} optionsIcons = 
            {[<Cellphone width={15} height={15} color={"var(--text-white)"}/>,
              <Cellphone width={15} height={15} color={"var(--text-white)"}/>,
              <Cellphone width={15} height={15} color={"var(--text-white)"}/>]}
              options={["Usuários", "Imóveis"]}/>,
          <HeaderOptions optionsLinks={[
          "/imóveis",
          "/oi",
          ]}title={"Gestão"} optionsIcons = {[<Cellphone width={15} height={15} color={"var(--text-white)"}/>,
          <Cellphone width={15} height={15} color={"var(--text-white)"}/>
              ]}options={["Usuários", "Imóveis"]}/>
          ]}options={["asd", "asdas", "asddd"]}optionsLinks={["/xxx", "/asdma", "/asdasd"]}width={25} height={25} color=""/>
              
        {children}
          <Footer></Footer>
      </body>
    </html>
  );
}
