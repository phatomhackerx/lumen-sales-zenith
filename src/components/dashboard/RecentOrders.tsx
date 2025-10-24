import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight, Package } from "lucide-react";
import { Link } from "react-router-dom";

interface Order {
  id: string;
  customer: string;
  avatar?: string;
  product: string;
  amount: number;
  status: "aprovado" | "pendente" | "cancelado";
  date: string;
}

const recentOrders: Order[] = [
  {
    id: "ORD-001",
    customer: "Ana Silva",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
    product: "Curso Marketing Digital",
    amount: 397,
    status: "aprovado",
    date: "Há 2 min"
  },
  {
    id: "ORD-002",
    customer: "Carlos Mendes",
    product: "E-book Vendas",
    amount: 97,
    status: "pendente",
    date: "Há 15 min"
  },
  {
    id: "ORD-003",
    customer: "Juliana Costa",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100",
    product: "Template Landing Page",
    amount: 147,
    status: "aprovado",
    date: "Há 1h"
  },
  {
    id: "ORD-004",
    customer: "Roberto Lima",
    product: "Caneca Personalizada",
    amount: 49,
    status: "aprovado",
    date: "Há 2h"
  },
  {
    id: "ORD-005",
    customer: "Mariana Santos",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
    product: "Curso Copywriting",
    amount: 597,
    status: "cancelado",
    date: "Há 3h"
  }
];

const statusConfig = {
  aprovado: { label: "Aprovado", variant: "default" as const, color: "text-green-500" },
  pendente: { label: "Pendente", variant: "secondary" as const, color: "text-amber-500" },
  cancelado: { label: "Cancelado", variant: "outline" as const, color: "text-red-500" }
};

export function RecentOrders() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="flex items-center gap-2">
          <Package className="h-5 w-5" />
          Pedidos Recentes
        </CardTitle>
        <Button variant="ghost" size="sm" asChild>
          <Link to="/vendas">
            Ver todos
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentOrders.map((order) => {
            const config = statusConfig[order.status];
            return (
              <div 
                key={order.id}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/30 transition-colors"
              >
                <Avatar className="h-10 w-10">
                  <AvatarImage src={order.avatar} />
                  <AvatarFallback>{order.customer.charAt(0)}</AvatarFallback>
                </Avatar>
                
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{order.customer}</p>
                  <p className="text-sm text-muted-foreground truncate">{order.product}</p>
                </div>
                
                <div className="text-right">
                  <p className="font-semibold">R$ {order.amount.toFixed(2)}</p>
                  <p className="text-xs text-muted-foreground">{order.date}</p>
                </div>
                
                <Badge variant={config.variant} className="shrink-0">
                  {config.label}
                </Badge>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
