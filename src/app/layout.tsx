import NavBar from "@/components/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { Ubuntu, Jost } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import { Suspense } from "react";
import Loading from "./loading";
import { Toaster } from "react-hot-toast";
import Analytics from "@/components/Analytics";
import FacebookPixel from "@/components/FacePixel";
import Head from "next/head";
import Script from "next/script";
import { GTM_ID } from "@/lib/gtm";

const ubuntu = Ubuntu({ variable: "--font-ubuntu", subsets: ["latin"], weight: ["300", "400", "500", "700"] });
const jost = Jost({ variable: "--font-jost", subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  keywords:
    "Efluentes, sustentabilidade, Bento Gonçalves, ambiente, saude, esgoto, tratamento, agua, Tratamento de efluentes, Transporte de efluentes, Estação de tratamento, Cabines de pinturas, viniculas, Indústrias, Fossas sépticas, Normas ambientais",
  robots: "noindex, nofollow",
  authors: { name: "Lorenzo-alt", url: "https://github.com/Lorenzo-alt" },
  title: "Home | Acquasana",
  description:
    "Acquasana é uma empresa que oferece serviços de transporte e tratamento de efluentes de diferentes origens, como cabines de pinturas, vinícolas, indústrias e fossas sépticas. Ela possui uma estação de tratamento que segue as normas vigentes e emite laudos comprobatórios.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${ubuntu.variable} ${jost.variable}`}>
      <body className="flex flex-col items-end relative">
        <Suspense>
          <noscript
            dangerouslySetInnerHTML={{
              __html: ` <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`,
            }}
          />
          <FacebookPixel />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <NavBar />
          <main className="flex self-stretch 2xl:self-center h-full w-full flex-col items-center justify-center relative ">
            <Toaster
              toastOptions={{
                className: "font-mono font-semibold",
                style: {
                  background: "#fffffff2",
                  fontSize: "20px",
                },
              }}
            />
            {children}
            <FloatingButton />
          </main>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
