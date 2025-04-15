
import React from "react";
import { Clock } from "lucide-react";
import { CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProductCardContentProps } from "@/types/marketplace";

const getNivelDificuldadeLabel = (nivel?: 'iniciante' | 'intermediario' | 'avancado') => {
  switch(nivel) {
    case 'iniciante': return { label: 'Iniciante', color: 'bg-green-50 text-green-700 border-green-200' };
    case 'intermediario': return { label: 'Intermediário', color: 'bg-amber-50 text-amber-700 border-amber-200' };
    case 'avancado': return { label: 'Avançado', color: 'bg-red-50 text-red-700 border-red-200' };
    default: return { label: '', color: '' };
  }
};

export const ProductCardContent = ({ produto }: ProductCardContentProps) => {
  const nivelInfo = getNivelDificuldadeLabel(produto.nivelDificuldade);

  return (
    <CardContent className="pb-2 flex-grow">
      <div className="flex flex-wrap gap-2 mb-3">
        <Badge variant="outline" className="bg-primary/5 hover:bg-primary/10">
          {produto.categoria}
        </Badge>
        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
          {produto.vendas}+ vendas
        </Badge>
        {produto.nivelDificuldade && (
          <Badge variant="outline" className={nivelInfo.color}>
            {nivelInfo.label}
          </Badge>
        )}
      </div>
      
      {produto.tempoEntrega && (
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="h-3.5 w-3.5 mr-1" />
          <span>Entrega em {produto.tempoEntrega}</span>
        </div>
      )}
    </CardContent>
  );
};
