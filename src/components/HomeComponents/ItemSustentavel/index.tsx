import React from "react";

type typeProps = {
  titulo: string;
  desc: string;
};

export default function ItemSustentavel(props: typeProps) {
  return (
    <div className="text-azul-escuro mx-8 sm:mx-10 my-9 h-full 2xl:max-w-[280px] 3xl:max-w-[320px]">
      <h2 className="font-mono font-bold leading-normal text-center text-2xl sm:text-3xl">{props.titulo}</h2>
      <p className="text-center text-xl sm:text-2xl sm:leading-normal">{props.desc}</p>
    </div>
  );
}
