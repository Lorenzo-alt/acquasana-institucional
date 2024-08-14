"use client";
import { motion } from "framer-motion";
import React from "react";

export default function SessaoUm() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-cinza-5 lg:bg-inst-sessao-umv2 lg:-mt-10 bg-cover bg-center w-full py-20 lg:py-24 flex flex-col items-center lg:items-start lg:pl-24 justify-center"
    >
      <div
        className="z-10 px-8 lg:py-20 lg:w-3/6 2xl:w-7/12 text-primary relative flex flex-col items-center"
      >
        <div className="-z-10 mt-20 absolute h-full w-full bg-inst-sessao-um bg-cover bg-center opacity-100 bg-no-repeat lg:hidden"></div>
        <h1 className="font-mono font-normal text-4xl sm:text-5xl 2xl:text-6xl 2xl:leading-normal sm:leading-normal leading-normal">
          Bem-vindo à <strong>Acquasana,</strong> sua parceira em <strong className="text-tertiary-v2">sustentabilidade!</strong>
        </h1>
        <div className="my-7">
          <p className="text-xl sm:text-2xl 2xl:text-3xl 2xl:pr-64 2xl:leading-normal sm:leading-normal leading-normal">
            Na Acquasana, nosso compromisso é transformar efluentes domésticos em <strong className="text-tertiary-v2">soluções sustentáveis.</strong>
            <br /> <br /> Somos uma referência no setor de coleta e tratamento de esgoto doméstico, oferecendo serviços que aliam
            <strong>eficiência, inovação</strong> e<strong className="text-tertiary-v2"> responsabilidade ambiental.</strong>
          </p>
        </div>
      </div>
    </motion.section>
  );
}
