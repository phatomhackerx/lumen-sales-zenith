
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

interface VendasListProps {
  status: "todas" | "aprovadas" | "pendentes" | "canceladas";
}

// Dados mockados para exemplo
const vendas = [
  {
    id: "1",
    cliente: "João Silva",
    produto: "Curso de Marketing Digital",
    valor: 997.00,
    status: "aprovada",
    data: "2024-04-15 14:30",
  },
  {
    id: "2",
    cliente: "Maria Santos",
    produto: "E-book: Mindset Empreendedor",
    valor: 47.00,
    status: "pendente",
    data: "2024-04-15 13:15",
  },
  {
    id: "3",
    cliente: "Pedro Oliveira",
    produto: "Mentoria Premium",
    valor: 1997.00,
    status: "aprovada",
    data: "2024-04-15 10:45",
  },
  {
    id: "4",
    cliente: "Ana Costa",
    produto: "Curso de Marketing Digital",
    valor: 997.00,
    status: "cancelada",
    data: "2024-04-14 16:20",
  },
];

export const VendasList = ({ status }: VendasListProps) => {
  const vendasFiltradas = status === "todas" 
    ? vendas 
    : vendas.filter(v => v.status === status);

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Cliente</TableHead>
            <TableHead>Produto</TableHead>
            <TableHead className="text-right">Valor</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Data</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {vendasFiltradas.map((venda) => (
            <TableRow key={venda.id}>
              <TableCell className="font-medium">#{venda.id}</TableCell>
              <TableCell>{venda.cliente}</TableCell>
              <TableCell>{venda.produto}</TableCell>
              <TableCell className="text-right">
                {venda.valor.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                })}
              </TableCell>
              <TableCell>
                <Badge 
                  variant={
                    venda.status === "aprovada" ? "default" :
                    venda.status === "pendente" ? "secondary" :
                    "destructive"
                  }
                >
                  {venda.status.charAt(0).toUpperCase() + venda.status.slice(1)}
                </Badge>
              </TableCell>
              <TableCell>
                {new Date(venda.data).toLocaleString('pt-BR')}
              </TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="icon">
                  <Eye className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
