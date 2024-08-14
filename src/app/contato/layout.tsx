import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | Acquasana",
  description:
    "Ficou com alguma dúvida? Preencha os campos ao lado que um especialista entrará em contato! Acquasana é uma empresa que oferece serviços de transporte e tratamento de efluentes de diferentes origens, como cabines de pinturas, vinícolas, indústrias e fossas sépticas. Ela possui uma estação de tratamento que segue as normas vigentes e emite laudos comprobatórios.",
};

export default function ContatoLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
