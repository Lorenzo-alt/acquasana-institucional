import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços | Acquasana",
  description:
    "Nos preocupamos em cada etapa dos nossos serviços, garantindo qualidade, segurança e sustentabilidade para você e para o meio ambiente. Conheça mais nossos serviços e garanta o melhor para o seu patrimônio.",
};

export default function InstLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
