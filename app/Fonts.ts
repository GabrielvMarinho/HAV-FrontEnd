import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin-ext"],
  variable: "--font-montserrat",
});

export default montserrat;
