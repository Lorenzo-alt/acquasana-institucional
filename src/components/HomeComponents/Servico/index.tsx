import Image from "next/image";
import React from "react";

type typeProps = {
  desc: string;
  svg: string;
};

export default function Servico(props: typeProps) {
  return (
    <div className="flex flex-col self-center items-center justify-center w-65 2xl:w-96 mt-12 mb-5">
      <div className="min-h-servico flex items-center justify-center w-full 2xl:h-[18rem] bg-azul-escuro border border-transparent rounded-t-3xl">
        <Image src={props.svg} alt="servico" width={1920} height={1080} quality={100} className="w-auto h-full p-4 px-20" />
      </div>
      <div className="flex items-center justify-center w-full bg-cinza-1 2xl:h-[9rem] border border-transparent rounded-b-3xl">
        <h2 className="text-primary p-5  font-semibold text-xl 2xl:text-3xl 2xl:leading-normal sm:leading-normal leading-normal text-center">
          {props.desc}
        </h2>
      </div>
    </div>
  );
}
