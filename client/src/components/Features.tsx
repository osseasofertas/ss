import { CheckCircle2, Clock, Lock, Smartphone, Headphones, Building2 } from "lucide-react";
import appMockup from "@assets/generated_images/smartphone_showing_facial_recognition_app_interface.png";
import type { ReactNode } from "react";

export default function Features() {
  return (
    <>
      {/* Section 2: Why Needed */}
      <section className="py-20 bg-white" id="sobre">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
               <div className="bg-slate-100 rounded-3xl p-8 md:p-12">
                 <img 
                   src={appMockup} 
                   alt="App Interface" 
                   className="w-full max-w-md mx-auto drop-shadow-2xl transform hover:-translate-y-2 transition-transform duration-500"
                 />
               </div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Por que a Prova de Vida é necessária?
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                A Prova de Vida é um procedimento obrigatório para garantir a atualização cadastral e a continuidade dos seus direitos.
              </p>
              <div className="bg-blue-50 border-l-4 border-primary p-6 rounded-r-lg">
                <p className="text-slate-800 font-medium">
                  Agora, você pode realizar esse processo de forma <span className="text-primary font-bold">100% digital</span>, com total segurança e sem necessidade de comparecimento presencial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Benefits */}
      <section className="py-20 bg-slate-50" id="beneficios">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Benefícios Oficiais do Aplicativo
            </h2>
            <p className="text-slate-600">
              Tecnologia a serviço do cidadão para facilitar sua vida.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <BenefitCard 
              icon={<Clock className="h-8 w-8 text-blue-600" />}
              title="Rápido"
              description="Processo leva menos de 3 minutos para ser concluído."
            />
            <BenefitCard 
              icon={<Lock className="h-8 w-8 text-blue-600" />}
              title="Seguro"
              description="Sistema criptografado com validação automática de identidade."
            />
            <BenefitCard 
              icon={<Smartphone className="h-8 w-8 text-blue-600" />}
              title="Acessível"
              description="Funciona em qualquer smartphone (Android ou iOS)."
            />
            <BenefitCard 
              icon={<Headphones className="h-8 w-8 text-blue-600" />}
              title="Suporte"
              description="Ajuda passo a passo integrada ao aplicativo."
            />
            <BenefitCard 
              icon={<Building2 className="h-8 w-8 text-blue-600" />}
              title="Institucional"
              description="Plataforma com aparência oficial, totalmente confiável e auditada."
            />
            <BenefitCard 
              icon={<CheckCircle2 className="h-8 w-8 text-blue-600" />}
              title="Praticidade"
              description="Evite filas e deslocamentos desnecessários."
            />
          </div>
        </div>
      </section>
    </>
  );
}

function BenefitCard({ icon, title, description }: { icon: ReactNode, title: string, description: string }) {
  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
      <div className="mb-4 bg-blue-50 w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm md:text-base text-slate-600">{description}</p>
    </div>
  );
}
