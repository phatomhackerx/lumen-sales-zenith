
import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Dados simulados para o gráfico
const generateSalesData = () => {
  const data = [];
  const months = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];
  
  for (let i = 0; i < 12; i++) {
    const sales = Math.floor(Math.random() * 100000) + 20000;
    const orders = Math.floor(Math.random() * 100) + 20;
    
    data.push({
      name: months[i],
      vendas: sales,
      pedidos: orders,
    });
  }
  
  return data;
};

export function SalesChart() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    setData(generateSalesData());
  }, []);

  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle>Histórico de Vendas</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 10,
                left: 10,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#333" opacity={0.1} />
              <XAxis dataKey="name" stroke="#888" />
              <YAxis
                stroke="#888"
                tickFormatter={(value) =>
                  `R$${new Intl.NumberFormat("pt-BR").format(Number(value))}`
                }
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  borderColor: 'hsl(var(--border))',
                  color: 'hsl(var(--foreground))'
                }}
                formatter={(value) =>
                  [`R$ ${new Intl.NumberFormat("pt-BR").format(Number(value))}`, ""]
                }
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="vendas"
                name="Vendas (R$)"
                stroke="hsl(var(--primary))"
                activeDot={{ r: 8 }}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
