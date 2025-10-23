
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Package2, Plus, Search, Filter, Tag, Edit, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { AddEditProdutoDialog } from "@/components/produtos/AddEditProdutoDialog";

// Tipos para os produtos
export interface Produto {
  id: string;
  nome: string;
  tipo: "digital" | "fisico";
  preco: number;
  promocao?: number;
  estoque: number;
  descricao: string;
  categorias: string[];
  tags: string[];
  imagens: string[];
  videos?: string[];
  dataAdicionado: Date;
  status: "ativo" | "inativo" | "rascunho";
}

// Dados mockados para teste
const produtosMock: Produto[] = [
  {
    id: "1",
    nome: "E-book: Marketing Digital Avançado",
    tipo: "digital",
    preco: 97.00,
    promocao: 79.90,
    estoque: Infinity,
    descricao: "Um guia completo sobre estratégias avançadas de marketing digital.",
    categorias: ["E-books", "Marketing"],
    tags: ["marketing digital", "vendas online"],
    imagens: ["/placeholder.svg"],
    dataAdicionado: new Date("2024-04-01"),
    status: "ativo"
  },
  {
    id: "2",
    nome: "Curso: Vendas High Ticket",
    tipo: "digital",
    preco: 1997.00,
    estoque: Infinity,
    descricao: "Aprenda a vender produtos e serviços de alto valor.",
    categorias: ["Cursos", "Vendas"],
    tags: ["high ticket", "vendas", "conversão"],
    imagens: ["/placeholder.svg"],
    videos: ["/placeholder.svg"],
    dataAdicionado: new Date("2024-03-15"),
    status: "ativo"
  },
  {
    id: "3",
    nome: "Caneca Personalizada",
    tipo: "fisico",
    preco: 49.90,
    estoque: 25,
    descricao: "Caneca personalizada com a sua marca.",
    categorias: ["Produtos Físicos", "Merchandising"],
    tags: ["caneca", "personalizado"],
    imagens: ["/placeholder.svg"],
    dataAdicionado: new Date("2024-02-20"),
    status: "ativo"
  },
  {
    id: "4",
    nome: "Template de Landing Page",
    tipo: "digital",
    preco: 147.00,
    promocao: 97.00,
    estoque: Infinity,
    descricao: "Template otimizado para alta conversão.",
    categorias: ["Templates", "Design"],
    tags: ["landing page", "conversão", "design"],
    imagens: ["/placeholder.svg"],
    dataAdicionado: new Date("2024-01-10"),
    status: "inativo"
  }
];

const Produtos = () => {
  const { toast } = useToast();
  const [produtos, setProdutos] = useState<Produto[]>(produtosMock);
  const [searchTerm, setSearchTerm] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentProduto, setCurrentProduto] = useState<Produto | null>(null);

  // Filtrar produtos pelo termo de busca
  const produtosFiltrados = produtos.filter(produto => 
    produto.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    produto.categorias.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase())) ||
    produto.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleAddProduto = () => {
    setCurrentProduto(null);
    setDialogOpen(true);
  };

  const handleEditProduto = (produto: Produto) => {
    setCurrentProduto(produto);
    setDialogOpen(true);
  };

  const handleDeleteProduto = (id: string) => {
    setProdutos(produtos.filter(p => p.id !== id));
    toast({
      title: "Produto excluído",
      description: "O produto foi excluído com sucesso.",
    });
  };

  const handleSaveProduto = (produto: Produto) => {
    if (currentProduto) {
      // Editando produto existente
      setProdutos(produtos.map(p => p.id === produto.id ? produto : p));
      toast({
        title: "Produto atualizado",
        description: "O produto foi atualizado com sucesso.",
      });
    } else {
      // Novo produto
      const novoProduto = {
        ...produto,
        id: Date.now().toString(),
        dataAdicionado: new Date(),
      };
      setProdutos([novoProduto, ...produtos]);
      toast({
        title: "Produto adicionado",
        description: "O produto foi adicionado com sucesso.",
      });
    }
    setDialogOpen(false);
  };

  const formatarPreco = (preco: number) => {
    return preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  return (
    <div className="animate-fade-in space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold">Produtos</h1>
        <Button onClick={handleAddProduto}>
          <Plus className="mr-2 h-4 w-4" />
          Adicionar Produto
        </Button>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div className="relative w-full sm:max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar produtos, categorias ou tags..."
                className="pl-10 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" size="icon" title="Filtros avançados">
              <Filter className="h-4 w-4" />
            </Button>
          </div>

          <div className="overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Produto</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Categorias</TableHead>
                  <TableHead className="text-right">Preço</TableHead>
                  <TableHead className="text-center">Estoque</TableHead>
                  <TableHead className="text-center">Status</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {produtosFiltrados.length > 0 ? (
                  produtosFiltrados.map((produto) => (
                    <TableRow key={produto.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 rounded bg-muted/50 flex items-center justify-center">
                            {produto.imagens.length > 0 ? (
                              <img 
                                src={produto.imagens[0]} 
                                alt={produto.nome} 
                                className="w-full h-full object-cover rounded"
                              />
                            ) : (
                              <Package2 className="h-5 w-5 text-muted-foreground" />
                            )}
                          </div>
                          <div>
                            <div>{produto.nome}</div>
                            <div className="text-xs text-muted-foreground mt-1">
                              {produto.tags.map((tag, index) => (
                                <span key={index} className="mr-1">
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={produto.tipo === "digital" ? "outline" : "secondary"}>
                          {produto.tipo === "digital" ? "Digital" : "Físico"}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {produto.categorias.map((cat, index) => (
                          <Badge key={index} variant="outline" className="mr-1">
                            {cat}
                          </Badge>
                        ))}
                      </TableCell>
                      <TableCell className="text-right">
                        {produto.promocao ? (
                          <div>
                            <span className="text-sm line-through text-muted-foreground">
                              {formatarPreco(produto.preco)}
                            </span>
                            <span className="ml-2 font-medium text-green-500">
                              {formatarPreco(produto.promocao)}
                            </span>
                          </div>
                        ) : (
                          <span>{formatarPreco(produto.preco)}</span>
                        )}
                      </TableCell>
                      <TableCell className="text-center">
                        {produto.estoque === Infinity ? (
                          <span className="text-muted-foreground">∞</span>
                        ) : (
                          <span className={produto.estoque < 10 ? "text-red-500" : ""}>
                            {produto.estoque}
                          </span>
                        )}
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge 
                          variant={produto.status === "ativo" ? "default" : 
                                 produto.status === "rascunho" ? "outline" : "secondary"}
                        >
                          {produto.status === "ativo" ? "Ativo" : 
                           produto.status === "rascunho" ? "Rascunho" : "Inativo"}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleEditProduto(produto)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDeleteProduto(produto.id)}
                          >
                            <Trash className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-10">
                      <div className="flex flex-col items-center">
                        <Package2 className="h-10 w-10 text-muted-foreground mb-2" />
                        <p className="text-muted-foreground">Nenhum produto encontrado</p>
                        <Button 
                          variant="link" 
                          onClick={handleAddProduto} 
                          className="mt-2"
                        >
                          Adicionar um produto
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <AddEditProdutoDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        produto={currentProduto}
        onSave={handleSaveProduto}
      />
    </div>
  );
};

export default Produtos;
