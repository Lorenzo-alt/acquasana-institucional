"use client";
import { motion } from "framer-motion";
import React from "react";

export default function SessaoTres() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-inst-sessao-tres lg:bg-inst-sessao-tresv2 bg-cover bg-center w-full pt-20 pb-60 lg:py-24 flex flex-col items-center lg:items-start lg:pl-24 justify-center"
    >
      <div
        className="px-8 lg:py-32 lg:w-3/6 2xl:w-7/12 text-primary relative flex flex-col items-start"
      >
        <h1 className="font-mono font-normal text-4xl sm:text-5xl 2xl:text-6xl 2xl:leading-normal sm:leading-normal leading-normal">
          Estação de tratamento
        </h1>
        <div className="my-7">
          <p className="text-xl sm:text-2xl 2xl:text-3xl 2xl:pr-64 2xl:leading-normal sm:leading-normal leading-normal">
            A Estação de Tratamento de Efluentes da Acquasana foi implementada de acordo com as normas atuais vigentes. <br />
            <br />
            Nela, são recebidos os efluentes domésticos, oriundos de fossas sépticas de <strong>casas, condomínios e empresas.</strong> <br />
            <br /> A função da estação é tratar o efluente de forma correta, emitindo laudos comprobatórios que certificam que o resíduo foi tratado e
            destinado
            <strong> conforme as normas vigentes.</strong>
          </p>
        </div>
      </div>
    </motion.section>
  );
}
