export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>WTF</title>
      </head>
      <body>{children}</body>
    </html>
  );
}

export const metadata = {
  title: "Home",
  description: "Welcome to Next.js",
};
