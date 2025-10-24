import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Package2 } from "lucide-react";

interface TopProduct {
  id: string;
  name: string;
  sales: number;
  revenue: number;
  maxSales: number;
  trend: number;
}

const topProducts: TopProduct[] = [
  {
    id: "1",
    name: "Curso Marketing Digital",
    sales: 254,
    revenue: 100838,
    maxSales: 300,
    trend: 12
  },
  {
    id: "2",
    name: "E-book Vendas High Ticket",
    sales: 189,
    revenue: 18333,
    maxSales: 300,
    trend: 8
  },
  {
    id: "3",
    name: "Template Landing Page",
    sales: 142,
    revenue: 13774,
    maxSales: 300,
    trend: 15
  },
  {
    id: "4",
    name: "Curso Copywriting",
    sales: 98,
    revenue: 58506,
    maxSales: 300,
    trend: -3
  },
  {
    id: "5",
    name: "Caneca Personalizada",
    sales: 76,
    revenue: 3792,
    maxSales: 300,
    trend: 5
  }
];

export function TopProducts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Package2 className="h-5 w-5" />
          Produtos Mais Vendidos
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {topProducts.map((product, index) => (
            <div key={product.id} className="space-y-2">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{product.name}</p>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-sm text-muted-foreground">
                        {product.sales} vendas
                      </span>
                      <span className="text-sm font-medium">
                        R$ {product.revenue.toLocaleString('pt-BR')}
                      </span>
                    </div>
                  </div>
                </div>
                
                <Badge 
                  variant={product.trend >= 0 ? "default" : "outline"}
                  className="shrink-0"
                >
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {product.trend >= 0 ? '+' : ''}{product.trend}%
                </Badge>
              </div>
              
              <Progress 
                value={(product.sales / product.maxSales) * 100} 
                className="h-2"
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
