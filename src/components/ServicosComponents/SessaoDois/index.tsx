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
      className="bg-servi-sessao-dois lg:bg-servi-sessao-doisv2 bg-cover bg-center w-full py-20 lg:py-24 flex flex-col items-center lg:px-20 2xl:px-60 justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 150 }}
        transition={{ duration: 0.3, ease: "circInOut" }}
        className="px-4 pb-10 relative z-10 flex flex-col items-start"
      >
        <h1 className="font-mono border-b-4 rounded-sm border-verde-destaque text-tertiary max-w-[22rem] sm:max-w-none font-normal text-4xl sm:text-5xl 2xl:text-6xl 2xl:leading-normal sm:leading-normal leading-normal">
          Coleta de Efluentes Domésticos:
        </h1>
        <div className="my-7">
          <p className="text-xl sm:text-2xl 2xl:text-3xl 2xl:leading-normal sm:leading-normal leading-normal">
            A coleta de efluentes domésticos originados de fossas sépticas é o primeiro passo desse processo. Utilizando caminhões equipados, os
            resíduos são retirados das fossas de maneira cuidadosa. A coleta eficiente garante a remoção adequada dos efluentes, evitando
            transbordamentos e minimizando os riscos de contaminação ambiental e doenças.
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 150 }}
        transition={{ duration: 0.3, ease: "circInOut" }}
        className="px-4 pb-10 relative z-10 flex flex-col items-start"
      >
        <h1 className="font-mono border-b-4 rounded-sm border-verde-destaque text-tertiary max-w-[22rem] sm:max-w-none font-normal text-4xl sm:text-5xl 2xl:text-6xl 2xl:leading-normal sm:leading-normal leading-normal">
          Transporte Responsável:
        </h1>
        <div className="my-7">
          <p className="text-xl sm:text-2xl 2xl:text-3xl 2xl:leading-normal sm:leading-normal leading-normal">
            O transporte dos efluentes coletados é realizado através de caminhões de alta tecnologia que são empregados para garantir que os resíduos
            sejam transportados com segurança até as instalações de tratamento. Durante esse processo, são adotadas medidas para prevenir vazamentos,
            assegurando que o trajeto seja feito de forma ambientalmente responsável.
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 150 }}
        transition={{ duration: 0.3, ease: "circInOut" }}
        className="px-4 relative z-10 flex flex-col items-start"
      >
        <h1 className="font-mono border-b-4 rounded-sm border-verde-destaque text-tertiary max-w-[22rem] sm:max-w-none font-normal text-4xl sm:text-5xl 2xl:text-6xl 2xl:leading-normal sm:leading-normal leading-normal">
          Tratamento Eficiente:
        </h1>
        <div className="my-7">
          <p className="text-xl sm:text-2xl 2xl:text-3xl 2xl:leading-normal sm:leading-normal leading-normal">
            No centro do processo está o tratamento dos efluentes. Após o transporte, os resíduos passam por um rigoroso processo de tratamento. Isso
            envolve a separação de sólidos, a redução de substâncias poluentes e a desinfecção. O tratamento eficiente garante que os efluentes sejam
            transformados em materiais mais seguros para o meio ambiente, preservando a qualidade da água e minimizando os impactos negativos. No
            controle final, a qualidade do efluente tratado é medida e registrada continuamente de acordo com os dados de qualidade obtidos, o
            efluente tratado é direcionado para dois destinos: corpo hídrico receptor ou de volta ao processo de tratamento.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
