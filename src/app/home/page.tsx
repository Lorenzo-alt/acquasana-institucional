import React, { Suspense } from "react";
import Image from "next/image";
import Loading from "../loading";
import SessaoUm from "@/components/HomeComponents/SessaoUm";
import SessaoDois from "@/components/HomeComponents/SessaoDois";
import SessaoTres from "@/components/HomeComponents/SessaoTres";
import SessaoQuatro from "@/components/HomeComponents/SessaoQuatro";
import SessaoCinco from "@/components/HomeComponents/SessaoCinco";
import SessaoSeis from "@/components/HomeComponents/SessaoSeis";
import SessaoSete from "@/components/HomeComponents/SessaoSete";
import Script from "next/script";
import { GTM_ID } from "@/lib/gtm";

export default function page() {
  return (
    <>
      <Script async={true} strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`} />
      {/* <script async src="https://www.googletagmanager.com/gtag/js?id=AW-989321006" />
        <script
          type="text/javascript"
          async
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-989321006');`,
          }}
        /> */}
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GTM_ID}');
        `}
      </Script>
      <SessaoUm />
      <SessaoDois />
      <SessaoTres />
      <SessaoQuatro />
      <SessaoCinco />
      <SessaoSeis />
      <SessaoSete />
    </>
  );
}
