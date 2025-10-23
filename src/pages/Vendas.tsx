
import React from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VendasHeader } from "@/components/vendas/VendasHeader";
import { VendasList } from "@/components/vendas/VendasList";
import { VendasStats } from "@/components/vendas/VendasStats";

const Vendas = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <VendasHeader />
      <VendasStats />
      
      <Card className="overflow-hidden">
        <Tabs defaultValue="todas" className="p-6">
          <TabsList className="grid grid-cols-2 sm:grid-cols-4 w-full sm:w-auto">
            <TabsTrigger value="todas">Todas</TabsTrigger>
            <TabsTrigger value="aprovadas">Aprovadas</TabsTrigger>
            <TabsTrigger value="pendentes">Pendentes</TabsTrigger>
            <TabsTrigger value="canceladas">Canceladas</TabsTrigger>
          </TabsList>

          <TabsContent value="todas" className="mt-6">
            <VendasList status="todas" />
          </TabsContent>
          <TabsContent value="aprovadas" className="mt-6">
            <VendasList status="aprovadas" />
          </TabsContent>
          <TabsContent value="pendentes" className="mt-6">
            <VendasList status="pendentes" />
          </TabsContent>
          <TabsContent value="canceladas" className="mt-6">
            <VendasList status="canceladas" />
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default Vendas;
