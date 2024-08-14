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
      className="bg-fundo-cor h-full lg:bg-sessao-tresv2 bg-contain bg-no-repeat -mt-10 2xl:-mt-20 bg-right-top w-full 
      flex flex-col items-center lg:items-start lg:pl-14 py-60 2xl:py-96 "
    >
      <div
        className="px-8 pb-12 sm:min-w-[500px] lg:w-3/6 2xl:w-7/12"
      >
        <h3 className="pb-5 font-mono text-3xl sm:text-4xl 2xl:text-5xl leading-normal text-tertiary font-medium pr-14">Sua Casa, Nosso Planeta</h3>
        <div>
          <p className="text-xl sm:text-2xl 2xl:text-3xl leading-normal relative z-10 2xl:pr-64">
            Cuide do seu lar e do meio ambiente ao mesmo tempo. Nossa equipe está pronta para oferecer soluções personalizadas que se adequam às suas
            necessidades. <br /> <br /> Realizamos coleta, transporte e tratamento com equipamentos tecnológicos, caminhões de última geração e
            profissionais excelentes para realizar um serviço ágil, limpo e qualificado. <br /> <br />
            <strong className="text-tertiary">Juntos, vamos criar um impacto positivo.</strong>
          </p>
        </div>
      </div>
      <div className="w-full h-full opacity-90 bg-sessao-tres bg-center bg-cover bg-no-repeat -mt-28 sm:-mt-20 py-[27rem] lg:hidden"></div>
    </motion.section>
  );
}
