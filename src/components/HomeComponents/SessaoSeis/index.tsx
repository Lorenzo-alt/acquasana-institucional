"use client";
import React from "react";
import Duvida from "../Duvida";
import { duvidas } from "@/data";
import { motion } from "framer-motion";

export default function SessaoSeis() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-sessao-cinco bg-cover w-full flex flex-col items-center"
    >
      <h3 className="mb-10 mt-20 font-mono text-4xl sm:text-5xl 2xl:text-6xl font-normal">Dúvidas Frequentes</h3>
      <div className="w-full flex flex-col items-center gap-2 sm:gap-4 px-4 lg:px-[15rem] 2xl:px-[30rem] sm:px-16 pb-64 2xl:pb-36">
        {duvidas.map((item, index) => {
          return (
            <Duvida
              dados={item}
              key={"faq-" + item.pergunta}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{opacity: 0}}
              viewport={{ once: true }}
              transition={{ duration: 0.2 }}
            />
          );
        })}
      </div>
    </motion.section>
  );
}
