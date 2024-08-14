"use client";
import React, { useCallback, useEffect, useRef } from "react";
import WhatsButton from "../WhatsButton";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { Tektur } from "next/font/google";
import { event } from "@/lib/fpixel";
import { useRouter } from "next/navigation";

const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/);

const FormSchema = z.object({
  nome: z.string({ invalid_type_error: "Apenas String" }).nonempty("Insira seu nome"),
  telefone: z
    .string({ invalid_type_error: "Apenas String" })
    .nonempty("Insira seu telefone")
    .regex(phoneRegex, "Numero Invalido")
    .min(10, "Numero Invalido"),
  email: z.string({ invalid_type_error: "Apenas String" }).nonempty("Insira seu e-mail").email({ message: "Digite um e-mail valido" }),
  cidade: z.string({ invalid_type_error: "Apenas String" }).nonempty("Insira sua cidade"),
  mensagem: z.string({ invalid_type_error: "Apenas String" }).nonempty("Insira uma mensagem"),
});

type typeForm = z.infer<typeof FormSchema>;

const enviar = async (data: string) => {
  const res = await fetch(`api/email`, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  if (res.ok) return res;
  else {
    throw new Error("Something went wrong");
  }
};

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<typeForm>({
    resolver: zodResolver(FormSchema),
  });

  const router = useRouter();
  const event = useCallback(()  => {
    router.push("/conversao");
  }, [router])

  const [values, setValues] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const onSubmit = (data: any) => {
    setValues(data);
  };

  useEffect(() => {
    if (values != "") {
      try {
        const res = enviar(values);
        toast.promise(res, {
          loading: "Enviando...",
          success: () => {event(); return `Email enviado!`;},
          error: "Erro! tente novamente",
        });
      } catch (error) {
        console.log(error);
      }

      reset();
    }
  }, [values, reset, event]);

  return (
    <motion.form
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-stretch justify-end lg:grid lg:grid-cols-2 gap-5 w-full text-primary"
    >
      <p className="font-medium text-xl sm:text-2xl 2xl:text-3xl self-start col-span-2 hidden lg:block">* Campos obrigatórios</p>
      <div className="flex flex-col items-center justify-end w-full">
        {errors.nome && <span className="text-base sm:text-lg 2xl:text-xl font-semibold text-red-700">{errors.nome.message}</span>}
        <input
          {...register("nome")}
          type="text"
          id="name"
          className={twMerge(
            "bg-cinza-3 w-full border-2 font-medium text-xl sm:text-2xl 2xl:text-3xl text-azul-escuro rounded-xl block p-4 placeholder:font-sans placeholder:font-medium",
            errors.nome ? "placeholder:text-red-700 border-red-900 text-red-700" : "placeholder:text-azul-escuro border-azul-escuro"
          )}
          placeholder={`Seu nome${errors.nome ? " - valor obrigatorio" : "*"}`}
        />
      </div>
      <div className="flex flex-col items-center justify-end w-full">
        {errors.email && <span className="text-base sm:text-lg 2xl:text-xl font-semibold text-red-700">{errors.email.message}</span>}
        <input
          {...register("email")}
          type="text"
          id="name"
          className={twMerge(
            "bg-cinza-3 w-full border-2 font-medium text-xl sm:text-2xl 2xl:text-3xl text-azul-escuro rounded-xl block p-4 placeholder:font-sans placeholder:font-medium",
            errors.email ? "placeholder:text-red-700 border-red-900 text-red-700" : "placeholder:text-azul-escuro border-azul-escuro"
          )}
          placeholder={`Seu email${errors.email ? " - valor obrigatorio" : "*"}`}
        />
      </div>

      <div className="flex flex-col items-center justify-end w-full">
        {errors.telefone && <span className="text-base sm:text-lg 2xl:text-xl font-semibold text-red-700">{errors.telefone.message}</span>}
        <input
          {...register("telefone")}
          type="text"
          id="name"
          className={twMerge(
            "bg-cinza-3 w-full border-2 font-medium text-xl sm:text-2xl 2xl:text-3xl text-azul-escuro rounded-xl block p-4 placeholder:font-sans placeholder:font-medium",
            errors.telefone ? "placeholder:text-red-700 border-red-900 text-red-700" : "placeholder:text-azul-escuro border-azul-escuro"
          )}
          placeholder={`Seu telefone${errors.telefone ? " - valor obrigatorio" : "*"}`}
        />
      </div>

      <div className="flex flex-col items-center justify-end w-full">
        {errors.cidade && <span className="text-base sm:text-lg 2xl:text-xl font-semibold text-red-700">{errors.cidade.message}</span>}
        <input
          {...register("cidade")}
          type="text"
          id="name"
          className={twMerge(
            "bg-cinza-3 w-full border-2 font-medium text-xl sm:text-2xl 2xl:text-3xl text-azul-escuro rounded-xl block p-4 placeholder:font-sans placeholder:font-medium",
            errors.cidade ? "placeholder:text-red-700 border-red-900 text-red-700" : "placeholder:text-azul-escuro border-azul-escuro"
          )}
          placeholder={`Sua cidade${errors.cidade ? " - valor obrigatorio" : "*"}`}
        />
      </div>
      <div className="flex flex-col items-center justify-end w-full col-span-2">
        {errors.mensagem && <span className="text-base sm:text-lg 2xl:text-xl font-semibold text-red-700">{errors.mensagem.message}</span>}
        <textarea
          {...register("mensagem")}
          name="mensagem"
          id="mensagem"
          cols={40}
          rows={7}
          placeholder={`Sua mensagem${errors.mensagem ? " - valor obrigatorio" : "*"}`}
          className={twMerge(
            "bg-cinza-3 w-full border-2 font-medium text-xl sm:text-2xl 2xl:text-3xl border-azul-escuro text-azul-escuro rounded-xl block p-4 placeholder:text-azul-escuro placeholder:font-sans placeholder:font-medium resize-none",
            errors.mensagem ? "placeholder:text-red-700 border-red-900 text-red-700" : "placeholder:text-azul-escuro border-azul-escuro"
          )}
        ></textarea>
      </div>

      <p className="font-medium text-xl sm:text-2xl self-start col-span-2 lg:hidden">* Campos obrigatórios</p>
      <div className="col-span-2 w-full flex items-center justify-center">
        <WhatsButton classType type={1} style="sm:w-auto mr-0" disabled={loading} />
      </div>
    </motion.form>
  );
}
