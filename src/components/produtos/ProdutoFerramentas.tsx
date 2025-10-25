import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Video, 
  Link as LinkIcon, 
  Download,
  Upload,
  CheckCircle,
  Clock,
  TrendingUp,
  Users,
  DollarSign,
  Eye,
  Share2,
  BarChart3
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

interface ProdutoFerramentasProps {
  produtoId: string;
}

export const ProdutoFerramentas = ({ produtoId }: ProdutoFerramentasProps) => {
  const [uploadProgress, setUploadProgress] = useState(0);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Ferramentas do Produto</h2>
        <p className="text-muted-foreground">
          Gerencie conteúdos, área de membros e analytics
        </p>
      </div>

      <Tabs defaultValue="conteudo" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="conteudo">Conteúdo</TabsTrigger>
          <TabsTrigger value="membros">Área de Membros</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="links">Links</TabsTrigger>
        </TabsList>

        <TabsContent value="conteudo" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Gerenciamento de Conteúdo</CardTitle>
              <CardDescription>
                Faça upload de arquivos, vídeos e materiais do produto
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="border-dashed">
                  <CardContent className="flex flex-col items-center justify-center p-6 space-y-2">
                    <Upload className="h-10 w-10 text-muted-foreground" />
                    <p className="text-sm font-medium">Upload de Arquivos</p>
                    <p className="text-xs text-muted-foreground text-center">
                      PDFs, ZIPs, Planilhas
                    </p>
                    <Button variant="outline" size="sm">
                      <FileText className="mr-2 h-4 w-4" />
                      Selecionar Arquivos
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-dashed">
                  <CardContent className="flex flex-col items-center justify-center p-6 space-y-2">
                    <Video className="h-10 w-10 text-muted-foreground" />
                    <p className="text-sm font-medium">Upload de Vídeos</p>
                    <p className="text-xs text-muted-foreground text-center">
                      MP4, MOV, AVI
                    </p>
                    <Button variant="outline" size="sm">
                      <Video className="mr-2 h-4 w-4" />
                      Selecionar Vídeos
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {uploadProgress > 0 && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Fazendo upload...</span>
                    <span>{uploadProgress}%</span>
                  </div>
                  <Progress value={uploadProgress} />
                </div>
              )}

              <div className="space-y-2">
                <h4 className="font-medium">Arquivos Recentes</h4>
                <div className="space-y-2">
                  {[
                    { nome: "Módulo 1 - Introdução.pdf", tipo: "PDF", tamanho: "2.5 MB" },
                    { nome: "Aula 01 - Fundamentos.mp4", tipo: "Video", tamanho: "145 MB" },
                    { nome: "Template de Planilhas.xlsx", tipo: "Excel", tamanho: "1.2 MB" },
                  ].map((arquivo, index) => (
                    <div 
                      key={index} 
                      className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent/50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded bg-primary/10 flex items-center justify-center">
                          <FileText className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{arquivo.nome}</p>
                          <p className="text-xs text-muted-foreground">
                            {arquivo.tipo} • {arquivo.tamanho}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="membros" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Área de Membros</CardTitle>
              <CardDescription>
                Configure o acesso e estrutura da área de membros
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="p-4 space-y-2">
                    <Users className="h-8 w-8 text-primary" />
                    <p className="text-2xl font-bold">1,247</p>
                    <p className="text-sm text-muted-foreground">Membros Ativos</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 space-y-2">
                    <CheckCircle className="h-8 w-8 text-green-500" />
                    <p className="text-2xl font-bold">87%</p>
                    <p className="text-sm text-muted-foreground">Taxa de Conclusão</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 space-y-2">
                    <Clock className="h-8 w-8 text-blue-500" />
                    <p className="text-2xl font-bold">2.5h</p>
                    <p className="text-sm text-muted-foreground">Tempo Médio</p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Estrutura do Curso</h4>
                <div className="space-y-2">
                  {[
                    { modulo: "Módulo 1: Fundamentos", aulas: 12, progresso: 100 },
                    { modulo: "Módulo 2: Avançado", aulas: 8, progresso: 65 },
                    { modulo: "Módulo 3: Expert", aulas: 10, progresso: 30 },
                  ].map((modulo, index) => (
                    <div key={index} className="p-4 border rounded-lg space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{modulo.modulo}</p>
                          <p className="text-sm text-muted-foreground">{modulo.aulas} aulas</p>
                        </div>
                        <Badge variant="outline">{modulo.progresso}%</Badge>
                      </div>
                      <Progress value={modulo.progresso} />
                    </div>
                  ))}
                </div>
                <Button className="w-full">
                  Gerenciar Módulos
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Analytics e Métricas</CardTitle>
              <CardDescription>
                Acompanhe o desempenho do seu produto
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <Eye className="h-5 w-5 text-muted-foreground" />
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    </div>
                    <p className="text-2xl font-bold">12,543</p>
                    <p className="text-sm text-muted-foreground">Visualizações</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <DollarSign className="h-5 w-5 text-muted-foreground" />
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    </div>
                    <p className="text-2xl font-bold">R$ 45,2k</p>
                    <p className="text-sm text-muted-foreground">Receita Total</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <Users className="h-5 w-5 text-muted-foreground" />
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    </div>
                    <p className="text-2xl font-bold">892</p>
                    <p className="text-sm text-muted-foreground">Vendas</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <BarChart3 className="h-5 w-5 text-muted-foreground" />
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    </div>
                    <p className="text-2xl font-bold">7.1%</p>
                    <p className="text-sm text-muted-foreground">Taxa de Conversão</p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Desempenho dos Últimos 30 Dias</h4>
                <Card>
                  <CardContent className="p-4">
                    <div className="h-64 flex items-center justify-center bg-muted/20 rounded">
                      <BarChart3 className="h-16 w-16 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="links" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Links de Vendas</CardTitle>
              <CardDescription>
                Gerencie seus links de checkout e afiliados
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium">Link Principal</h4>
                <div className="flex gap-2">
                  <div className="flex-1 p-3 border rounded-lg bg-muted/30">
                    <p className="text-sm font-mono">
                      https://checkout.seudominio.com/produto-{produtoId}
                    </p>
                  </div>
                  <Button variant="outline">
                    <Share2 className="mr-2 h-4 w-4" />
                    Copiar
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">Links Personalizados</h4>
                <div className="space-y-2">
                  {[
                    { nome: "Link de Afiliado Premium", clicks: 1234, vendas: 87 },
                    { nome: "Link de Promoção Black Friday", clicks: 3421, vendas: 231 },
                    { nome: "Link de Lançamento", clicks: 892, vendas: 45 },
                  ].map((link, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-3 border rounded-lg"
                    >
                      <div>
                        <p className="font-medium text-sm">{link.nome}</p>
                        <p className="text-xs text-muted-foreground">
                          {link.clicks} clicks • {link.vendas} vendas
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <LinkIcon className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <BarChart3 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full">
                  Criar Novo Link
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
