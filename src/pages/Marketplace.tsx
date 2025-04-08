
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, Star, ShoppingCart, Percent, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

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
}

// Produtos de exemplo para o marketplace
const produtosExemplo: ProdutoMarketplace[] = [
  {
    id: "1",
    nome: "Curso Completo de Marketing Digital",
    vendedor: "Academia Digital",
    preco: 397,
    precoOriginal: 597,
    comissao: 40,
    vendas: 1254,
    avaliacao: 4.8,
    categoria: "Marketing",
    imagem: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=80",
    emDestaque: true,
    melhorComissao: true,
    maisVendido: true
  },
  {
    id: "2",
    nome: "E-book: Mindset Empreendedor",
    vendedor: "Empreenda Mais",
    preco: 47,
    comissao: 50,
    vendas: 876,
    avaliacao: 4.5,
    categoria: "Empreendedorismo",
    imagem: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGVib29rfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=80",
    emDestaque: false,
    melhorComissao: true,
    maisVendido: false
  },
  {
    id: "3",
    nome: "Mentoria de Investimentos",
    vendedor: "Investidor Expert",
    preco: 997,
    precoOriginal: 1297,
    comissao: 30,
    vendas: 453,
    avaliacao: 4.9,
    categoria: "Finanças",
    imagem: "https://images.unsplash.com/photo-1604594849809-dfedbc827105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGludmVzdGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=80",
    emDestaque: true,
    melhorComissao: false,
    maisVendido: false
  },
  {
    id: "4",
    nome: "Infoproduto: Masterclass de Design",
    vendedor: "Design Pro",
    preco: 197,
    comissao: 45,
    vendas: 732,
    avaliacao: 4.7,
    categoria: "Design",
    imagem: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhcGhpYyUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=80",
    emDestaque: false,
    melhorComissao: false,
    maisVendido: true
  },
  {
    id: "5",
    nome: "Curso de Copywriting Avançado",
    vendedor: "Escrita de Vendas",
    preco: 297,
    comissao: 35,
    vendas: 543,
    avaliacao: 4.6,
    categoria: "Marketing",
    imagem: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d3JpdGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=80",
    emDestaque: true,
    melhorComissao: false,
    maisVendido: false
  },
  {
    id: "6",
    nome: "Workshop de Lançamentos",
    vendedor: "Lançador Digital",
    preco: 497,
    precoOriginal: 697,
    comissao: 40,
    vendas: 321,
    avaliacao: 4.7,
    categoria: "Marketing",
    imagem: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhdW5jaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=80",
    emDestaque: false,
    melhorComissao: false,
    maisVendido: true
  }
];

// Categorias de exemplo
const categorias = [
  "Todas",
  "Marketing",
  "Finanças",
  "Empreendedorismo",
  "Design",
  "Tecnologia",
  "Saúde",
  "Desenvolvimento Pessoal"
];

const Marketplace = () => {
  const [busca, setBusca] = useState("");
  const [categoriaAtual, setCategoriaAtual] = useState("Todas");
  const [produtos, setProdutos] = useState(produtosExemplo);

  // Filtra produtos baseado na busca e categoria
  const produtosFiltrados = produtos.filter(produto => {
    const matchBusca = produto.nome.toLowerCase().includes(busca.toLowerCase()) || 
                       produto.vendedor.toLowerCase().includes(busca.toLowerCase());
    const matchCategoria = categoriaAtual === "Todas" || produto.categoria === categoriaAtual;
    return matchBusca && matchCategoria;
  });
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-2">Marketplace</h1>
        <p className="text-muted-foreground">
          Descubra os melhores produtos para comprar ou promover como afiliado
        </p>
      </div>
      
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:w-1/3">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar produtos..."
            className="pl-9"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>
        
        <div className="flex gap-2 overflow-x-auto scrollbar-none">
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
      
      <Tabs defaultValue="todos">
        <TabsList className="mb-4">
          <TabsTrigger value="todos">Todos os Produtos</TabsTrigger>
          <TabsTrigger value="destaque">Em Destaque</TabsTrigger>
          <TabsTrigger value="maisVendidos">Mais Vendidos</TabsTrigger>
          <TabsTrigger value="melhoresComissoes">Melhores Comissões</TabsTrigger>
        </TabsList>

        <TabsContent value="todos" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {produtosFiltrados.map((produto) => (
              <ProdutoCard key={produto.id} produto={produto} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="destaque" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {produtosFiltrados.filter(p => p.emDestaque).map((produto) => (
              <ProdutoCard key={produto.id} produto={produto} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="maisVendidos" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {produtosFiltrados.filter(p => p.maisVendido).map((produto) => (
              <ProdutoCard key={produto.id} produto={produto} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="melhoresComissoes" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {produtosFiltrados.filter(p => p.melhorComissao).map((produto) => (
              <ProdutoCard key={produto.id} produto={produto} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

// Componente de Card de Produto
const ProdutoCard = ({ produto }: { produto: ProdutoMarketplace }) => {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <Link to={`/marketplace/${produto.id}`} className="group">
        <div className="relative h-40 overflow-hidden">
          <img 
            src={produto.imagem} 
            alt={produto.nome} 
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
          {produto.precoOriginal && (
            <Badge variant="secondary" className="absolute top-2 right-2 bg-red-500 text-white">
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
              <CardTitle className="text-lg line-clamp-1">{produto.nome}</CardTitle>
              <CardDescription className="line-clamp-1">Por {produto.vendedor}</CardDescription>
            </div>
            <div className="flex items-center space-x-1 text-amber-500">
              <Star className="h-4 w-4 fill-current" />
              <span className="text-sm font-medium">{produto.avaliacao}</span>
            </div>
          </div>
        </CardHeader>
      </Link>
      
      <CardContent className="pb-2 flex-grow">
        <Badge variant="outline" className="mr-2">
          {produto.categoria}
        </Badge>
        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
          {produto.vendas}+ vendas
        </Badge>
      </CardContent>
      
      <Separator />
      
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
          <Button variant="default" size="sm" className="whitespace-nowrap" asChild>
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

export default Marketplace;
