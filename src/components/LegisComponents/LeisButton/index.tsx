"use client";
import React, { useState, useEffect } from "react";
import { HiPlusSm } from "react-icons/hi";
import Modal from "../Modal";
import { ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
type typeProps = {
  tipo?: string;
  dados?: {
    nome: string;
    link: string;
  }[];
};

export default function LeisButton(props: typeProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [tipo, setTipo] = useState<string>("");


  useEffect(() => {
    if (props.tipo == "federal") {
      setTipo("Legislação Federal");
    } else if (props.tipo == "municipal") {
      setTipo("Legislação Municipal");
    } else {
      setTipo("Legislação Estadual");
    }
  }, [props.tipo]);

  const change = () => {
    setOpen(!open);
  };

  return (
    <>
      <div
        className="cursor-pointer rounded-lg w-full text-primary border border-transparent flex justify-between items-center bg-cinza-3 min-w-[15rem] lg:min-w-[25rem]"
        onClick={change}
      >
        <div className="flex items-start w-full">
          <p className="font-semibold text-lg sm:text-2xl 2xl:text-3xl text-start pl-8 w-full">{tipo}</p>
        </div>
        <div className="text-3xl sm:text-4xl text-center align-middle 2xl:text-5xl p-4 sm:p-6">{<HiPlusSm />}</div>
      </div>
      <Modal isOpen={open} setOpen={change} dados={props.dados} titulo={tipo}/>
    </>
  );
}
