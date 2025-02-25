export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  var theme = "lightPallete";
  
  return (
    
    <html lang="en" data-theme={theme}>
      <body>
        {children}
      </body>
    </html>
  );
}
