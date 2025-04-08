
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  ShoppingCart, 
  Heart, 
  Share2, 
  CheckCircle, 
  Star, 
  User, 
  Calendar, 
  BarChart4, 
  Percent, 
  DollarSign,
  Copy
} from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { toast } from "@/components/ui/use-toast";

interface Avaliacao {
  id: string;
  usuario: string;
  avatar?: string;
  data: string;
  nota: number;
  comentario: string;
}

interface ProdutoDetalhado {
  id: string;
  nome: string;
  vendedor: {
    nome: string;
    avatar?: string;
    produtos: number;
    avaliacao: number;
  };
  preco: number;
  precoOriginal?: number;
  comissao: number;
  vendas: number;
  avaliacao: {
    media: number;
    total: number;
    distribuicao: {
      5: number;
      4: number;
      3: number;
      2: number;
      1: number;
    };
    avaliacoes: Avaliacao[];
  };
  categoria: string;
  tags: string[];
  descricao: string;
  imagens: string[];
  video?: string;
  conteudo: string[];
  dataPublicacao: string;
  linkAfiliado: string;
}

// Produto de exemplo detalhado
const produtoExemplo: ProdutoDetalhado = {
  id: "1",
  nome: "Curso Completo de Marketing Digital 2.0",
  vendedor: {
    nome: "Academia Digital",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww&auto=format&fit=crop&w=200&q=80",
    produtos: 15,
    avaliacao: 4.8
  },
  preco: 397,
  precoOriginal: 597,
  comissao: 40,
  vendas: 1254,
  avaliacao: {
    media: 4.8,
    total: 342,
    distribuicao: {
      5: 75,
      4: 20,
      3: 3,
      2: 1,
      1: 1
    },
    avaliacoes: [
      {
        id: "a1",
        usuario: "Ana Silva",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=200&q=80",
        data: "15/03/2023",
        nota: 5,
        comentario: "Este curso transformou minha carreira! Conteúdo excelente e prático."
      },
      {
        id: "a2",
        usuario: "Carlos Mendes",
        data: "02/04/2023",
        nota: 4,
        comentario: "Muito bom, mas poderia ter mais exemplos práticos na seção de SEO."
      },
      {
        id: "a3",
        usuario: "Juliana Costa",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=200&q=80",
        data: "28/04/2023",
        nota: 5,
        comentario: "Completo e didático! Já estou aplicando tudo no meu negócio e vendo resultados."
      }
    ]
  },
  categoria: "Marketing",
  tags: ["Marketing Digital", "SEO", "Redes Sociais", "Tráfego Pago", "Copywriting"],
  descricao: "O Curso Completo de Marketing Digital 2.0 é perfeito para quem deseja dominar as estratégias mais eficientes para vender na internet. Você aprenderá desde os fundamentos até técnicas avançadas de marketing digital, com exemplos práticos e estratégias testadas que realmente funcionam.",
  imagens: [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRpZ2l0YWwlMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=80"
  ],
  video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  conteudo: [
    "Módulo 1: Fundamentos do Marketing Digital",
    "Módulo 2: SEO e Otimização para Buscadores",
    "Módulo 3: Marketing de Conteúdo",
    "Módulo 4: Tráfego Pago e Anúncios",
    "Módulo 5: Email Marketing",
    "Módulo 6: Redes Sociais",
    "Módulo 7: Copywriting para Vendas",
    "Módulo 8: Análise de Dados e Métricas",
    "Bônus: 5 Planilhas e Templates Prontos"
  ],
  dataPublicacao: "10/01/2023",
  linkAfiliado: "https://plataforma.com/produto/1/afiliado"
};

const ProdutoDetalhe = () => {
  const { id } = useParams();
  const [imagemAtual, setImagemAtual] = useState(0);
  const [produto] = useState(produtoExemplo); // Na implementação real, buscar o produto pelo ID
  const [afiliadoAtivo, setAfiliadoAtivo] = useState(false);
  
  const copiarLinkAfiliado = () => {
    navigator.clipboard.writeText(produto.linkAfiliado);
    toast({
      title: "Link copiado!",
      description: "O link de afiliado foi copiado para a área de transferência.",
      duration: 3000,
    });
  };
  
  const tornarAfiliado = () => {
    setAfiliadoAtivo(true);
    toast({
      title: "Parabéns!",
      description: "Você agora é um afiliado deste produto e pode começar a promovê-lo.",
      duration: 3000,
    });
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/marketplace" className="hover:underline">Marketplace</Link>
        <span>/</span>
        <span>{produto.categoria}</span>
        <span>/</span>
        <span className="text-foreground">{produto.nome}</span>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Imagens e Galeria */}
        <div className="space-y-4">
          <div className="aspect-video bg-muted rounded-lg overflow-hidden">
            {produto.imagens[imagemAtual] && (
              <img 
                src={produto.imagens[imagemAtual]} 
                alt={`${produto.nome} - imagem ${imagemAtual + 1}`} 
                className="w-full h-full object-cover"
              />
            )}
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2">
            {produto.imagens.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setImagemAtual(idx)}
                className={`w-20 h-20 rounded-md overflow-hidden flex-shrink-0 border-2 transition-all ${
                  imagemAtual === idx ? 'border-primary' : 'border-transparent'
                }`}
              >
                <img 
                  src={img} 
                  alt={`Miniatura ${idx + 1}`} 
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
          
          {produto.video && (
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src={produto.video}
                title="Video do produto"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
        
        {/* Informações do Produto */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{produto.nome}</h1>
            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={produto.vendedor.avatar} />
                  <AvatarFallback>{produto.vendedor.nome.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="text-sm">{produto.vendedor.nome}</span>
              </div>
              <div className="flex items-center gap-1 text-amber-500">
                <Star className="h-4 w-4 fill-current" />
                <span className="text-sm">{produto.avaliacao.media}</span>
              </div>
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                {produto.vendas}+ vendas
              </Badge>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="text-3xl font-bold">
              R$ {produto.preco.toLocaleString('pt-BR')}
              {produto.precoOriginal && (
                <span className="text-lg text-muted-foreground line-through ml-2">
                  R$ {produto.precoOriginal.toLocaleString('pt-BR')}
                </span>
              )}
            </div>
            
            {produto.precoOriginal && (
              <Badge variant="secondary" className="bg-red-500 text-white">
                {Math.round((1 - produto.preco / produto.precoOriginal) * 100)}% OFF
              </Badge>
            )}
          </div>
          
          <div className="space-y-4">
            <Button className="w-full" size="lg">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Comprar Agora
            </Button>
            
            <div className="flex gap-2">
              <Button variant="outline" className="flex-1">
                <Heart className="mr-2 h-5 w-5" />
                Favoritar
              </Button>
              <Button variant="outline" className="flex-1">
                <Share2 className="mr-2 h-5 w-5" />
                Compartilhar
              </Button>
            </div>
          </div>
          
          <Card className="border-green-200">
            <CardHeader className="pb-2 bg-green-50 dark:bg-green-900/20">
              <CardTitle className="text-lg flex items-center text-green-700">
                <Percent className="mr-2 h-5 w-5" />
                Programa de Afiliados
              </CardTitle>
              <CardDescription>
                Ganhe {produto.comissao}% de comissão em cada venda que você gerar
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-green-600" />
                  <div>
                    <div className="font-semibold">R$ {(produto.preco * (produto.comissao/100)).toLocaleString('pt-BR')}</div>
                    <div className="text-sm text-muted-foreground">por venda</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart4 className="h-5 w-5 text-green-600" />
                  <div>
                    <div className="font-semibold">R$ {((produto.preco * (produto.comissao/100)) * produto.vendas / 30).toFixed(2).replace('.', ',')}</div>
                    <div className="text-sm text-muted-foreground">média diária</div>
                  </div>
                </div>
              </div>
              
              {afiliadoAtivo ? (
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-2 bg-green-50 dark:bg-green-900/20 rounded-md">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm font-medium">Você é um afiliado deste produto</span>
                    </div>
                  </div>
                  <div className="relative">
                    <Input value={produto.linkAfiliado} readOnly className="pr-10" />
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="absolute right-0 top-0 h-full"
                      onClick={copiarLinkAfiliado}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ) : (
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700" 
                  onClick={tornarAfiliado}
                >
                  Tornar-se Afiliado
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Tabs defaultValue="descricao" className="mt-8">
        <TabsList className="w-full md:w-auto grid grid-cols-3 md:flex">
          <TabsTrigger value="descricao">Descrição</TabsTrigger>
          <TabsTrigger value="conteudo">Conteúdo</TabsTrigger>
          <TabsTrigger value="avaliacoes">Avaliações</TabsTrigger>
        </TabsList>
        
        <TabsContent value="descricao" className="mt-6">
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-base leading-relaxed">{produto.descricao}</p>
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {produto.tags.map((tag, idx) => (
                  <Badge key={idx} variant="outline">{tag}</Badge>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="conteudo" className="mt-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">O que você vai aprender:</h3>
            <ul className="space-y-2">
              {produto.conteudo.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </TabsContent>
        
        <TabsContent value="avaliacoes" className="mt-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <div className="flex items-center justify-center flex-col">
                <div className="text-5xl font-bold">{produto.avaliacao.media}</div>
                <div className="flex items-center text-amber-500 my-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < Math.floor(produto.avaliacao.media) ? 'fill-current' : ''}`}
                    />
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">
                  {produto.avaliacao.total} avaliações
                </div>
              </div>
              
              <div className="space-y-2 mt-6">
                {[5, 4, 3, 2, 1].map((rating) => {
                  const percent = (produto.avaliacao.distribuicao[rating as keyof typeof produto.avaliacao.distribuicao] / produto.avaliacao.total) * 100;
                  return (
                    <div key={rating} className="flex items-center gap-2">
                      <div className="flex items-center text-amber-500">
                        <span className="text-sm font-medium w-3">{rating}</span>
                        <Star className="h-4 w-4 fill-current ml-1" />
                      </div>
                      <Progress value={percent} className="h-2 flex-1" />
                      <span className="text-xs text-muted-foreground w-10">
                        {percent.toFixed(0)}%
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold mb-4">Comentários dos Alunos</h3>
              <ScrollArea className="h-[380px] rounded-md">
                <div className="space-y-6 pr-4">
                  {produto.avaliacao.avaliacoes.map((avaliacao) => (
                    <div key={avaliacao.id} className="space-y-2">
                      <div className="flex justify-between">
                        <div className="flex items-center gap-2">
                          <Avatar>
                            <AvatarImage src={avaliacao.avatar} />
                            <AvatarFallback>
                              {avaliacao.usuario.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{avaliacao.usuario}</div>
                            <div className="text-sm text-muted-foreground flex items-center gap-2">
                              <Calendar className="h-3 w-3" />
                              {avaliacao.data}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center text-amber-500">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 ${i < avaliacao.nota ? 'fill-current' : ''}`}
                            />
                          ))}
                        </div>
                      </div>
                      <p>{avaliacao.comentario}</p>
                      <Separator />
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

// Este componente é necessário para o ProdutoDetalhe
const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <input
      className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input";

export default ProdutoDetalhe;
