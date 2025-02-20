"use client";

import { useEffect } from "react";
import { perguntas } from "./componentes/Perguntas";
import Image from "next/image";

export default function Home() {
  const nivel = 1;
  const verificaQuestao = (verifica) => {
    alert(verifica);
  };
  const verificaNivel = () => {
    console.log(nivel)
  }
  useEffect(() => {
    verificaNivel();
  })

  return (
    <div className="p-2">
      <h2>Jogo Lagoa dos Patos MG</h2>
      <div className="flex gap-1 h-24">
        <div className="w-1/3 rounded-md relative h-14 ">
          <div className="w-full bg-slate-500 h-6 rounded-md mt-6">

          </div>
          <div className="flex absolute top-0 left-0 gap-4">
            <div>
              <Image src={'/game/config.png'} width={50} height={50} alt="config" />
            </div>
            <div>
              <Image src={'/game/coracao.webp'} width={50} height={50} alt="config" />
            </div>
            <div>
              <Image src={'/game/coracao.webp'} width={50} height={50} alt="config" />
            </div>
            <div>
              <Image src={'/game/coracao.webp'} width={50} height={50} alt="config" />
            </div>
          </div>
        </div>
        <div className="w-1/3 relative">
          <div className="w-full">
          <Image className="w-full rotate-180 daPlaca left-0 absolute" src={'/game/placa.jpg'} width={50} height={50} alt="config" />
          </div>
        </div>
        <div className="w-1/3 rounded-md relative h-14 ">
          <div className="w-full bg-slate-500 h-6 rounded-md mt-6">

          </div>
          <div className="flex absolute top-0 left-0 gap-4">
            <div>
              <Image src={'/game/config.png'} width={50} height={50} alt="config" />
            </div>
            <div>
              <Image src={'/game/coracao.webp'} width={50} height={50} alt="config" />
            </div>
            <div>
              <Image src={'/game/coracao.webp'} width={50} height={50} alt="config" />
            </div>
            <div>
              <Image src={'/game/coracao.webp'} width={50} height={50} alt="config" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-10">
        <div className="w-1/2">
          <div>{perguntas[0].titulo}</div>
          <div>

            {perguntas[0].questoes.map(
              (e, index) => (
                <div key={index} class=" flex  items-center justify-center w-full">
                  <button type="button" class="transtion group flex h-20 w-full items-center justify-center rounded-full bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 p-[1.5px] text-white duration-300 hover:bg-gradient-to-l hover:shadow-2xl hover:shadow-purple-600/30">
                    <div class="flex h-full w-full items-center p-2 justify-center rounded-full bg-gray-900 transition duration-300 ease-in-out group-hover:bg-gradient-to-br group-hover:from-gray-700 group-hover:to-gray-900 group-hover:transition group-hover:duration-300 group-hover:ease-in-out" onClick={() => verificaQuestao(e.questao[1])}> {e.questao}</div>
                  </button>
                </div>
              )
            )}
          </div>
          <div className="flex w-[200px] m-auto">
            <div>
              <p>Sim</p>
            </div>
            <div>
              <p>Não</p>
            </div>
          </div>
        </div>
        <div className="fundoTeste w-1/2">
          <Image src={'/icone-personagem.png'} width={100} height={150} alt="ol" />
        </div>
      </div>
    </div>
  );
}
