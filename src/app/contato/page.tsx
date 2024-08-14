"use client";
import Form from "@/components/Form";
import type { Metadata } from "next";
import WhatsButton from "@/components/WhatsButton";
import { motion } from "framer-motion";
import React from "react";
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
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-cinza-0 lg:bg-contato-sessao-um lg:-mt-10 bg-cover bg-center w-full pt-20 pb-40 px-5 pr-12 lg:py-40 flex flex-col items-center lg:flex-row lg:px-20 2xl:px-40 justify-center"
      >
        <div className="lg:py-32 lg:w-3/6 lg:mr-20 2xl:w-11/12 text-primary relative z-10 flex flex-col items-start">
          <h1 className="font-mono font-normal text-4xl sm:text-5xl 2xl:text-6xl 2xl:leading-normal sm:leading-normal leading-normal">
            Ficou com alguma dúvida?
          </h1>
          <div className="mt-5 mb-16">
            <p className="text-xl sm:text-2xl 2xl:text-3xl 2xl:leading-normal sm:leading-normal leading-normal">
              Preencha os campos ao lado que um especialista entrará em contato!
            </p>
          </div>
        </div>
        <Form />
      </motion.section>
    </>
  );
}
