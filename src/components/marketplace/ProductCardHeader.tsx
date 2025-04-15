
import React from "react";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ProductCardHeaderProps } from "@/types/marketplace";

export const ProductCardHeader = ({ produto }: ProductCardHeaderProps) => {
  return (
    <>
      <div className="relative h-48 overflow-hidden">
        <img 
          src={produto.imagem} 
          alt={produto.nome} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {produto.precoOriginal && (
          <Badge variant="secondary" className="absolute top-2 right-2 bg-red-500 text-white font-medium">
            {Math.round((1 - produto.preco / produto.precoOriginal) * 100)}% OFF
          </Badge>
        )}
        {produto.maisVendido && (
          <Badge variant="secondary" className="absolute top-2 left-2 bg-amber-500 text-white">
            <Star className="mr-1 h-3 w-3" /> Mais Vendido
          </Badge>
        )}
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg line-clamp-1 group-hover:text-primary transition-colors">
              {produto.nome}
            </CardTitle>
            
            <HoverCard>
              <HoverCardTrigger>
                <CardDescription className="line-clamp-1 flex items-center">
                  <span className="mr-1">Por</span>
                  <Avatar className="h-4 w-4 mr-1">
                    <AvatarFallback>{produto.vendedor.charAt(0)}</AvatarFallback>
                  </Avatar>
                  {produto.vendedor}
                </CardDescription>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                  <Avatar>
                    <AvatarFallback>{produto.vendedor.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">{produto.vendedor}</h4>
                    <div className="flex items-center pt-2">
                      <Star className="h-4 w-4 text-amber-500 fill-amber-500 mr-1" />
                      <span className="text-xs text-muted-foreground">
                        {produto.avaliacao} classificação média
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Tag className="h-3 w-3 text-muted-foreground mr-1" />
                      <span className="text-xs text-muted-foreground">
                        {Math.floor(Math.random() * 15) + 5} produtos no catálogo
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
          <div className="flex items-center space-x-1 text-amber-500">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-sm font-medium">{produto.avaliacao}</span>
          </div>
        </div>
      </CardHeader>
    </>
  );
};
