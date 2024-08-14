"use client";
import { motion } from "framer-motion";
import React from "react";

export default function SessaoCinco() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-inst-sessao-cinco lg:bg-inst-sessao-cincov2 bg-cover bg-center w-full pt-20 pb-60 lg:py-24 flex flex-col items-center lg:items-start lg:pl-24 justify-center"
    >
      <div
        className="px-10 lg:py-20 lg:pb-40 lg:w-3/6 2xl:w-7/12 text-primary relative flex flex-col items-start"
      >
        <h1 className="font-mono font-normal text-4xl sm:text-5xl 2xl:text-6xl 2xl:leading-normal sm:leading-normal leading-normal">
          Compromisso com a <strong>qualidade</strong>
        </h1>
        <div className="my-7">
          <p className="text-xl sm:text-2xl 2xl:text-3xl 2xl:pr-64 2xl:leading-normal sm:leading-normal leading-normal">
            Com <strong>anos de experiência</strong> e uma <strong>equipe altamente qualificada,</strong> garantimos um processo de coleta e
            tratamento que atende aos mais <strong>rigorosos padrões de qualidade.</strong> <br />
            <br /> Nossas tecnologias avançadas e abordagem especializada garantem que todo o lodo seja tratado com a
            <strong>máxima eficiência e cuidado,</strong> tendo seus produtos finais reutilizados e descartados da melhor forma, conforme as normas
            atuais.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
