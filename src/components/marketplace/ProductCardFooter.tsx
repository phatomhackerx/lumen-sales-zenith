
import React from "react";
import { Link } from "react-router-dom";
import { Percent, ShoppingCart } from "lucide-react";
import { CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ProductCardFooterProps } from "@/types/marketplace";

export const ProductCardFooter = ({ produto }: ProductCardFooterProps) => {
  return (
    <>
      <Separator className="mx-6" />
      <CardFooter className="flex justify-between items-center pt-4">
        <div>
          <div className="text-lg font-bold">
            R$ {produto.preco.toLocaleString('pt-BR')}
          </div>
          {produto.precoOriginal && (
            <div className="text-sm text-muted-foreground line-through">
              R$ {produto.precoOriginal.toLocaleString('pt-BR')}
            </div>
          )}
        </div>
        
        <div className="flex flex-col items-end">
          <div className="flex items-center text-green-600 mb-2">
            <Percent className="h-4 w-4 mr-1" />
            <span className="text-sm font-semibold">{produto.comissao}% comissão</span>
          </div>
          <Button 
            variant="default" 
            size="sm" 
            className="whitespace-nowrap transition-all hover:translate-y-[-2px] bg-primary hover:bg-primary/90" 
            asChild
          >
            <Link to={`/marketplace/${produto.id}`}>
              <ShoppingCart className="h-4 w-4 mr-2" />
              Comprar
            </Link>
          </Button>
        </div>
      </CardFooter>
    </>
  );
};
