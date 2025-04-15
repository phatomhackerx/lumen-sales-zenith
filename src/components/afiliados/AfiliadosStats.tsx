
import React from "react";
import { Card } from "@/components/ui/card";
import { Users, DollarSign, TrendingUp, Star } from "lucide-react";

export const AfiliadosStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Card className="p-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-lg">
            <Users className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Total de Afiliados</p>
            <p className="text-2xl font-bold">247</p>
            <p className="text-xs text-emerald-500 mt-1">
              +12% em relação ao mês anterior
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
            <p className="text-sm text-muted-foreground">Comissões Pagas</p>
            <p className="text-2xl font-bold">R$ 12.580,00</p>
            <p className="text-xs text-emerald-500 mt-1">
              +8% em relação ao mês anterior
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
            <p className="text-sm text-muted-foreground">Taxa de Conversão</p>
            <p className="text-2xl font-bold">3.8%</p>
            <p className="text-xs text-emerald-500 mt-1">
              +0.5% em relação ao mês anterior
            </p>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-amber-500/10 rounded-lg">
            <Star className="h-6 w-6 text-amber-500" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Afiliados Top</p>
            <p className="text-2xl font-bold">25</p>
            <p className="text-xs text-emerald-500 mt-1">
              +3 em relação ao mês anterior
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};
