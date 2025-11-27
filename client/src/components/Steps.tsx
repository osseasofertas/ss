import { Smartphone, UserCheck, ScanFace, CheckCircle } from "lucide-react";
import type { ReactNode } from "react";

export default function Steps() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50" id="como-funciona">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Passo a Passo Simples</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Como funciona a Prova de Vida Digital
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 -z-10"></div>

          <StepCard 
            number="1"
            icon={<Smartphone className="h-6 w-6 text-white" />}
            title="Baixe o aplicativo"
            description="Instale o aplicativo oficial do Governo em seu celular."
          />
          <StepCard 
            number="2"
            icon={<UserCheck className="h-6 w-6 text-white" />}
            title="Faça login"
            description="Entre com seus dados de cadastro oficial (CPF e senha)."
          />
          <StepCard 
            number="3"
            icon={<ScanFace className="h-6 w-6 text-white" />}
            title="Reconhecimento"
            description="Siga as instruções da tela para a leitura facial."
          />
          <StepCard 
            number="4"
            icon={<CheckCircle className="h-6 w-6 text-white" />}
            title="Tudo Pronto"
            description="Sua prova de vida será validada automaticamente."
          />
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-slate-100 max-w-4xl mx-auto">
          <h3 className="text-lg font-bold text-slate-900 mb-6 text-center">Benefícios diretos:</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            <BenefitCheck text="Sem deslocamento" />
            <BenefitCheck text="Validação imediata" />
            <BenefitCheck text="24 horas por dia" />
            <BenefitCheck text="Tecnologia segura" />
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({ number, icon, title, description }: { number: string, icon: ReactNode, title: string, description: string }) {
  return (
    <div className="relative flex flex-col items-center text-center group">
      <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 z-10">
        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-inner">
          {icon}
        </div>
        <div className="absolute top-0 right-0 bg-yellow-400 text-blue-900 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow">
          {number}
        </div>
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function BenefitCheck({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 justify-center p-3 rounded-lg bg-green-50 border border-green-100">
      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
      <span className="text-sm font-medium text-green-800">{text}</span>
    </div>
  );
}
