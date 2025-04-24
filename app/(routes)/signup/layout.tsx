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
