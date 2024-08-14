"use client";
import Form from "@/components/Form";
import { motion } from "framer-motion";
import React from "react";

export default function SessaoSete() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="h-full bg-gradient-to-t to-cinza-0 from-cinza-4 w-full text-azul-escuro flex flex-col items-start lg:items-center pb-36 pl-5 pr-14 lg:px-40 2xl:px-80 pt-10 lg:bg-sessao-seis bg-cover bg-center"
    >
      <h4 className="font-bold text-2xl sm:text-3xl 2xl:text-4xl leading-normal">Ficou com alguma dúvida?</h4>
      <p className="text-xl sm:text-2xl 2xl:text-3xl leading-normal pb-5">Preencha os campos abaixo que um especialista entrará em contato!</p>
      <Form />
    </motion.section>
  );
}
