import { Button } from "@/components/ui/button";
import { ShieldCheck, CheckCircle2, ScanFace } from "lucide-react";
import { useEffect } from "react";
import heroImage from "@assets/generated_images/senior_citizen_using_facial_recognition_app_on_smartphone.png";
import sealImage from "@assets/generated_images/digital_security_seal_shield_gold_and_blue.png";

const SmartPlayer: any = "vturb-smartplayer";

function VSLBox() {
  useEffect(() => {
    const src =
      "https://scripts.converteai.net/caa6e073-04d6-4c37-83ad-a1ca076f9159/players/692d4694d69941550924da09/v4/player.js";

    if (document.querySelector(`script[src="${src}"]`)) {
      return;
    }

    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    document.head.appendChild(s);
  }, []);

  return (
    <div className="bg-white border-l-4 border-blue-700 rounded-xl shadow-sm p-4 sm:p-5">
      <p className="text-[11px] sm:text-xs font-semibold text-slate-500 uppercase tracking-[0.16em] mb-2">
        Comunicado oficial em vídeo
      </p>
      <div className="w-full max-w-xs sm:max-w-sm mx-auto">
        <SmartPlayer
          id="vid-692d4694d69941550924da09"
          style={{
            display: "block",
            margin: "0 auto",
            width: "100%",
            maxWidth: "400px",
          }}
        />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50 pt-10 pb-16 lg:pt-32 lg:pb-40">
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 lg:space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <VSLBox />

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              Prova de Vida Digital. <br />
              <span className="text-primary">Rápida, Segura e Autorizada.</span>
            </h1>

            <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
              Realize sua comprovação de vida em poucos minutos pelo aplicativo oficial. 
              Sem filas, sem burocracia, sem precisar sair de casa.
            </p>

            <div className="flex flex-col sm:flex-row gap-2">
              <Button
                asChild
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg h-14 px-8 rounded-lg shadow-lg shadow-green-900/20 transition-transform active:scale-95"
              >
                <a href="https://w.app/06xjjw" target="_blank" rel="noopener noreferrer">
                  📲 Obter app para download
                </a>
              </Button>
              <p className="text-xs text-slate-500">
                Atendimento via WhatsApp
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <p className="text-xs text-slate-500 mb-3 uppercase font-semibold tracking-wider">Garantia de Segurança</p>
              <div className="flex flex-wrap gap-4 md:gap-8">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <ShieldCheck className="h-5 w-5 text-blue-600" />
                  Selo de Segurança Digital
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  Validação Oficial
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <ScanFace className="h-5 w-5 text-blue-600" />
                  Reconhecimento Facial
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-20 blur-3xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="/image2.jpg" 
                alt="Cidadão realizando prova de vida pelo celular" 
                className="w-full h-auto object-cover"
              />
              
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
