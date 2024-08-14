"use client";
import WhatsButton from "@/components/WhatsButton";
import { motion } from "framer-motion";
import React from "react";

export default function SessaoTres() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-servi-sessao-tres relative lg:bg-servi-sessao-tresv2 lg:-mt-10 bg-cover bg-center w-full pt-10 pb-96 lg:py-24 flex flex-col items-center lg:items-start lg:pl-24 justify-center"
    >
      <div className="bg-cinza-3-80 absolute w-full top-0 left-0 h-full mt-30"></div>
      <div
        className="relative z-10 pl-6 2xl:px-32 lg:py-32 lg:w-3/6 2xl:w-8/12 2xl:py-32 text-primary flex flex-col items-start"
      >
        <div className="my-7">
          <p className="text-xl sm:text-2xl 2xl:text-3xl 2xl:pr-32 2xl:leading-normal sm:leading-normal leading-normal">
            Os parâmetros de todas as etapas do tratamento são analisados em um laboratório credenciado pelo órgão fiscalizador para garantir a
            qualidade e segurança ambiental do sistema de tratamento.
          </p>

          <p className="mt-5 text-2xl sm:text-3xl 2xl:text-4xl 2xl:pr-32 font-bold font-mono 2xl:leading-normal sm:leading-normal leading-normal">
            Ao final do tratamento, a Acquasana emite um laudo para o cliente, certificando-o pelo tratamento realizado.
          </p>
        </div>
        <WhatsButton classType text="Faça um orçamento" style="mr-auto" />
      </div>
    </motion.section>
  );
}
