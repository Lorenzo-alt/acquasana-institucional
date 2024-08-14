"use client";
import LeisButton from "@/components/LegisComponents/LeisButton";
import { dadosEstadual, dadosFederal, dadosMunicipal } from "@/data";
import { GTM_ID } from "@/lib/gtm";
import { motion } from "framer-motion";
import { link } from "fs";
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
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-cinza-0 lg:bg-legis-sessao-um lg:-mt-10 bg-cover bg-center w-full pt-20 pb-40 lg:py-10 flex flex-col items-center lg:items-start lg:pl-24 2xl:pr-20 justify-center"
      >
        <div className="px-8 2xl:px-32 lg:py-32 lg:w-3/6 2xl:w-8/12 text-primary relative flex flex-col items-start">
          <h1 className="font-mono font-normal text-4xl sm:text-5xl 2xl:text-6xl 2xl:leading-normal sm:leading-normal leading-normal">
            Com a Acquasana o serviço é seguro do início ao fim!
          </h1>
          <div className="mt-5 mb-16">
            <p className="text-xl sm:text-2xl 2xl:text-3xl 2xl:leading-normal sm:leading-normal leading-normal">
              Sabemos o quão importante é dar o destino correto para os efluentes, por isso operamos dentro das normas e legislações para que você
              tenha total segurança de que está tomando a decisão correta para o meio ambiente. <br /> <br /> Confira abaixo{" "}
              <strong>algumas leis</strong> que devemos obedecer durante o processo:
            </p>
          </div>
          <div className="w-5/6 2xl:w-3/6 flex flex-col gap-4 relative z-40">
            <LeisButton tipo="federal" dados={dadosFederal} />
            <LeisButton tipo="estadual" dados={dadosEstadual} />
            <LeisButton tipo="municipal" dados={dadosMunicipal} />
          </div>
        </div>
      </motion.section>
    </>
  );
}
