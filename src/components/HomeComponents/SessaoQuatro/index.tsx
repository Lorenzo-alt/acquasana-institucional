"use client";
import React from "react";
import ItemSustentavel from "../ItemSustentavel";
import WhatsButton from "@/components/WhatsButton";
import { motion } from "framer-motion";

export default function SessaoQuatro() {
  return (
    <motion.section
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      exit={{ y: 100 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="z-20 sm:max-w-[40rem] min-h-[440px] lg:max-w-[60rem] 2xl:max-w-none relative bg-cinza-3 border 
      border-transparent rounded-3xl lg:mx-32 mx-8 2xl:mx-20 -my-80 sm:-my-32 py-10 flex flex-col items-center justify-center"
    >
      <div className="flex flex-col 2xl:flex-row w-full h-full">
        <ItemSustentavel
          titulo="Estação de Tratamento Própria"
          desc="Contamos com uma estação completa para o tratamento ideal do efluente, garantindo a qualidade necessária e o descarte correto por lei."
        />
        <div className="flex justify-center mx-16 sm:mx-32 2xl:mx-0 2xl:py-10">
          <div className="border w-full border-azul-escuro rounded-full"></div>
        </div>
        <ItemSustentavel
          titulo="Responsabilidade ambiental"
          desc="Nós priorizamos do início ao fim a sustentabilidade do planeta, garantindo segurança para o seu patrimônio e para o meio ambiente."
        />
        <div className="flex justify-center mx-16 sm:mx-32 2xl:mx-0 2xl:py-10">
          <div className="border w-full border-azul-escuro rounded-full"></div>
        </div>
        <ItemSustentavel
          titulo="Processo regulamentado"
          desc="Todo nosso processo de coleta, limpeza e tratamento se encontram dentro das normas legislativas e seguras para você."
        />
        <div className="flex justify-center mx-16 sm:mx-32 2xl:mx-0 2xl:py-10">
          <div className="border w-full border-azul-escuro rounded-full"></div>
        </div>
        <ItemSustentavel
          titulo="Documentação completa"
          desc="Nós trabalhamos com transparência! Emitimos todos os laudos e certificações necessárias em até um dia."
        />
      </div>
      <WhatsButton style="mx-10" />
    </motion.section>
  );
}
