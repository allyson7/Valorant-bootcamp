import { useState } from "react";
import { Logo } from "../components/Logo";

export function Subscribe() {
  const [name] = useState("");

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Transforme-se num{" "}
            <strong className="text-red-valorant">Agente</strong>, do zero, com
            este <strong className="text-red-valorant">Bootcamp</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática os fundamentos e
            habilidades mais utilizadas dos pro's para atingir ranks maiores
            nesse ato.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-exl mb-6 block">
            Inscreva-se gratuitamente
          </strong>

          <form action="" className="flex flex-col gap-2 w-full">
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Seu nome completo"
            />
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="email"
              placeholder="Digite seu e-mail"
            />

            <button
              type="submit"
              className="mt-4 bg-green-500 py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      <img src="/src/assets/agents.png" className="mt-10" alt="" />
    </div>
  );
}
