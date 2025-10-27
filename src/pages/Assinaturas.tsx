import React from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, FileDown, Plus, Users, DollarSign, TrendingUp, Clock } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const assinaturas = [
  {
    id: "1",
    cliente: "João Silva",
    plano: "Premium Mensal",
    valor: 97.00,
    status: "ativa",
    inicioEm: "2024-01-15",
    proximaCobranca: "2024-05-15",
  },
  {
    id: "2",
    cliente: "Maria Santos",
    plano: "Basic Anual",
    valor: 47.00,
    status: "ativa",
    inicioEm: "2024-03-01",
    proximaCobranca: "2025-03-01",
  },
  {
    id: "3",
    cliente: "Pedro Oliveira",
    plano: "Premium Anual",
    valor: 997.00,
    status: "cancelada",
    inicioEm: "2023-12-10",
    proximaCobranca: "-",
  },
];

const Assinaturas = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div>
          <h1 className="text-3xl font-bold">Assinaturas</h1>
          <p className="text-muted-foreground mt-1">
            Gerencie planos recorrentes e assinaturas
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <div className="relative w-full sm:w-[300px]">
            <Input placeholder="Buscar assinatura..." className="pl-10" />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
            <Button variant="outline">
              <FileDown className="h-4 w-4 mr-2" />
              Exportar
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Novo Plano
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Assinaturas Ativas</p>
              <p className="text-2xl font-bold">284</p>
              <p className="text-xs text-emerald-500 mt-1">
                +15% este mês
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-emerald-500/10 rounded-lg">
              <DollarSign className="h-6 w-6 text-emerald-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">MRR</p>
              <p className="text-2xl font-bold">R$ 27.548,00</p>
              <p className="text-xs text-emerald-500 mt-1">
                +12% vs mês anterior
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
              <p className="text-sm text-muted-foreground">Taxa de Retenção</p>
              <p className="text-2xl font-bold">92.5%</p>
              <p className="text-xs text-emerald-500 mt-1">
                +2.1% vs mês anterior
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-amber-500/10 rounded-lg">
              <Clock className="h-6 w-6 text-amber-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Churn Rate</p>
              <p className="text-2xl font-bold">7.5%</p>
              <p className="text-xs text-red-500 mt-1">
                -1.2% vs mês anterior
              </p>
            </div>
          </div>
        </Card>
      </div>

      <Card>
        <Tabs defaultValue="todas" className="p-4 sm:p-6">
          <TabsList className="w-full justify-start overflow-x-auto flex-nowrap">
            <TabsTrigger value="todas">Todas</TabsTrigger>
            <TabsTrigger value="ativas">Ativas</TabsTrigger>
            <TabsTrigger value="pausadas">Pausadas</TabsTrigger>
            <TabsTrigger value="canceladas">Canceladas</TabsTrigger>
          </TabsList>

          <TabsContent value="todas" className="mt-6">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Plano</TableHead>
                    <TableHead className="text-right">Valor</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Início</TableHead>
                    <TableHead>Próxima Cobrança</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {assinaturas.map((assinatura) => (
                    <TableRow key={assinatura.id}>
                      <TableCell className="font-medium">{assinatura.cliente}</TableCell>
                      <TableCell>{assinatura.plano}</TableCell>
                      <TableCell className="text-right">
                        {assinatura.valor.toLocaleString('pt-BR', {
                          style: 'currency',
                          currency: 'BRL'
                        })}
                      </TableCell>
                      <TableCell>
                        <Badge 
                          variant={
                            assinatura.status === "ativa" ? "default" :
                            assinatura.status === "pausada" ? "secondary" :
                            "destructive"
                          }
                        >
                          {assinatura.status.charAt(0).toUpperCase() + assinatura.status.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {new Date(assinatura.inicioEm).toLocaleDateString('pt-BR')}
                      </TableCell>
                      <TableCell>{assinatura.proximaCobranca !== "-" ? new Date(assinatura.proximaCobranca).toLocaleDateString('pt-BR') : "-"}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          <TabsContent value="ativas" className="mt-6">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Plano</TableHead>
                    <TableHead className="text-right">Valor</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Início</TableHead>
                    <TableHead>Próxima Cobrança</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {assinaturas.filter(a => a.status === "ativa").map((assinatura) => (
                    <TableRow key={assinatura.id}>
                      <TableCell className="font-medium">{assinatura.cliente}</TableCell>
                      <TableCell>{assinatura.plano}</TableCell>
                      <TableCell className="text-right">
                        {assinatura.valor.toLocaleString('pt-BR', {
                          style: 'currency',
                          currency: 'BRL'
                        })}
                      </TableCell>
                      <TableCell>
                        <Badge variant="default">
                          {assinatura.status.charAt(0).toUpperCase() + assinatura.status.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {new Date(assinatura.inicioEm).toLocaleDateString('pt-BR')}
                      </TableCell>
                      <TableCell>{new Date(assinatura.proximaCobranca).toLocaleDateString('pt-BR')}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          <TabsContent value="pausadas" className="mt-6">
            <div className="text-center py-12 text-muted-foreground">
              Nenhuma assinatura pausada encontrada
            </div>
          </TabsContent>

          <TabsContent value="canceladas" className="mt-6">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Plano</TableHead>
                    <TableHead className="text-right">Valor</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Início</TableHead>
                    <TableHead>Cancelado em</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {assinaturas.filter(a => a.status === "cancelada").map((assinatura) => (
                    <TableRow key={assinatura.id}>
                      <TableCell className="font-medium">{assinatura.cliente}</TableCell>
                      <TableCell>{assinatura.plano}</TableCell>
                      <TableCell className="text-right">
                        {assinatura.valor.toLocaleString('pt-BR', {
                          style: 'currency',
                          currency: 'BRL'
                        })}
                      </TableCell>
                      <TableCell>
                        <Badge variant="destructive">
                          {assinatura.status.charAt(0).toUpperCase() + assinatura.status.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {new Date(assinatura.inicioEm).toLocaleDateString('pt-BR')}
                      </TableCell>
                      <TableCell>-</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default Assinaturas;