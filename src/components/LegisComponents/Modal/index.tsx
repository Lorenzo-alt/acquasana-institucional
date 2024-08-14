import Link from "next/link";
import React from "react";
import { FaFilePdf } from "react-icons/fa6";
import ModalItem from "./ModalItem";

type typeProps = {
  isOpen: boolean;
  titulo: string;
  setOpen: (isOpen: boolean) => void;
  dados?: {
    nome: string;
    link: string;
  }[];
};

export default function Modal(props: typeProps) {
  if (props.isOpen) {
    return (
      <div className="bg-black bg-opacity-25 backdrop-blur-sm fixed h-full w-full inset-0 flex items-center justify-center p-5 lg:p-20">
        <div className="flex flex-col items-center justify-center relative z-50 bg-cinza-0 border-0 rounded-xl w-full max-w-[800px] py-5">
          <div className="w-full flex items-center flex-col">
            <p className="text-xl sm:text-2xl 2xl:text-3xl">{props.titulo}</p>
            <div className="grid grid-cols-2 gap-4 gap-x-16 justify-items-start items-center text-base sm:text-lg 2xl:text-xl px-4 lg:px-10 py-3 lg:py-10">
              {props.dados?.map((item) => {
                return <ModalItem dados={item} key={"item-" + item.nome} />;
              })}
            </div>
          </div>
          <button
            onClick={() => props.setOpen(!props.isOpen)}
            className="font-mono text-base sm:text-lg 2xl:text-xl font-bold px-5 py-1 bg-red-400 border-0 shadow-xl border-black rounded-2xl m-2"
          >
            FECHAR
          </button>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
