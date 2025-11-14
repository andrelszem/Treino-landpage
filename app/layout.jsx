export const metadata = {
  title: "Só Vai",
  description: "App de treino",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
