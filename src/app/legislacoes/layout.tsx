import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legislações | Acquasana",
  description:
    "Sabemos o quão importante é dar o destino correto para os efluentes, por isso operamos dentro das normas e legislações para que você tenha total segurança de que está tomando a decisão correta para o meio ambiente.",
};

export default function InstLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
