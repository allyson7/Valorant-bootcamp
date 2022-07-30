import { DefaultUi, Player, Youtube } from "@vime/react";
import {
  CaretRight,
  CrosshairSimple,
  DiscordLogo,
  ImageSquare,
  Lightning,
} from "phosphor-react";

import "@vime/core/themes/default.css";

export function Video() {
  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId="mCh9Z656YQs" />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1 ">
            <h1 className="text-2xl font-bold">
              Aula 01 - Abertura do bootcamp de Valorant
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              Vencer a rodada de pistola é super importante no VALORANT pois ela
              define qual time vai ter mais créditos no segundo round. No
              episódio de hoje, o jogador Arthur Geronimo vai dar algumas dicas
              sobre como atacar na rodada de pistola!
            </p>

            <div className="flex items-center gap-4 mt-6">
              <img
                className="h-16 w-16 rounded-full border-2 border-blue-500"
                src="https://github.com/ArrthurGeronimo.png"
                alt="Foto de perfil do professor"
              />
              <div className="leading-relaxed">
                <strong className="font-bold text-2xl block">
                  Arthur Geronimo
                </strong>
                <span className="text-gray-200 text-sm block">
                  Desenvolvedor e instrutor profissional de FPS
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="#"
              className="p-4 text-sm bg-green-500 flex items-center justify-center rounded font-bold uppercase gap-2 hover:bg-green-700 transition-colors"
            >
              <DiscordLogo />
              Comunidade do discord
            </a>

            <a
              href="#"
              className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center justify-center rounded font-bold uppercase gap-2 hover:bg-blue-500 hover:text-gray-900 transition-colors"
            >
              <Lightning />
              Acesse o desafio
            </a>
          </div>
        </div>

        <div className="gap-8 mt-20 grid grid-cols-2">
          <a
            href="#"
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 h-full p-6 flex items-center">
              <CrosshairSimple size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Miras profissionais</strong>
              <p className="text-sm text-gray-200 mt-2">
                Acesse os arquivos pra baixar as miras do bootcamp.
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>

          <a
            href="#"
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
          >
            <div className="bg-green-700 h-full p-6 flex items-center">
              <ImageSquare size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Wallpaper exclusivos</strong>
              <p className="text-sm text-gray-200 mt-2">
                Baixe wallpapers exclusivos de Valorant e personalize a sua
                máquina pra lhe dar mais motivação pra melhorar
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
