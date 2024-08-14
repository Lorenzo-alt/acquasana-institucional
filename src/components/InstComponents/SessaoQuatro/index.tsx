"use client";
import { motion } from "framer-motion";
import React from "react";

export default function SessaoQuatro() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-inst-sessao-quatro lg:bg-inst-sessao-quatrov2 bg-cover bg-center w-full pt-32 pb-80 lg:py-24 flex flex-col items-center lg:items-end lg:pl-24 justify-center"
    >
      <div
        className="pl-6 px-8 lg:pr-14 lg:py-40 lg:w-3/6 2xl:w-7/12 flex flex-col items-start"
      >
        <h1 className="font-mono font-normal text-4xl sm:text-5xl 2xl:text-6xl 2xl:leading-normal sm:leading-normal leading-normal">
          Inovação ambiental
        </h1>
        <div className="my-7">
          <p className="text-xl sm:text-2xl 2xl:text-3xl 2xl:pr-32 2xl:leading-normal sm:leading-normal leading-normal">
            Nossas instalações de tratamento são equipadas com as mais recentes tecnologias, permitindo-nos alcançar resultados excelentes de
            purificação. Estamos constantemente buscando maneiras de melhorar nossos processos para minimizar o impacto no meio ambiente.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
