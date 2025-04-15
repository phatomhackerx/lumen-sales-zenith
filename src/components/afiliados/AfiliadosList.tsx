
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

interface AfiliadosListProps {
  status: "todos" | "ativos" | "inativos";
}

// Dados mockados para exemplo
const afiliados = [
  {
    id: "1",
    nome: "João Silva",
    email: "joao@email.com",
    vendas: 127,
    comissoes: 3450.00,
    status: "ativo",
    dataEntrada: "2024-01-15",
  },
  {
    id: "2",
    nome: "Maria Santos",
    email: "maria@email.com",
    vendas: 89,
    comissoes: 2180.00,
    status: "ativo",
    dataEntrada: "2024-02-01",
  },
  {
    id: "3",
    nome: "Pedro Oliveira",
    email: "pedro@email.com",
    vendas: 0,
    comissoes: 0,
    status: "inativo",
    dataEntrada: "2024-03-10",
  },
  {
    id: "4",
    nome: "Ana Costa",
    email: "ana@email.com",
    vendas: 245,
    comissoes: 6890.00,
    status: "ativo",
    dataEntrada: "2023-12-05",
  },
];

export const AfiliadosList = ({ status }: AfiliadosListProps) => {
  const afiliadosFiltrados = status === "todos" 
    ? afiliados 
    : afiliados.filter(a => a.status === status.slice(0, -1));

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-right">Vendas</TableHead>
            <TableHead className="text-right">Comissões</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Data de Entrada</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {afiliadosFiltrados.map((afiliado) => (
            <TableRow key={afiliado.id}>
              <TableCell className="font-medium">{afiliado.nome}</TableCell>
              <TableCell>{afiliado.email}</TableCell>
              <TableCell className="text-right">{afiliado.vendas}</TableCell>
              <TableCell className="text-right">
                {afiliado.comissoes.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                })}
              </TableCell>
              <TableCell>
                <Badge 
                  variant={afiliado.status === "ativo" ? "default" : "secondary"}
                >
                  {afiliado.status.charAt(0).toUpperCase() + afiliado.status.slice(1)}
                </Badge>
              </TableCell>
              <TableCell>
                {new Date(afiliado.dataEntrada).toLocaleDateString('pt-BR')}
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
