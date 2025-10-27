import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  Wallet, 
  CreditCard,
  Download,
  Plus,
  ArrowUpRight,
  ArrowDownLeft
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const transacoes = [
  {
    id: "1",
    tipo: "entrada",
    descricao: "Venda - Curso Marketing Digital",
    valor: 397.00,
    data: "2024-04-15 14:30",
    status: "confirmado",
  },
  {
    id: "2",
    tipo: "saida",
    descricao: "Comissão de Afiliado - João Silva",
    valor: 158.80,
    data: "2024-04-15 13:15",
    status: "processando",
  },
  {
    id: "3",
    tipo: "entrada",
    descricao: "Venda - E-book Mindset",
    valor: 47.00,
    data: "2024-04-15 10:45",
    status: "confirmado",
  },
  {
    id: "4",
    tipo: "saida",
    descricao: "Taxa de plataforma",
    valor: 19.85,
    data: "2024-04-14 16:20",
    status: "confirmado",
  },
];

const Financeiro = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div>
          <h1 className="text-3xl font-bold">Financeiro</h1>
          <p className="text-muted-foreground mt-1">
            Controle total sobre suas finanças
          </p>
        </div>

        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Extrato
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Nova Transação
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-6 bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border-emerald-500/20">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-emerald-500/20 rounded-lg">
              <Wallet className="h-6 w-6 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Saldo Disponível</p>
              <p className="text-2xl font-bold text-emerald-600">R$ 45.875,00</p>
              <p className="text-xs text-emerald-500 mt-1">
                Disponível para saque
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-500/10 rounded-lg">
              <TrendingUp className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Receitas do Mês</p>
              <p className="text-2xl font-bold">R$ 28.450,00</p>
              <p className="text-xs text-emerald-500 mt-1 flex items-center">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                +12% vs mês anterior
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-red-500/10 rounded-lg">
              <TrendingDown className="h-6 w-6 text-red-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Despesas do Mês</p>
              <p className="text-2xl font-bold">R$ 5.240,00</p>
              <p className="text-xs text-red-500 mt-1 flex items-center">
                <ArrowDownLeft className="h-3 w-3 mr-1" />
                Taxas e comissões
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-500/10 rounded-lg">
              <CreditCard className="h-6 w-6 text-purple-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">A Receber</p>
              <p className="text-2xl font-bold">R$ 12.350,00</p>
              <p className="text-xs text-muted-foreground mt-1">
                Próximos 7 dias
              </p>
            </div>
          </div>
        </Card>
      </div>

      <Card>
        <Tabs defaultValue="transacoes" className="p-4 sm:p-6">
          <TabsList className="w-full justify-start overflow-x-auto flex-nowrap">
            <TabsTrigger value="transacoes">Transações</TabsTrigger>
            <TabsTrigger value="saques">Saques</TabsTrigger>
            <TabsTrigger value="configuracoes">Configurações</TabsTrigger>
          </TabsList>

          <TabsContent value="transacoes" className="mt-6">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Descrição</TableHead>
                    <TableHead className="text-right">Valor</TableHead>
                    <TableHead>Data</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transacoes.map((transacao) => (
                    <TableRow key={transacao.id}>
                      <TableCell>
                        {transacao.tipo === "entrada" ? (
                          <div className="flex items-center gap-2">
                            <div className="p-1 bg-emerald-500/10 rounded">
                              <ArrowUpRight className="h-4 w-4 text-emerald-600" />
                            </div>
                            <span className="text-emerald-600 font-medium">Entrada</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <div className="p-1 bg-red-500/10 rounded">
                              <ArrowDownLeft className="h-4 w-4 text-red-600" />
                            </div>
                            <span className="text-red-600 font-medium">Saída</span>
                          </div>
                        )}
                      </TableCell>
                      <TableCell>{transacao.descricao}</TableCell>
                      <TableCell className={`text-right font-semibold ${
                        transacao.tipo === "entrada" ? "text-emerald-600" : "text-red-600"
                      }`}>
                        {transacao.tipo === "entrada" ? "+" : "-"}
                        {transacao.valor.toLocaleString('pt-BR', {
                          style: 'currency',
                          currency: 'BRL'
                        })}
                      </TableCell>
                      <TableCell>
                        {new Date(transacao.data).toLocaleString('pt-BR')}
                      </TableCell>
                      <TableCell>
                        <Badge 
                          variant={
                            transacao.status === "confirmado" ? "default" :
                            transacao.status === "processando" ? "secondary" :
                            "destructive"
                          }
                        >
                          {transacao.status.charAt(0).toUpperCase() + transacao.status.slice(1)}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          <TabsContent value="saques" className="mt-6">
            <div className="max-w-2xl">
              <Card>
                <CardHeader>
                  <CardTitle>Solicitar Saque</CardTitle>
                  <CardDescription>
                    Transferência para sua conta bancária em até 2 dias úteis
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="valor-saque">Valor do Saque</Label>
                    <Input 
                      id="valor-saque" 
                      type="number" 
                      placeholder="0.00" 
                      max={45875}
                    />
                    <p className="text-sm text-muted-foreground">
                      Disponível: R$ 45.875,00
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label>Conta Bancária</Label>
                    <div className="p-4 border rounded-lg bg-muted/30">
                      <p className="font-medium">Banco do Brasil</p>
                      <p className="text-sm text-muted-foreground">Ag: 1234-5 | Conta: 67890-1</p>
                    </div>
                  </div>

                  <Button className="w-full" size="lg">
                    <Download className="mr-2 h-5 w-5" />
                    Solicitar Saque
                  </Button>
                </CardContent>
              </Card>

              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-4">Histórico de Saques</h3>
                <div className="space-y-2">
                  <Card className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">R$ 10.000,00</p>
                        <p className="text-sm text-muted-foreground">10/04/2024</p>
                      </div>
                      <Badge>Concluído</Badge>
                    </div>
                  </Card>
                  <Card className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">R$ 8.500,00</p>
                        <p className="text-sm text-muted-foreground">25/03/2024</p>
                      </div>
                      <Badge>Concluído</Badge>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="configuracoes" className="mt-6">
            <div className="max-w-2xl space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Dados Bancários</CardTitle>
                  <CardDescription>
                    Configure sua conta bancária para receber pagamentos
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="banco">Banco</Label>
                      <Input id="banco" placeholder="Ex: Banco do Brasil" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tipo-conta">Tipo de Conta</Label>
                      <Input id="tipo-conta" placeholder="Corrente/Poupança" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="agencia">Agência</Label>
                      <Input id="agencia" placeholder="0000-0" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="conta">Conta</Label>
                      <Input id="conta" placeholder="00000-0" />
                    </div>
                  </div>

                  <Button>Salvar Dados Bancários</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Preferências de Pagamento</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Saque Automático</p>
                      <p className="text-sm text-muted-foreground">
                        Saques automáticos quando atingir o valor mínimo
                      </p>
                    </div>
                    <Button variant="outline">Ativar</Button>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <Label htmlFor="valor-minimo">Valor Mínimo para Saque</Label>
                    <Input 
                      id="valor-minimo" 
                      type="number" 
                      placeholder="100.00" 
                      defaultValue={100}
                    />
                  </div>

                  <Button>Salvar Preferências</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default Financeiro;