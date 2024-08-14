import Link from "next/link";
import React from "react";
import { FaFilePdf } from "react-icons/fa6";

type typeProps = {
  dados?: {
    nome: string;
    link: string;
  };
};

export default function ModalItem(props: typeProps) {
  return (
    <Link href={props.dados?.link ? props.dados.link : ""} className="" legacyBehavior>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row sm:flex-row items-center justify-start gap-2 w-full text-verde-destaquev2"
      >
        <div className="min-w-[16px]">
          <FaFilePdf />
        </div>
        <p className="text-primary">{props.dados?.nome}</p>
      </a>
    </Link>
  );
}
