
import React from "react";
import { AfiliadosHeader } from "@/components/afiliados/AfiliadosHeader";
import { AfiliadosStats } from "@/components/afiliados/AfiliadosStats";
import { AfiliadosList } from "@/components/afiliados/AfiliadosList";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Afiliados = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <AfiliadosHeader />
      <AfiliadosStats />
      
      <Card>
        <Tabs defaultValue="todos" className="p-6">
          <TabsList>
            <TabsTrigger value="todos">Todos os Afiliados</TabsTrigger>
            <TabsTrigger value="ativos">Ativos</TabsTrigger>
            <TabsTrigger value="inativos">Inativos</TabsTrigger>
          </TabsList>
          
          <TabsContent value="todos" className="mt-6">
            <AfiliadosList status="todos" />
          </TabsContent>
          <TabsContent value="ativos" className="mt-6">
            <AfiliadosList status="ativos" />
          </TabsContent>
          <TabsContent value="inativos" className="mt-6">
            <AfiliadosList status="inativos" />
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default Afiliados;
