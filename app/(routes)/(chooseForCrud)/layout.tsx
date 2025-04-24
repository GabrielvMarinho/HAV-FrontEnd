import HeadersAll from "@/app/components/Header/HeadersAll"
import montserrat from "@/app/Fonts"

export const metadata = {
  title: 'Hav Imobiliária',
  description: 'Criado por Hav',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    {children}
    </>
  )
}
