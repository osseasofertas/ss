import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const NavItems = () => (
    <>
      <a href="#como-funciona" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
        Como Funciona
      </a>
      <a href="#beneficios" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
        Benefícios
      </a>
      <a href="#faq" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
        Dúvidas Frequentes
      </a>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container-custom flex h-16 md:h-20 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 md:h-10 flex items-center">
            <img
              src="/image1.png"
              alt="gov.br"
              className="h-full w-auto"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-wider">Governo Federal</span>
            <span className="text-base md:text-lg font-bold text-primary leading-none">Prova de Vida</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavItems />
          <Button className="bg-primary hover:bg-blue-800 text-white font-semibold rounded-full px-6">
            Baixar Aplicativo
          </Button>
        </div>    
      </div>
    </nav>
  );
}
