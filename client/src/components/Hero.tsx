import { Button } from "@/components/ui/button";
import { ShieldCheck, CheckCircle2, ScanFace } from "lucide-react";
import heroImage from "@assets/generated_images/senior_citizen_using_facial_recognition_app_on_smartphone.png";
import sealImage from "@assets/generated_images/digital_security_seal_shield_gold_and_blue.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50 pt-16 pb-24 lg:pt-32 lg:pb-40">
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wide border border-blue-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Serviço Oficial Digital
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              Prova de Vida Digital. <br />
              <span className="text-primary">Rápida, Segura e Autorizada.</span>
            </h1>

            <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
              Realize sua comprovação de vida em poucos minutos pelo aplicativo oficial. 
              Sem filas, sem burocracia, sem precisar sair de casa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg h-14 px-8 rounded-lg shadow-lg shadow-green-900/20 transition-transform active:scale-95">
                📲 Baixar Aplicativo Oficial
              </Button>
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
                src={heroImage} 
                alt="Cidadão realizando prova de vida pelo celular" 
                className="w-full h-auto object-cover"
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 max-w-[200px]">
                <img src={sealImage} alt="Selo" className="w-10 h-10 object-contain" />
                <div>
                  <p className="text-xs font-bold text-slate-900">Validado</p>
                  <p className="text-[10px] text-slate-500">Governo Federal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
