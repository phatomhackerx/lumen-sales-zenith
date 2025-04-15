
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { ProductCard } from "./ProductCard";
import { ProdutoMarketplace } from "@/types/marketplace";

interface FeaturedProductsProps {
  produtos: ProdutoMarketplace[];
}

export const FeaturedProducts = ({ produtos }: FeaturedProductsProps) => {
  const produtosDestaque = produtos.filter(p => p.emDestaque).slice(0, 3);

  return (
    <div className="bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-xl p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold flex items-center">
          <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
          Produtos em Destaque
        </h2>
        <Button variant="link" className="font-medium" asChild>
          <Link to="#" className="flex items-center">
            Ver todos
            <ArrowUpRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {produtosDestaque.map((produto) => (
          <ProductCard key={produto.id} produto={produto} />
        ))}
      </div>
    </div>
  );
};
