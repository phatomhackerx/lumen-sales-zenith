import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowLeft,
  Save,
  Eye,
  FileImage,
  FileVideo,
  Plus,
  X,
  Tag,
  Package2,
  Settings,
  ShoppingCart,
  Link as LinkIcon,
  Sparkles
} from "lucide-react";
import { Produto } from "./Produtos";

export default function ProdutoEditor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const isEdit = id !== "novo";

  const [produto, setProduto] = useState<Partial<Produto>>({
    nome: "",
    tipo: "digital",
    preco: 0,
    estoque: Infinity,
    descricao: "",
    categorias: [],
    tags: [],
    imagens: ["/placeholder.svg"],
    videos: [],
    status: "rascunho",
  });

  const [novaCategoria, setNovaCategoria] = useState("");
  const [novaTag, setNovaTag] = useState("");
  const [novaImagem, setNovaImagem] = useState("");
  const [novoVideo, setNovoVideo] = useState("");

  useEffect(() => {
    if (isEdit) {
      // Aqui você carregaria os dados do produto
      // Por enquanto, apenas simulando
    }
  }, [id, isEdit]);

  const handleSave = () => {
    toast({
      title: isEdit ? "Produto atualizado!" : "Produto criado!",
      description: isEdit 
        ? "As alterações foram salvas com sucesso." 
        : "Seu produto foi criado com sucesso.",
    });
    navigate("/produtos");
  };

  const adicionarCategoria = () => {
    if (novaCategoria.trim() && !produto.categorias?.includes(novaCategoria)) {
      setProduto({
        ...produto,
        categorias: [...(produto.categorias || []), novaCategoria]
      });
      setNovaCategoria("");
    }
  };

  const removerCategoria = (cat: string) => {
    setProduto({
      ...produto,
      categorias: produto.categorias?.filter(c => c !== cat)
    });
  };

  const adicionarTag = () => {
    if (novaTag.trim() && !produto.tags?.includes(novaTag)) {
      setProduto({
        ...produto,
        tags: [...(produto.tags || []), novaTag]
      });
      setNovaTag("");
    }
  };

  const removerTag = (tag: string) => {
    setProduto({
      ...produto,
      tags: produto.tags?.filter(t => t !== tag)
    });
  };

  const adicionarImagem = () => {
    if (novaImagem.trim()) {
      setProduto({
        ...produto,
        imagens: [...(produto.imagens || []), novaImagem]
      });
      setNovaImagem("");
    }
  };

  const removerImagem = (index: number) => {
    setProduto({
      ...produto,
      imagens: produto.imagens?.filter((_, i) => i !== index)
    });
  };

  const adicionarVideo = () => {
    if (novoVideo.trim()) {
      setProduto({
        ...produto,
        videos: [...(produto.videos || []), novoVideo]
      });
      setNovoVideo("");
    }
  };

  const removerVideo = (index: number) => {
    setProduto({
      ...produto,
      videos: produto.videos?.filter((_, i) => i !== index)
    });
  };

  return (
    <div className="animate-fade-in pb-10">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b mb-6">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/produtos")}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold">
                {isEdit ? "Editar Produto" : "Novo Produto"}
              </h1>
              <p className="text-sm text-muted-foreground">
                {isEdit ? "Faça alterações no seu produto" : "Crie um novo produto digital ou físico"}
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => navigate(`/produtos/${id || 'preview'}`)}>
              <Eye className="mr-2 h-4 w-4" />
              Preview
            </Button>
            {isEdit && (
              <Button variant="outline" onClick={() => navigate(`/produtos/${id}/checkout`)}>
                <ShoppingCart className="mr-2 h-4 w-4" />
                Checkout
              </Button>
            )}
            <Button onClick={handleSave}>
              <Save className="mr-2 h-4 w-4" />
              Salvar
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <Tabs defaultValue="basico" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-6">
            <TabsTrigger value="basico">
              <Package2 className="mr-2 h-4 w-4" />
              Básico
            </TabsTrigger>
            <TabsTrigger value="midia">
              <FileImage className="mr-2 h-4 w-4" />
              Mídia
            </TabsTrigger>
            <TabsTrigger value="organizacao">
              <Tag className="mr-2 h-4 w-4" />
              Organização
            </TabsTrigger>
            <TabsTrigger value="precificacao">
              <Sparkles className="mr-2 h-4 w-4" />
              Precificação
            </TabsTrigger>
            <TabsTrigger value="avancado">
              <Settings className="mr-2 h-4 w-4" />
              Avançado
            </TabsTrigger>
          </TabsList>

          {/* Tab Básico */}
          <TabsContent value="basico" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Informações Básicas</CardTitle>
                <CardDescription>
                  Defina as informações principais do seu produto
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome do Produto *</Label>
                  <Input
                    id="nome"
                    placeholder="Ex: Curso de Marketing Digital Completo"
                    value={produto.nome}
                    onChange={(e) => setProduto({ ...produto, nome: e.target.value })}
                    className="text-lg"
                  />
                  <p className="text-xs text-muted-foreground">
                    Use um nome claro e descritivo que chame atenção
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tipo">Tipo de Produto *</Label>
                  <Select
                    value={produto.tipo}
                    onValueChange={(value: "digital" | "fisico") => 
                      setProduto({ 
                        ...produto, 
                        tipo: value,
                        estoque: value === "digital" ? Infinity : 0
                      })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="digital">Produto Digital</SelectItem>
                      <SelectItem value="fisico">Produto Físico</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">
                    Produtos digitais têm entrega automática e estoque ilimitado
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="descricao">Descrição Completa *</Label>
                  <Textarea
                    id="descricao"
                    placeholder="Descreva detalhadamente o que o cliente receberá..."
                    value={produto.descricao}
                    onChange={(e) => setProduto({ ...produto, descricao: e.target.value })}
                    className="min-h-[200px]"
                  />
                  <p className="text-xs text-muted-foreground">
                    Uma boa descrição aumenta suas conversões. Seja específico sobre benefícios.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="status">Status</Label>
                    <Select
                      value={produto.status}
                      onValueChange={(value: "ativo" | "inativo" | "rascunho") => 
                        setProduto({ ...produto, status: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ativo">Ativo (Visível)</SelectItem>
                        <SelectItem value="rascunho">Rascunho</SelectItem>
                        <SelectItem value="inativo">Inativo</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {produto.tipo === "fisico" && (
                    <div className="space-y-2">
                      <Label htmlFor="estoque">Estoque</Label>
                      <Input
                        id="estoque"
                        type="number"
                        min="0"
                        value={produto.estoque === Infinity ? "" : produto.estoque}
                        onChange={(e) => setProduto({ 
                          ...produto, 
                          estoque: parseInt(e.target.value) || 0 
                        })}
                      />
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab Mídia */}
          <TabsContent value="midia" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Imagens do Produto</CardTitle>
                <CardDescription>
                  Adicione imagens de alta qualidade para atrair mais clientes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="URL da imagem ou upload"
                    value={novaImagem}
                    onChange={(e) => setNovaImagem(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), adicionarImagem())}
                  />
                  <Button onClick={adicionarImagem}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {produto.imagens?.map((img, index) => (
                    <div key={index} className="relative group aspect-square border rounded-lg overflow-hidden">
                      <img
                        src={img}
                        alt={`Imagem ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      {index === 0 && (
                        <Badge className="absolute top-2 left-2">Principal</Badge>
                      )}
                      <Button
                        variant="destructive"
                        size="icon"
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => removerImagem(index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  {(!produto.imagens || produto.imagens.length === 0) && (
                    <div className="col-span-full flex flex-col items-center justify-center p-12 border-2 border-dashed rounded-lg">
                      <FileImage className="h-12 w-12 text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground">Nenhuma imagem adicionada</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Vídeos do Produto</CardTitle>
                <CardDescription>
                  Adicione vídeos demonstrativos (opcional)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="URL do vídeo (YouTube, Vimeo, etc.)"
                    value={novoVideo}
                    onChange={(e) => setNovoVideo(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), adicionarVideo())}
                  />
                  <Button onClick={adicionarVideo}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {produto.videos?.map((video, index) => (
                    <div key={index} className="relative group aspect-video border rounded-lg overflow-hidden bg-muted/50">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <FileVideo className="h-12 w-12 text-muted-foreground" />
                      </div>
                      <Button
                        variant="destructive"
                        size="icon"
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => removerVideo(index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab Organização */}
          <TabsContent value="organizacao" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Categorias</CardTitle>
                <CardDescription>
                  Organize seu produto em categorias para facilitar a busca
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Ex: Cursos, E-books, Mentoria..."
                    value={novaCategoria}
                    onChange={(e) => setNovaCategoria(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), adicionarCategoria())}
                  />
                  <Button onClick={adicionarCategoria}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {produto.categorias?.map((cat, index) => (
                    <Badge key={index} variant="secondary" className="text-sm px-3 py-1">
                      {cat}
                      <button
                        onClick={() => removerCategoria(cat)}
                        className="ml-2 hover:text-destructive"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                  {(!produto.categorias || produto.categorias.length === 0) && (
                    <p className="text-sm text-muted-foreground">Nenhuma categoria adicionada</p>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tags</CardTitle>
                <CardDescription>
                  Adicione tags para melhorar a descoberta do produto
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Ex: marketing digital, vendas, estratégia..."
                    value={novaTag}
                    onChange={(e) => setNovaTag(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), adicionarTag())}
                  />
                  <Button onClick={adicionarTag}>
                    <Tag className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {produto.tags?.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-sm px-3 py-1">
                      #{tag}
                      <button
                        onClick={() => removerTag(tag)}
                        className="ml-2 hover:text-destructive"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                  {(!produto.tags || produto.tags.length === 0) && (
                    <p className="text-sm text-muted-foreground">Nenhuma tag adicionada</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab Precificação */}
          <TabsContent value="precificacao" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Precificação</CardTitle>
                <CardDescription>
                  Configure os preços e ofertas do seu produto
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="preco">Preço *</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                        R$
                      </span>
                      <Input
                        id="preco"
                        type="number"
                        min="0"
                        step="0.01"
                        value={produto.preco}
                        onChange={(e) => setProduto({ 
                          ...produto, 
                          preco: parseFloat(e.target.value) || 0 
                        })}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="promocao">Preço Promocional</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                        R$
                      </span>
                      <Input
                        id="promocao"
                        type="number"
                        min="0"
                        step="0.01"
                        value={produto.promocao || ""}
                        onChange={(e) => setProduto({ 
                          ...produto, 
                          promocao: parseFloat(e.target.value) || undefined 
                        })}
                        className="pl-10"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Deixe vazio se não houver promoção
                    </p>
                  </div>
                </div>

                {produto.promocao && produto.promocao < (produto.preco || 0) && (
                  <Card className="bg-green-500/10 border-green-500/20">
                    <CardContent className="p-4">
                      <p className="text-sm font-medium">
                        Desconto de {Math.round((1 - produto.promocao / (produto.preco || 1)) * 100)}%
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Economia de R$ {((produto.preco || 0) - produto.promocao).toFixed(2)}
                      </p>
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab Avançado */}
          <TabsContent value="avancado" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Configurações Avançadas</CardTitle>
                <CardDescription>
                  Opções extras para personalizar seu produto
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Destaque no Marketplace</Label>
                    <p className="text-sm text-muted-foreground">
                      Exibir este produto na seção de destaques
                    </p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Permitir Afiliados</Label>
                    <p className="text-sm text-muted-foreground">
                      Permitir que afiliados promovam este produto
                    </p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Aceitar Parcelamento</Label>
                    <p className="text-sm text-muted-foreground">
                      Permitir pagamento parcelado no cartão
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Enviar Email de Boas-vindas</Label>
                    <p className="text-sm text-muted-foreground">
                      Enviar email automático após a compra
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
