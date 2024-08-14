"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Loading from "../loading";
import Script from "next/script";
import { GTM_ID } from "@/lib/gtm";

export default function Conversao() {
  const router = useRouter();

  useEffect(() => {
    router.back();
  }, [router]);
  
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
      <Loading />
    </>
  );
}
