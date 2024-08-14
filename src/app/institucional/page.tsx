import SessaoCinco from "@/components/InstComponents/SessaoCinco";
import SessaoDois from "@/components/InstComponents/SessaoDois";
import SessaoQuatro from "@/components/InstComponents/SessaoQuatro";
import SessaoSeis from "@/components/InstComponents/SessaoSeis";
import SessaoTres from "@/components/InstComponents/SessaoTres";
import SessaoUm from "@/components/InstComponents/SessaoUm";
import { GTM_ID } from "@/lib/gtm";
import Script from "next/script";
import React from "react";

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
    </>
  );
}
