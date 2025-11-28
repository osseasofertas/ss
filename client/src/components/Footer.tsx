import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t-4 border-yellow-400">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
            <div className="h-8 md:h-10 flex items-center">
            <img
              src="/image1.png"
              alt="gov.br"
              className="h-full w-auto"
            />
          </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Governo Federal</span>
                <span className="text-lg font-bold text-white leading-none">Prova de Vida</span>
              </div>
            </div>
            <p className="text-slate-400 max-w-md leading-relaxed">
              Este portal oferece, de forma simples e segura, o acesso ao procedimento oficial de Prova de Vida Digital. 
              O objetivo é garantir que todos os cidadãos possam realizar sua comprovação de identidade de maneira rápida, prática e protegida.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Início</a></li>
              <li><a href="#como-funciona" className="text-slate-400 hover:text-white transition-colors">Como Funciona</a></li>
              <li><a href="#faq" className="text-slate-400 hover:text-white transition-colors">Dúvidas</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Privacidade</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Atendimento</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Ouvidoria</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Suporte Técnico</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2024 Governo Federal. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <span className="text-slate-600 text-xs">Versão 2.4.1</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function FinalCTA() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div className="container-custom relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Finalize sua Prova de Vida agora.
        </h2>
        <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
          É rápido, seguro e obrigatório para a manutenção dos seus benefícios.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold text-lg h-16 px-12 rounded-lg shadow-xl transition-transform hover:scale-105"
        >
          <a href="/app/GovProvaDeVida.apk" download>
            📲 Baixar Aplicativo Oficial
          </a>
        </Button>
        <p className="mt-6 text-sm text-blue-200 opacity-80">
          Disponível apenas para Android
        </p>
      </div>
    </section>
  );
}
