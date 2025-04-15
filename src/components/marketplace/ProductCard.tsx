
import React from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { ProductCardHeader } from "./ProductCardHeader";
import { ProductCardContent } from "./ProductCardContent";
import { ProductCardFooter } from "./ProductCardFooter";
import { ProdutoMarketplace } from "@/types/marketplace";

export const ProductCard = ({ produto }: { produto: ProdutoMarketplace }) => {
  return (
    <Card className="overflow-hidden flex flex-col h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/40">
      <Link to={`/marketplace/${produto.id}`} className="group">
        <ProductCardHeader produto={produto} />
      </Link>
      <ProductCardContent produto={produto} />
      <ProductCardFooter produto={produto} />
    </Card>
  );
};
