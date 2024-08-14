"use client";
import Image from "next/image";
import React from "react";
import Servico from "../Servico";
import { motion } from "framer-motion";

export default function SessaoDois() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white relative z-10 -mb-10 w-full flex flex-col lg:flex items-center justify-center pb-20 px-8 2xl:pb-60"
    >
      <h2 className="text-primary w-full font-mono font-bold text-3xl sm:text-4xl mt-12 2xl:mt-32 sm:col-span-2 text-center">O que nós fazemos?</h2>
      <motion.div
        className="flex flex-wrap flex-col justify-center sm:flex-row gap-4"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex flex-wrap flex-col sm:flex-row items-center justify-center gap-4">
          <Servico desc="Coleta e tratamento de efluentes domésticos" svg="assets\vector-servico-home-1.svg" />
          <Servico desc="Limpeza da fossa séptica" svg="assets\vector-servico-home-2.svg" />
        </div>
        <div className="flex flex-wrap flex-col sm:flex-row items-center justify-center gap-4">
          <Servico desc="Coleta de gordura e tratamento" svg="assets\vector-servico-home-3.svg" />
          <Servico desc="Desentupimento com hidrojateamento" svg="assets\vector-servico-home-4.svg" />
        </div>
      </motion.div>
    </motion.section>
  );
}
