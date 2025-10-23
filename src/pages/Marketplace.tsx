import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, CheckCircle2, Percent } from "lucide-react";
import { ProductCard } from "@/components/marketplace/ProductCard";
import { FeaturedProducts } from "@/components/marketplace/FeaturedProducts";
import { MarketplaceStats } from "@/components/marketplace/MarketplaceStats";
import { SearchFilters } from "@/components/marketplace/SearchFilters";
import { MarketplaceHero } from "@/components/marketplace/MarketplaceHero";
import { ProdutoMarketplace } from "@/types/marketplace";

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
    maisVendido: true,
    nivelDificuldade: 'intermediario',
    tempoEntrega: '30 dias'
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
    maisVendido: false,
    nivelDificuldade: 'iniciante',
    tempoEntrega: '7 dias'
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
    maisVendido: false,
    nivelDificuldade: 'avancado',
    tempoEntrega: '60 dias'
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
    maisVendido: true,
    nivelDificuldade: 'intermediario',
    tempoEntrega: '14 dias'
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
    maisVendido: false,
    nivelDificuldade: 'avancado',
    tempoEntrega: '21 dias'
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
    maisVendido: true,
    nivelDificuldade: 'intermediario',
    tempoEntrega: '30 dias'
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
  const [produtos] = useState(produtosExemplo);
  const [showFilters, setShowFilters] = useState(false);

  // Filtra produtos baseado na busca e categoria
  const produtosFiltrados = produtos.filter(produto => {
    const matchBusca = produto.nome.toLowerCase().includes(busca.toLowerCase()) || 
                       produto.vendedor.toLowerCase().includes(busca.toLowerCase());
    const matchCategoria = categoriaAtual === "Todas" || produto.categoria === categoriaAtual;
    return matchBusca && matchCategoria;
  });

  return (
    <div className="space-y-8">
      <MarketplaceHero />
      <MarketplaceStats />
      <FeaturedProducts produtos={produtos} />
      
      <SearchFilters
        busca={busca}
        setBusca={setBusca}
        categoriaAtual={categoriaAtual}
        setCategoriaAtual={setCategoriaAtual}
        categorias={categorias}
        showFilters={showFilters}
        setShowFilters={setShowFilters}
      />
      
      <Tabs defaultValue="todos" className="mt-8">
        <TabsList className="mb-4 w-full md:w-auto grid grid-cols-4 md:flex bg-muted/50 p-1 rounded-lg">
          <TabsTrigger value="todos" className="rounded-md">Todos os Produtos</TabsTrigger>
          <TabsTrigger value="destaque" className="flex items-center rounded-md">
            <CheckCircle2 className="mr-1 h-4 w-4" /> Em Destaque
          </TabsTrigger>
          <TabsTrigger value="maisVendidos" className="flex items-center rounded-md">
            <TrendingUp className="mr-1 h-4 w-4" /> Mais Vendidos
          </TabsTrigger>
          <TabsTrigger value="melhoresComissoes" className="flex items-center rounded-md">
            <Percent className="mr-1 h-4 w-4" /> Melhores Comissões
          </TabsTrigger>
        </TabsList>

        <TabsContent value="todos" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {produtosFiltrados.map((produto) => (
              <ProductCard key={produto.id} produto={produto} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="destaque" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {produtosFiltrados.filter(p => p.emDestaque).map((produto) => (
              <ProductCard key={produto.id} produto={produto} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="maisVendidos" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {produtosFiltrados.filter(p => p.maisVendido).map((produto) => (
              <ProductCard key={produto.id} produto={produto} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="melhoresComissoes" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {produtosFiltrados.filter(p => p.melhorComissao).map((produto) => (
              <ProductCard key={produto.id} produto={produto} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Marketplace;
