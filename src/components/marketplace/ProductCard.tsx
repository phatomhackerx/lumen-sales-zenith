
import React from "react";
import { Link } from "react-router-dom";
import { Star, Percent, TrendingUp, Clock, Tag } from "lucide-react";
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ShoppingCart } from "lucide-react";

interface ProdutoMarketplace {
  id: string;
  nome: string;
  vendedor: string;
  preco: number;
  precoOriginal?: number;
  comissao: number;
  vendas: number;
  avaliacao: number;
  categoria: string;
  imagem: string;
  emDestaque: boolean;
  melhorComissao: boolean;
  maisVendido: boolean;
  nivelDificuldade?: 'iniciante' | 'intermediario' | 'avancado';
  tempoEntrega?: string;
}

const getNivelDificuldadeLabel = (nivel?: 'iniciante' | 'intermediario' | 'avancado') => {
  switch(nivel) {
    case 'iniciante': return { label: 'Iniciante', color: 'bg-green-50 text-green-700 border-green-200' };
    case 'intermediario': return { label: 'Intermediário', color: 'bg-amber-50 text-amber-700 border-amber-200' };
    case 'avancado': return { label: 'Avançado', color: 'bg-red-50 text-red-700 border-red-200' };
    default: return { label: '', color: '' };
  }
};

export const ProductCard = ({ produto }: { produto: ProdutoMarketplace }) => {
  const nivelInfo = getNivelDificuldadeLabel(produto.nivelDificuldade);

  return (
    <Card className="overflow-hidden flex flex-col h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/40">
      <Link to={`/marketplace/${produto.id}`} className="group">
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
              <TrendingUp className="mr-1 h-3 w-3" /> Mais Vendido
            </Badge>
          )}
        </div>
        
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-lg line-clamp-1 group-hover:text-primary transition-colors">{produto.nome}</CardTitle>
              
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
      </Link>
      
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
    </Card>
  );
};
