import { useState, useEffect } from "react";
import { FileImage, FileVideo, PackageCheck, Package2, Plus, X, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Produto } from "@/pages/Produtos";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const produtoSchema = z.object({
  nome: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
  tipo: z.enum(["digital", "fisico"]),
  preco: z.number().min(0, "O preço não pode ser negativo"),
  promocao: z.number().min(0, "O preço promocional não pode ser negativo").optional(),
  estoque: z.number().min(0, "O estoque não pode ser negativo"),
  descricao: z.string().min(10, "A descrição deve ter pelo menos 10 caracteres"),
  categorias: z.array(z.string()),
  tags: z.array(z.string()),
  imagens: z.array(z.string()),
  videos: z.array(z.string()).optional(),
  status: z.enum(["ativo", "inativo", "rascunho"]),
});

type ProdutoForm = z.infer<typeof produtoSchema>;

interface AddEditProdutoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  produto: Produto | null;
  onSave: (produto: Produto) => void;
}

export const AddEditProdutoDialog = ({
  open,
  onOpenChange,
  produto,
  onSave,
}: AddEditProdutoDialogProps) => {
  const [novaCategoria, setNovaCategoria] = useState("");
  const [novaTag, setNovaTag] = useState("");
  
  const form = useForm<ProdutoForm>({
    resolver: zodResolver(produtoSchema),
    defaultValues: {
      nome: "",
      tipo: "digital",
      preco: 0,
      estoque: produto?.tipo === "digital" ? Infinity : 0,
      descricao: "",
      categorias: [],
      tags: [],
      imagens: [],
      videos: [],
      status: "rascunho",
    },
  });

  useEffect(() => {
    if (produto) {
      form.reset({
        nome: produto.nome,
        tipo: produto.tipo,
        preco: produto.preco,
        promocao: produto.promocao,
        estoque: produto.estoque,
        descricao: produto.descricao,
        categorias: produto.categorias,
        tags: produto.tags,
        imagens: produto.imagens,
        videos: produto.videos || [],
        status: produto.status,
      });
    } else {
      form.reset({
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
    }
  }, [produto, form]);

  const onSubmit = (data: ProdutoForm) => {
    const produtoCompleto: Produto = {
      id: produto?.id || Date.now().toString(),
      nome: data.nome,
      tipo: data.tipo,
      preco: data.preco,
      promocao: data.promocao,
      estoque: data.estoque,
      descricao: data.descricao,
      categorias: data.categorias,
      tags: data.tags,
      imagens: data.imagens,
      videos: data.videos,
      dataAdicionado: produto?.dataAdicionado || new Date(),
      status: data.status,
    };
    
    onSave(produtoCompleto);
  };

  const adicionarCategoria = () => {
    if (novaCategoria.trim() !== "") {
      const categorias = form.getValues("categorias");
      if (!categorias.includes(novaCategoria)) {
        form.setValue("categorias", [...categorias, novaCategoria]);
      }
      setNovaCategoria("");
    }
  };

  const removerCategoria = (categoria: string) => {
    const categorias = form.getValues("categorias");
    form.setValue(
      "categorias", 
      categorias.filter(c => c !== categoria)
    );
  };

  const adicionarTag = () => {
    if (novaTag.trim() !== "") {
      const tags = form.getValues("tags");
      if (!tags.includes(novaTag)) {
        form.setValue("tags", [...tags, novaTag]);
      }
      setNovaTag("");
    }
  };

  const removerTag = (tag: string) => {
    const tags = form.getValues("tags");
    form.setValue(
      "tags", 
      tags.filter(t => t !== tag)
    );
  };

  const tipoProdutoMudou = (tipo: "digital" | "fisico") => {
    if (tipo === "digital") {
      form.setValue("estoque", Infinity);
    } else if (form.getValues("estoque") === Infinity) {
      form.setValue("estoque", 0);
    }
  };

  const adicionarImagem = () => {
    const imagens = form.getValues("imagens");
    form.setValue("imagens", [...imagens, "/placeholder.svg"]);
  };

  const removerImagem = (index: number) => {
    const imagens = form.getValues("imagens");
    form.setValue(
      "imagens", 
      imagens.filter((_, i) => i !== index)
    );
  };

  const adicionarVideo = () => {
    const videos = form.getValues("videos") || [];
    form.setValue("videos", [...videos, "/placeholder.svg"]);
  };

  const removerVideo = (index: number) => {
    const videos = form.getValues("videos") || [];
    form.setValue(
      "videos", 
      videos.filter((_, i) => i !== index)
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {produto ? "Editar produto" : "Adicionar novo produto"}
          </DialogTitle>
          <DialogDescription>
            Preencha os detalhes do produto. Os campos marcados com * são obrigatórios.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <Tabs defaultValue="informacoes" className="w-full">
              <TabsList className="grid grid-cols-4">
                <TabsTrigger value="informacoes">Informações</TabsTrigger>
                <TabsTrigger value="categorias">Categorias e Tags</TabsTrigger>
                <TabsTrigger value="midia">Imagens e Vídeos</TabsTrigger>
                <TabsTrigger value="precificacao">Precificação</TabsTrigger>
              </TabsList>

              <TabsContent value="informacoes" className="space-y-4 pt-4">
                <FormField
                  control={form.control}
                  name="nome"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome do produto *</FormLabel>
                      <FormControl>
                        <Input placeholder="Nome do produto" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="tipo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tipo de produto *</FormLabel>
                      <Select 
                        onValueChange={(value: "digital" | "fisico") => {
                          field.onChange(value);
                          tipoProdutoMudou(value);
                        }}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o tipo" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="digital">Produto Digital</SelectItem>
                          <SelectItem value="fisico">Produto Físico</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        Produtos digitais têm entrega automática e estoque ilimitado.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="descricao"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Descrição *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Descrição detalhada do produto" 
                          className="min-h-32" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status do produto</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="ativo">Ativo</SelectItem>
                          <SelectItem value="inativo">Inativo</SelectItem>
                          <SelectItem value="rascunho">Rascunho</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        Apenas produtos ativos são exibidos na loja.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TabsContent>

              <TabsContent value="categorias" className="space-y-4 pt-4">
                <div className="space-y-4">
                  <div>
                    <FormLabel>Categorias</FormLabel>
                    <div className="flex mt-2 gap-2">
                      <Input
                        placeholder="Nova categoria"
                        value={novaCategoria}
                        onChange={(e) => setNovaCategoria(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            adicionarCategoria();
                          }
                        }}
                      />
                      <Button type="button" onClick={adicionarCategoria}>
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {form.watch("categorias").map((categoria, index) => (
                        <Badge key={index} variant="secondary" className="flex gap-1 items-center">
                          {categoria}
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="h-4 w-4 p-0"
                            onClick={() => removerCategoria(categoria)}
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </Badge>
                      ))}
                      {form.watch("categorias").length === 0 && (
                        <p className="text-sm text-muted-foreground">Nenhuma categoria adicionada</p>
                      )}
                    </div>
                  </div>

                  <div className="mt-6">
                    <FormLabel>Tags</FormLabel>
                    <div className="flex mt-2 gap-2">
                      <Input
                        placeholder="Nova tag"
                        value={novaTag}
                        onChange={(e) => setNovaTag(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            adicionarTag();
                          }
                        }}
                      />
                      <Button type="button" onClick={adicionarTag}>
                        <Tag className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {form.watch("tags").map((tag, index) => (
                        <Badge key={index} variant="outline" className="flex gap-1 items-center">
                          #{tag}
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="h-4 w-4 p-0"
                            onClick={() => removerTag(tag)}
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </Badge>
                      ))}
                      {form.watch("tags").length === 0 && (
                        <p className="text-sm text-muted-foreground">Nenhuma tag adicionada</p>
                      )}
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="midia" className="space-y-4 pt-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <FormLabel>Imagens</FormLabel>
                    <Button type="button" variant="outline" size="sm" onClick={adicionarImagem}>
                      <Plus className="h-4 w-4 mr-2" />
                      Adicionar imagem
                    </Button>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                    {form.watch("imagens").map((imagem, index) => (
                      <div key={index} className="relative border rounded-lg overflow-hidden aspect-square">
                        <img 
                          src={imagem} 
                          alt={`Imagem ${index + 1}`} 
                          className="w-full h-full object-cover" 
                        />
                        <Button
                          type="button"
                          variant="destructive"
                          size="icon"
                          className="absolute top-2 right-2 h-7 w-7"
                          onClick={() => removerImagem(index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                        {index === 0 && (
                          <Badge className="absolute bottom-2 left-2">Principal</Badge>
                        )}
                      </div>
                    ))}
                    {form.watch("imagens").length === 0 && (
                      <div className="flex flex-col items-center justify-center border rounded-lg p-6 col-span-full aspect-video">
                        <FileImage className="h-10 w-10 text-muted-foreground mb-2" />
                        <p className="text-sm text-muted-foreground">Nenhuma imagem adicionada</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex items-center justify-between mb-2">
                    <FormLabel>Vídeos</FormLabel>
                    <Button type="button" variant="outline" size="sm" onClick={adicionarVideo}>
                      <Plus className="h-4 w-4 mr-2" />
                      Adicionar vídeo
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {(form.watch("videos") || []).map((video, index) => (
                      <div key={index} className="relative border rounded-lg overflow-hidden aspect-video">
                        <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                          <FileVideo className="h-10 w-10 text-foreground/70" />
                        </div>
                        <Button
                          type="button"
                          variant="destructive"
                          size="icon"
                          className="absolute top-2 right-2 h-7 w-7"
                          onClick={() => removerVideo(index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                    {(!form.watch("videos") || form.watch("videos").length === 0) && (
                      <div className="flex flex-col items-center justify-center border rounded-lg p-6 col-span-full aspect-video">
                        <FileVideo className="h-10 w-10 text-muted-foreground mb-2" />
                        <p className="text-sm text-muted-foreground">Nenhum vídeo adicionado</p>
                      </div>
                    )}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="precificacao" className="space-y-4 pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="preco"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preço *</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="0,00"
                            {...field}
                            onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="promocao"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preço promocional</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="0,00"
                            {...field}
                            value={field.value ?? ""}
                            onChange={(e) => {
                              const value = e.target.value === "" ? undefined : parseFloat(e.target.value) || 0;
                              field.onChange(value);
                            }}
                          />
                        </FormControl>
                        <FormDescription>
                          Deixe em branco para não aplicar promoção.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {form.watch("tipo") === "fisico" && (
                  <FormField
                    control={form.control}
                    name="estoque"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Estoque *</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="0"
                            {...field}
                            onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
              </TabsContent>
            </Tabs>

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
              >
                Cancelar
              </Button>
              <Button type="submit">Salvar</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
