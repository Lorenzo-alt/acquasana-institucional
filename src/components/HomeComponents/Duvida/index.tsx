"use client";
import { motion } from "framer-motion";
import React, { ComponentProps, useState } from "react";
import { useRef } from "react";
import { HiMinusSm, HiPlusSm } from "react-icons/hi";

const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};

type typeProps = ComponentProps<typeof motion.div> & {
  dados: {
    pergunta: string;
    resposta: string;
  };
};

export default function Duvida({ dados, ...props }: typeProps) {
  const [opened, setOpened] = useState(false);
  const divElement = useRef<HTMLDivElement>(null);
  const pElement = useRef<HTMLDetailsElement>(null);
  const openSet = (event: React.MouseEvent) => {
    event.preventDefault()
    setOpened(!opened);
  };
  return (
    <motion.div className="flex group flex-col relative rounded-lg w-full border border-transparent bg-cinza-3" {...props}>
      <details
        className="transition-all w-full text-primary flex justify-center list-none list-image-none items-center"
        open={opened}
        onClick={(event) => openSet(event)}
      >
        <summary className="transition-all list-none list-image-none cursor-pointer z-10 relative font-semibold text-lg sm:text-2xl 2xl:text-3xl text-center w-full items-center">
          <div className="text-center w-full flex items-center">
            <p className="m-auto pl-4">{dados.pergunta}</p>
            <p className="text-3xl sm:text-4xl text-center align-middle 2xl:text-5xl p-4 sm:p-6 pointer-events-auto">
              {opened ? <HiMinusSm /> : <HiPlusSm />}
            </p>
          </div>
        </summary>
        <p className="font-medium text-base sm:text-xl 2xl:text-2xl -mt-10 mx-5 mb-5 lg:mx-10 lg:mb-10">{dados.resposta}</p>
      </details>
    </motion.div>
  );
}
