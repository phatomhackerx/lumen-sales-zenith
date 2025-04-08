
import { StatCard } from "@/components/dashboard/StatCard";
import { SalesChart } from "@/components/dashboard/SalesChart";
import { PaymentMethodsChart } from "@/components/dashboard/PaymentMethodsChart";
import { 
  BarChart3, ShoppingCart, CreditCard, AlertTriangle,
  DollarSign, Users, TrendingUp, Percent 
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard
          title="Total de Vendas"
          value="R$ 158.432,00"
          description="Últimos 30 dias"
          icon={<DollarSign className="h-4 w-4" />}
          trend="up"
          trendValue="+12.5% em relação ao mês anterior"
          className="dashboard-card-highlight"
        />
        <StatCard
          title="Quantidade de Pedidos"
          value="1.248"
          description="Últimos 30 dias"
          icon={<ShoppingCart className="h-4 w-4" />}
          trend="up"
          trendValue="+8.3% em relação ao mês anterior"
        />
        <StatCard
          title="Taxa de Aprovação"
          value="92,7%"
          description="Últimos 30 dias"
          icon={<Percent className="h-4 w-4" />}
          trend="up"
          trendValue="+2.1% em relação ao mês anterior"
        />
        <StatCard
          title="Ticket Médio"
          value="R$ 127,00"
          description="Últimos 30 dias"
          icon={<CreditCard className="h-4 w-4" />}
          trend="up"
          trendValue="+3.8% em relação ao mês anterior"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard
          title="Abandono de Carrinho"
          value="21,3%"
          description="Últimos 30 dias"
          icon={<AlertTriangle className="h-4 w-4" />}
          trend="down"
          trendValue="-2.7% em relação ao mês anterior"
        />
        <StatCard
          title="Reembolsos"
          value="3,2%"
          description="Últimos 30 dias"
          icon={<TrendingUp className="h-4 w-4" />}
          trend="down"
          trendValue="-0.8% em relação ao mês anterior"
        />
        <StatCard
          title="Chargebacks"
          value="0,5%"
          description="Últimos 30 dias"
          icon={<AlertTriangle className="h-4 w-4" />}
          trend="neutral"
          trendValue="Mesma taxa do mês anterior"
        />
        <StatCard
          title="Novos Clientes"
          value="432"
          description="Últimos 30 dias"
          icon={<Users className="h-4 w-4" />}
          trend="up"
          trendValue="+15.3% em relação ao mês anterior"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <SalesChart />
        <PaymentMethodsChart />
      </div>
    </div>
  );
};

export default Dashboard;
