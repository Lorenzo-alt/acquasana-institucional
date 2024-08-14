"use client";
import { motion } from "framer-motion";
import React from "react";

export default function SessaoDois() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-inst-sessao-dois lg:bg-inst-sessao-doisv2 bg-cover bg-center w-full pt-40 pb-96 lg:py-44 flex flex-col items-center lg:items-end lg:pl-24 justify-center"
    >
      <div
        className="pl-6 pr-24 lg:py-20 2xl:py-32 lg:w-3/6 2xl:w-7/12 flex flex-col items-start"
      >
        <h1 className="font-mono font-normal text-4xl sm:text-5xl 2xl:text-6xl 2xl:leading-normal sm:leading-normal leading-normal">Nossa missão</h1>
        <div className="my-7">
          <p className="text-xl sm:text-2xl 2xl:text-3xl 2xl:pr-32 2xl:leading-normal sm:leading-normal leading-normal">
            Nosso propósito é claro: promover a saúde do planeta e das futuras gerações através do tratamento responsável dos efluentes domésticos.
            Acreditamos que cada resíduo tratado é um passo em direção a um mundo mais limpo e equilibrado.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
