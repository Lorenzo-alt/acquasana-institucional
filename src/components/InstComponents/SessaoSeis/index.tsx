"use client";
import WhatsButton from "@/components/WhatsButton";
import { motion } from "framer-motion";
import React from "react";

export default function SessaoSeis() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-inst-sessao-seis lg:bg-inst-sessao-seisv2 bg-cover bg-center w-full pt-40 pb-60 lg:py-32 flex flex-col items-start lg:items-end lg:pl-24 justify-center"
    >
      <div
        className="z-10 pl-6 pr-24 lg:pr-14 lg:py-20 lg:w-3/6 2xl:w-7/12 flex flex-col items-start"
      >
        <h1 className="font-mono font-normal text-4xl sm:text-5xl 2xl:text-6xl 2xl:leading-normal sm:leading-normal leading-normal">
          Soluções <strong className="text-verde-destaque">Personalizadas</strong>
        </h1>
        <div className="my-7">
          <p className="text-xl sm:text-2xl 2xl:text-3xl 2xl:pr-32 2xl:leading-normal sm:leading-normal leading-normal">
            Compreendemos que cada cliente é único, e é por isso que oferecemos
            <strong className="text-verde-destaque"> soluções personalizadas</strong> para atender às suas necessidades específicas. Seja uma
            residência ou uma empresa, nossa equipe está pronta para desenvolver estratégias de tratamento que se adequem ao seu perfil.
          </p>
        </div>
        <WhatsButton style="ml-0 hidden lg:flex" />
      </div>
      <WhatsButton style="ml-5 mr-0 lg:hidden" />
    </motion.section>
  );
}
