import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Institucional | Acquasana",
  description:
    "Na Acquasana, nosso compromisso é transformar efluentes domésticos em soluções sustentáveis. Somos uma referência no setor de coleta e tratamento de esgoto doméstico, oferecendo serviços que aliam eficiência, inovação e responsabilidade ambiental.",
};

export default function InstLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
