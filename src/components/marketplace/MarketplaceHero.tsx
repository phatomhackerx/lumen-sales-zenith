
import React from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Users } from "lucide-react";

export const MarketplaceHero = () => {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary/80 to-purple-600 py-10 px-8 text-white">
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Descubra os Melhores Produtos Digitais</h1>
        <p className="text-white/80 text-lg mb-6">
          Encontre cursos, e-books e mentorias dos principais criadores de conteúdo ou torne-se um afiliado e comece a gerar renda extra
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">
            <ShoppingCart className="mr-2 h-5 w-5" />
            Explorar Produtos
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
            <Users className="mr-2 h-5 w-5" />
            Programa de Afiliados
          </Button>
        </div>
      </div>
      
      <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-transparent to-transparent">
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -right-10 top-1/4 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-20"></div>
      </div>
    </div>
  );
};
