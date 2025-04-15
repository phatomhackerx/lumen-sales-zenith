
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Users, DollarSign } from "lucide-react";

export const MarketplaceStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card className="border-border/40 bg-gradient-to-br from-background to-muted/50">
        <CardContent className="flex items-center p-6">
          <div className="mr-4 bg-primary/10 p-3 rounded-full">
            <ShoppingCart className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Produtos Disponíveis</p>
            <p className="text-2xl font-bold">1,250+</p>
          </div>
        </CardContent>
      </Card>
      
      <Card className="border-border/40 bg-gradient-to-br from-background to-muted/50">
        <CardContent className="flex items-center p-6">
          <div className="mr-4 bg-amber-500/10 p-3 rounded-full">
            <Users className="h-6 w-6 text-amber-500" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Afiliados Ativos</p>
            <p className="text-2xl font-bold">750+</p>
          </div>
        </CardContent>
      </Card>
      
      <Card className="border-border/40 bg-gradient-to-br from-background to-muted/50">
        <CardContent className="flex items-center p-6">
          <div className="mr-4 bg-green-500/10 p-3 rounded-full">
            <DollarSign className="h-6 w-6 text-green-500" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Comissões Pagas</p>
            <p className="text-2xl font-bold">R$ 1.5M+</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
