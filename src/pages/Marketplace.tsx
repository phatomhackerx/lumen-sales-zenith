
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Search, 
  Filter, 
  Star, 
  ShoppingCart, 
  Percent, 
  TrendingUp, 
  ArrowUpRight,
  Tag,
  ChevronDown,
  SlidersHorizontal,
  CheckCircle2,
  Clock,
  Users,
  DollarSign
} from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
  
  // Produtos em destaque
  const produtosDestaque = produtos.filter(p => p.emDestaque).slice(0, 3);
  
  return (
    <div className="space-y-8">
      {/* Hero Section */}
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
      
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-border/40 bg-gradient-to-br from-background to-muted/50">
          <CardContent className="flex items-center p-6">
            <div className="mr-4 bg-primary/10 p-3 rounded-full">
              <ShoppingCart className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Produtos Disponíveis</p>
              <p className="text-2xl font-bold">1,250+</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-border/40 bg-gradient-to-br from-background to-muted/50">
          <CardContent className="flex items-center p-6">
            <div className="mr-4 bg-amber-500/10 p-3 rounded-full">
              <Users className="h-6 w-6 text-amber-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Afiliados Ativos</p>
              <p className="text-2xl font-bold">750+</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-border/40 bg-gradient-to-br from-background to-muted/50">
          <CardContent className="flex items-center p-6">
            <div className="mr-4 bg-green-500/10 p-3 rounded-full">
              <DollarSign className="h-6 w-6 text-green-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Comissões Pagas</p>
              <p className="text-2xl font-bold">R$ 1.5M+</p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Featured Products Section */}
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
            <Link 
              key={produto.id} 
              to={`/marketplace/${produto.id}`}
              className="group relative overflow-hidden rounded-lg bg-card shadow-sm transition-all hover:shadow-md hover:-translate-y-1 duration-300"
            >
              <div className="aspect-[16/9] relative overflow-hidden">
                <img 
                  src={produto.imagem} 
                  alt={produto.nome} 
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-semibold text-white mb-1 line-clamp-1">{produto.nome}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-white text-sm flex items-center">
                      <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400 mr-1" />
                      {produto.avaliacao}
                    </span>
                    <span className="font-bold text-white">
                      R$ {produto.preco.toLocaleString('pt-BR')}
                    </span>
                  </div>
                </div>
                {produto.maisVendido && (
                  <Badge variant="secondary" className="absolute top-2 left-2 bg-amber-500 text-white">
                    <TrendingUp className="mr-1 h-3 w-3" /> Mais Vendido
                  </Badge>
                )}
                {produto.melhorComissao && (
                  <Badge variant="secondary" className="absolute top-2 right-2 bg-green-500 text-white">
                    <Percent className="mr-1 h-3 w-3" /> {produto.comissao}% Comissão
                  </Badge>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Search and Filters */}
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

// Componente de Card de Produto Refinado
const ProdutoCard = ({ produto }: { produto: ProdutoMarketplace }) => {
  const getNivelDificuldadeLabel = (nivel?: 'iniciante' | 'intermediario' | 'avancado') => {
    switch(nivel) {
      case 'iniciante': return { label: 'Iniciante', color: 'bg-green-50 text-green-700 border-green-200' };
      case 'intermediario': return { label: 'Intermediário', color: 'bg-amber-50 text-amber-700 border-amber-200' };
      case 'avancado': return { label: 'Avançado', color: 'bg-red-50 text-red-700 border-red-200' };
      default: return { label: '', color: '' };
    }
  };

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

export default Marketplace;
