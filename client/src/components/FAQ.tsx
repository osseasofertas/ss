import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container-custom max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-slate-600">
            Tire suas dúvidas sobre o processo de Prova de Vida Digital.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-b border-slate-200">
            <AccordionTrigger className="text-lg font-semibold text-slate-800 hover:text-primary hover:no-underline py-6">
              É seguro fazer a prova de vida digital?
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6">
              Sim. O sistema utiliza tecnologia de ponta com criptografia avançada e reconhecimento facial com validação segura (liveness detection) para garantir que é você mesmo realizando o processo.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-b border-slate-200">
            <AccordionTrigger className="text-lg font-semibold text-slate-800 hover:text-primary hover:no-underline py-6">
              Posso fazer de qualquer lugar?
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6">
              Sim. Basta estar com o celular (smartphone) e conexão à internet (Wi-Fi ou dados móveis). Você pode realizar o procedimento de casa ou de qualquer outro local.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-b border-slate-200">
            <AccordionTrigger className="text-lg font-semibold text-slate-800 hover:text-primary hover:no-underline py-6">
              Demora quanto tempo?
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6">
              O processo é muito rápido. Geralmente, leva menos de 3 minutos para baixar o aplicativo, fazer o login e realizar o reconhecimento facial.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
