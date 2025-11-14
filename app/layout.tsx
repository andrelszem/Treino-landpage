import "./globals.css";

export const metadata = {
  title: "Só Vai",
  description: "App de treino",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="bg-gray-900 text-white">{children}</body>
    </html>
  );
