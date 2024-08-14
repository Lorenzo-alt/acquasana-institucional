"use client";
import WhatsButton from "@/components/WhatsButton";
import { motion } from "framer-motion";
import React from "react";

export default function SessaoUm() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-[#09131C] lg:bg-sessao-um lg:-mt-10 bg-cover bg-center w-full h-max pt-24 lg:py-24 2xl:py-52 flex flex-col items-center lg:items-start lg:pl-24 justify-center"
    >
      <div
        className="z-10 px-8 pt-20 lg:py-20 lg:w-3/6 2xl:w-7/12"
      >
        <h1 className="font-mono font-normal text-4xl sm:text-5xl 2xl:text-6xl 2xl:leading-normal sm:leading-normal leading-normal">
          Transformando Efluentes Domésticos em <strong className="text-tertiary">Sustentabilidade</strong>
        </h1>
        <div className="my-7">
          <p className="text-xl sm:text-2xl 2xl:text-3xl 2xl:pr-64 2xl:leading-normal sm:leading-normal leading-normal">
            Se você está buscando uma <strong className="text-tertiary">solução responsável</strong> e que atende a
            <strong className="text-tertiary"> todas as legislações</strong>, clique no botão abaixo e faça agora seu orçamento!
          </p>
        </div>
        <WhatsButton />
      </div>
      <div className="bg-sessao-um w-full h-60 bg-cover bg-right -mt-5 lg:hidden"></div>
    </motion.section>
  );
}
