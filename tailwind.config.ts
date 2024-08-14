import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      sans: ["var(--font-jost)", "sans-serif"],
    },
    extend: {
      screens: {
        "3xl": "2200px",
      },
      width: {
        "97": "25rem",
        "65": "16.5rem",
      },
      backgroundImage: {
        fundo: "linear-gradient(90deg, rgba(6,20,28,1) 0%, rgba(9,34,47,1) 13%, rgba(9,34,47,1) 87%, rgba(6,20,28,1) 100%)",
        "sessao-um": "url('/assets/fundo-sessao-1-home.jpeg')",
        "sessao-tres": "url('/assets/fundo-sessao-3-home.svg')",
        "sessao-tresv2": "url('/assets/fundo-sessao-3-homev2.svg')",
        "sessao-quatro": "url('/assets/fundo-sessao-4-home.svg')",
        "sessao-quatrov2": "url('/assets/fundo-sessao-4-homev2.svg')",
        "sessao-cinco": "url('/assets/fundo-sessao-5-home.svg')",
        "sessao-seis": "url('/assets/fundo-sessao-6-home.svg')",
        "inst-sessao-um": "url('/assets/fundo-sessao-1-inst.svg')",
        "inst-sessao-umv2": "url('/assets/fundo-sessao-1-instv2.svg')",
        "inst-sessao-dois": "url('/assets/fundo-sessao-2-inst.svg')",
        "inst-sessao-doisv2": "url('/assets/fundo-sessao-2-instv2.svg')",
        "inst-sessao-tres": "url('/assets/fundo-sessao-3-inst.svg')",
        "inst-sessao-tresv2": "url('/assets/fundo-sessao-3-instv2.svg')",
        "inst-sessao-quatro": "url('/assets/fundo-sessao-4-inst.svg')",
        "inst-sessao-quatrov2": "url('/assets/fundo-sessao-4-instv2.svg')",
        "inst-sessao-cinco": "url('/assets/fundo-sessao-5-inst.svg')",
        "inst-sessao-cincov2": "url('/assets/fundo-sessao-5-instv2.svg')",
        "inst-sessao-seis": "url('/assets/fundo-sessao-6-inst.svg')",
        "inst-sessao-seisv2": "url('/assets/fundo-sessao-6-instv2.svg')",
        "servi-sessao-um": "url('/assets/fundo-sessao-1-servicos.svg')",
        "servi-sessao-umv2": "url('/assets/fundo-sessao-1-servicosv2.svg')",
        "servi-sessao-dois": "url('/assets/fundo-sessao-2-servicos.svg')",
        "servi-sessao-doisv2": "url('/assets/fundo-sessao-2-servicosv2.svg')",
        "servi-sessao-tres": "url('/assets/fundo-sessao-3-servicos.svg')",
        "servi-sessao-tresv2": "url('/assets/fundo-sessao-3-servicosv2.svg')",
        "legis-sessao-um": "url('/assets/fundo-sessao-1-legis.svg')",
        "contato-sessao-um": "url('/assets/fundo-sessao-1-contato.svg')",
        "fundo-page": "url('/assets/bg-page.svg')",
        "fundo-pagev2": "url('/assets/bg-pagev2-01.svg')",
        "fundo-pagev2-2": "url('/assets/bg-pagev2-02.svg')",
      },
      colors: {
        "fundo-cor": "#0B2230",
        "azul-escuro": "#09222F",
        "verde-destaque": "#D6E837",
        "verde-destaquev2": "#889D35",
        "verde-hover": "#b9c930",
        "cinza-0": "#F7F7F7",
        "cinza-5": "#EDEEF0",
        "cinza-5-96": "#EDEEF096",
        "cinza-1": "#EAEAEA",
        "cinza-2": "#DFDFDF",
        "cinza-3": "#D9D9D9",
        "cinza-3-80": "#D9D9D980",
        "cinza-4": "#C0C0C0",
      },
      fontSize: {
        "20px": "22px",
      },
      minHeight: {
        servico: "14.063rem",
      },
      minWidth: {
        servico: "16.5rem",
      },
      textColor: {
        primary: "#09222F",
        tertiary: "#D6E837",
        "tertiary-v2": "#889D35",
      },
      fontFamily: {
        mono: ["var(--font-ubuntu)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
