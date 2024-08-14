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
      className="bg-servi-sessao-um relative lg:bg-servi-sessao-umv2 lg:-mt-10 bg-cover bg-center w-full pt-20 pb-40 lg:py-24 flex flex-col items-center lg:items-start lg:pl-24 2xl:pr-20 justify-center"
    >
      <div className="bg-cinza-5-96 absolute w-full top-0 left-0 h-full mt-30 lg:hidden"></div>
      <div
        className="px-8 2xl:px-32 lg:py-32 lg:w-3/6 2xl:w-8/12 text-primary relative z-10 flex flex-col items-start"
      >
        <h1 className="font-mono font-normal text-4xl sm:text-5xl 2xl:text-6xl 2xl:leading-normal sm:leading-normal leading-normal">
          A Acquasana atende todas as suas necessidades!
        </h1>
        <div className="my-7">
          <p className="text-xl sm:text-2xl 2xl:text-3xl 2xl:leading-normal sm:leading-normal leading-normal">
            Nos preocupamos em cada etapa dos nossos serviços, garantindo qualidade, segurança e sustentabilidade para você e para o meio ambiente.
            <br />
            <br />
            Conheça mais nossos serviços e garanta o melhor para o seu patrimônio.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
