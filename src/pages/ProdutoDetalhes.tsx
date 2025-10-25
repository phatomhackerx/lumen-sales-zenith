import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  Edit,
  ShoppingCart,
  Eye,
  TrendingUp,
  Users,
  DollarSign,
  Package2,
  Link as LinkIcon,
  Share2,
  BarChart3,
  Settings,
  FileText,
  Video,
  Download,
  CheckCircle,
  Clock
} from "lucide-react";
import { ProdutoFerramentas } from "@/components/produtos/ProdutoFerramentas";
import { Progress } from "@/components/ui/progress";

export default function ProdutoDetalhes() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data
  const produto = {
    id: id,
    nome: "Curso: Marketing Digital Avançado",
    tipo: "digital" as const,
    preco: 197.00,
    promocao: 97.00,
    status: "ativo" as const,
    categorias: ["Cursos", "Marketing"],
    tags: ["marketing digital", "vendas", "conversão"],
    imagem: "/placeholder.svg",
    descricao: "Um curso completo sobre marketing digital com estratégias avançadas...",
  };

  return (
    <div className="animate-fade-in space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/produtos")}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold">{produto.nome}</h1>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant={produto.status === "ativo" ? "default" : "secondary"}>
                {produto.status === "ativo" ? "Ativo" : "Inativo"}
              </Badge>
              <Badge variant="outline">{produto.tipo === "digital" ? "Digital" : "Físico"}</Badge>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => navigate(`/produtos/${id}/editar`)}>
            <Edit className="mr-2 h-4 w-4" />
            Editar
          </Button>
          <Button onClick={() => navigate(`/produtos/${id}/checkout`)}>
            <ShoppingCart className="mr-2 h-4 w-4" />
            Checkout
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6 space-y-2">
            <div className="flex items-center justify-between">
              <Eye className="h-5 w-5 text-muted-foreground" />
              <TrendingUp className="h-4 w-4 text-green-500" />
            </div>
            <p className="text-2xl font-bold">3,547</p>
            <p className="text-sm text-muted-foreground">Visualizações</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 space-y-2">
            <div className="flex items-center justify-between">
              <DollarSign className="h-5 w-5 text-muted-foreground" />
              <TrendingUp className="h-4 w-4 text-green-500" />
            </div>
            <p className="text-2xl font-bold">R$ 15,2k</p>
            <p className="text-sm text-muted-foreground">Receita Total</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 space-y-2">
            <div className="flex items-center justify-between">
              <Users className="h-5 w-5 text-muted-foreground" />
              <TrendingUp className="h-4 w-4 text-green-500" />
            </div>
            <p className="text-2xl font-bold">157</p>
            <p className="text-sm text-muted-foreground">Vendas</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 space-y-2">
            <div className="flex items-center justify-between">
              <BarChart3 className="h-5 w-5 text-muted-foreground" />
              <TrendingUp className="h-4 w-4 text-green-500" />
            </div>
            <p className="text-2xl font-bold">4.4%</p>
            <p className="text-sm text-muted-foreground">Taxa de Conversão</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Product Info */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informações do Produto</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                <img 
                  src={produto.imagem} 
                  alt={produto.nome}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Preço</span>
                  <span className="font-medium">
                    {produto.promocao ? (
                      <div className="text-right">
                        <span className="text-sm line-through text-muted-foreground">
                          R$ {produto.preco.toFixed(2)}
                        </span>
                        <span className="ml-2 text-green-500">
                          R$ {produto.promocao.toFixed(2)}
                        </span>
                      </div>
                    ) : (
                      `R$ ${produto.preco.toFixed(2)}`
                    )}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Tipo</span>
                  <Badge variant="outline">
                    {produto.tipo === "digital" ? "Digital" : "Físico"}
                  </Badge>
                </div>

                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Status</span>
                  <Badge variant={produto.status === "ativo" ? "default" : "secondary"}>
                    {produto.status === "ativo" ? "Ativo" : "Inativo"}
                  </Badge>
                </div>
              </div>

              <div className="pt-4 border-t space-y-2">
                <p className="text-sm font-medium">Categorias</p>
                <div className="flex flex-wrap gap-2">
                  {produto.categorias.map((cat, i) => (
                    <Badge key={i} variant="secondary">{cat}</Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium">Tags</p>
                <div className="flex flex-wrap gap-2">
                  {produto.tags.map((tag, i) => (
                    <Badge key={i} variant="outline">#{tag}</Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Links Rápidos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => navigate(`/produtos/${id}/checkout`)}
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Personalizar Checkout
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => navigate(`/produtos/${id}/editar`)}
              >
                <Edit className="mr-2 h-4 w-4" />
                Editar Produto
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <LinkIcon className="mr-2 h-4 w-4" />
                Gerenciar Links
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Share2 className="mr-2 h-4 w-4" />
                Compartilhar
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Ferramentas */}
        <div className="lg:col-span-2">
          <ProdutoFerramentas produtoId={id || ""} />
        </div>
      </div>
    </div>
  );
}
