
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { StatCard } from "@/components/dashboard/StatCard";
import { SalesChart } from "@/components/dashboard/SalesChart";
import { PaymentMethodsChart } from "@/components/dashboard/PaymentMethodsChart";
import { RecentOrders } from "@/components/dashboard/RecentOrders";
import { TopProducts } from "@/components/dashboard/TopProducts";
import { Activity, TrendingUp, Users, DollarSign } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <DashboardHeader />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Vendas Totais"
          value="R$ 45.875,00"
          description="+12% em relação ao mês anterior"
          icon={<DollarSign className="h-5 w-5" />}
          trend="up"
        />
        <StatCard 
          title="Pedidos"
          value="386"
          description="+8% em relação ao mês anterior"
          icon={<Activity className="h-5 w-5" />}
          trend="up"
        />
        <StatCard 
          title="Conversão"
          value="3.2%"
          description="+0.8% em relação ao mês anterior"
          icon={<TrendingUp className="h-5 w-5" />}
          trend="up"
        />
        <StatCard 
          title="Clientes"
          value="1,438"
          description="+18% em relação ao mês anterior"
          icon={<Users className="h-5 w-5" />}
          trend="up"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
        <div className="lg:col-span-2">
          <SalesChart />
        </div>
        
        <PaymentMethodsChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        <RecentOrders />
        <TopProducts />
      </div>
    </div>
  );
};

export default Dashboard;
