import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  TrendingUp, 
  Download, 
  Calendar,
  DollarSign,
  Users,
  ShoppingCart,
  Target,
  Eye,
  MousePointerClick
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";

const salesData = [
  { mes: "Jan", vendas: 12400, visitas: 4800, conversao: 2.6 },
  { mes: "Fev", vendas: 13980, visitas: 5200, conversao: 2.7 },
  { mes: "Mar", vendas: 16200, visitas: 5800, conversao: 2.8 },
  { mes: "Abr", vendas: 18500, visitas: 6200, conversao: 3.0 },
  { mes: "Mai", vendas: 21300, visitas: 6800, conversao: 3.1 },
  { mes: "Jun", vendas: 24800, visitas: 7500, conversao: 3.3 },
  { mes: "Jul", vendas: 28900, visitas: 8200, conversao: 3.5 },
  { mes: "Ago", vendas: 32400, visitas: 8900, conversao: 3.6 },
  { mes: "Set", vendas: 35200, visitas: 9400, conversao: 3.7 },
  { mes: "Out", vendas: 39800, visitas: 10200, conversao: 3.9 },
  { mes: "Nov", vendas: 42600, visitas: 10800, conversao: 3.9 },
  { mes: "Dez", vendas: 45875, visitas: 11500, conversao: 4.0 },
];

const productsData = [
  { name: "Cursos", value: 45, color: "#3b82f6" },
  { name: "E-books", value: 30, color: "#22c55e" },
  { name: "Templates", value: 15, color: "#f59e0b" },
  { name: "Físicos", value: 10, color: "#8b5cf6" },
];

const trafficData = [
  { fonte: "Orgânico", visitantes: 4200, conversao: 3.8 },
  { fonte: "Direto", visitantes: 2800, conversao: 4.2 },
  { fonte: "Social", visitantes: 2100, conversao: 2.5 },
  { fonte: "Email", visitantes: 1500, conversao: 5.1 },
  { fonte: "Pago", visitantes: 900, conversao: 3.2 },
];

const Relatorios = () => {
  const [periodo, setPeriodo] = useState("anual");

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Relatórios</h1>
          <p className="text-muted-foreground mt-2">
            Análises e insights sobre seu desempenho
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Calendar className="h-4 w-4" />
            Período
          </Button>
          <Button className="gap-2">
            <Download className="h-4 w-4" />
            Exportar
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Receita Total
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 286.175,00</div>
            <p className="text-xs text-green-500 flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3" />
              +18.2% vs mês anterior
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Ticket Médio
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 741,45</div>
            <p className="text-xs text-green-500 flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3" />
              +12.5% vs mês anterior
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Taxa de Conversão
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.87%</div>
            <p className="text-xs text-green-500 flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3" />
              +0.5% vs mês anterior
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Visitantes Únicos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">95.400</div>
            <p className="text-xs text-green-500 flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3" />
              +22.8% vs mês anterior
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="vendas" className="space-y-6">
        <TabsList className="w-full justify-start overflow-x-auto flex-nowrap bg-muted/30">
          <TabsTrigger value="vendas" className="gap-2">
            <DollarSign className="h-4 w-4" />
            Vendas
          </TabsTrigger>
          <TabsTrigger value="produtos" className="gap-2">
            <ShoppingCart className="h-4 w-4" />
            Produtos
          </TabsTrigger>
          <TabsTrigger value="trafego" className="gap-2">
            <Eye className="h-4 w-4" />
            Tráfego
          </TabsTrigger>
          <TabsTrigger value="conversao" className="gap-2">
            <Target className="h-4 w-4" />
            Conversão
          </TabsTrigger>
        </TabsList>

        <TabsContent value="vendas" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Evolução de Vendas</CardTitle>
              <CardDescription>
                Acompanhe o crescimento das suas vendas ao longo do tempo
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={salesData}>
                  <defs>
                    <linearGradient id="colorVendas" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="mes" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      borderColor: 'hsl(var(--border))',
                      color: 'hsl(var(--foreground))'
                    }}
                    formatter={(value: number) => `R$ ${value.toLocaleString('pt-BR')}`}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="vendas" 
                    stroke="hsl(var(--primary))" 
                    fillOpacity={1} 
                    fill="url(#colorVendas)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Vendas por Categoria</CardTitle>
                <CardDescription>
                  Distribuição das vendas por tipo de produto
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={productsData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {productsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        borderColor: 'hsl(var(--border))',
                        color: 'hsl(var(--foreground))'
                      }}
                      formatter={(value) => [`${value}%`, ""]}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Comparativo Mensal</CardTitle>
                <CardDescription>
                  Vendas e visitas ao longo do ano
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="mes" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'hsl(var(--card))',
                        borderColor: 'hsl(var(--border))',
                        color: 'hsl(var(--foreground))'
                      }}
                    />
                    <Legend />
                    <Bar dataKey="vendas" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="produtos" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Desempenho de Produtos</CardTitle>
              <CardDescription>
                Análise detalhada do desempenho por produto
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { nome: "Curso Marketing Digital", vendas: 254, receita: 100838 },
                  { nome: "E-book Vendas High Ticket", vendas: 189, receita: 18333 },
                  { nome: "Template Landing Page", vendas: 142, receita: 13774 },
                  { nome: "Curso Copywriting", vendas: 98, receita: 58506 },
                  { nome: "Caneca Personalizada", vendas: 76, receita: 3792 }
                ].map((produto, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-secondary/30 transition-colors">
                    <div className="flex-1">
                      <p className="font-medium">{produto.nome}</p>
                      <p className="text-sm text-muted-foreground">{produto.vendas} vendas</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">R$ {produto.receita.toLocaleString('pt-BR')}</p>
                      <p className="text-sm text-muted-foreground">receita</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trafego" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Fontes de Tráfego</CardTitle>
              <CardDescription>
                De onde seus visitantes estão vindo
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={trafficData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis type="number" stroke="hsl(var(--muted-foreground))" />
                  <YAxis dataKey="fonte" type="category" stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      borderColor: 'hsl(var(--border))',
                      color: 'hsl(var(--foreground))'
                    }}
                  />
                  <Legend />
                  <Bar dataKey="visitantes" fill="hsl(var(--primary))" radius={[0, 8, 8, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="conversao" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Taxa de Conversão</CardTitle>
              <CardDescription>
                Acompanhe a evolução da sua taxa de conversão
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="mes" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      borderColor: 'hsl(var(--border))',
                      color: 'hsl(var(--foreground))'
                    }}
                    formatter={(value: number) => `${value}%`}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="conversao" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={3}
                    dot={{ fill: 'hsl(var(--primary))', r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Relatorios;
