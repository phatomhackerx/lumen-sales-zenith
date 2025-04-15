
import React from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchFiltersProps {
  busca: string;
  setBusca: (busca: string) => void;
  categoriaAtual: string;
  setCategoriaAtual: (categoria: string) => void;
  categorias: string[];
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
}

export const SearchFilters = ({
  busca,
  setBusca,
  categoriaAtual,
  setCategoriaAtual,
  categorias,
  showFilters,
  setShowFilters,
}: SearchFiltersProps) => {
  return (
    <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm py-4 border-b">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar produtos..."
              className="pl-10 w-full border-primary/20 focus:border-primary"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>
          <Button 
            variant="outline" 
            size="icon" 
            className="md:hidden"
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal className="h-4 w-4" />
          </Button>
        </div>
        
        <div className={`${showFilters ? 'flex' : 'hidden'} md:flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none`}>
          {categorias.map((cat) => (
            <Button
              key={cat}
              variant={categoriaAtual === cat ? "default" : "outline"}
              size="sm"
              onClick={() => setCategoriaAtual(cat)}
              className="whitespace-nowrap"
            >
              {cat}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
