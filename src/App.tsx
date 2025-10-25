import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Produtos from "./pages/Produtos";
import ProdutoEditor from "./pages/ProdutoEditor";
import ProdutoCheckout from "./pages/ProdutoCheckout";
import ProdutoDetalhes from "./pages/ProdutoDetalhes";
import ProdutoDetalhe from "./pages/ProdutoDetalhe";
import Marketplace from "./pages/Marketplace";
import Vendas from "./pages/Vendas";
import Afiliados from "./pages/Afiliados";
import Relatorios from "./pages/Relatorios";
import Configuracoes from "./pages/Configuracoes";
import NotFound from "./pages/NotFound";
import { AppLayout } from "./components/layout/AppLayout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<AppLayout><Dashboard /></AppLayout>} />
          <Route path="/produtos" element={<AppLayout><Produtos /></AppLayout>} />
          <Route path="/produtos/novo" element={<ProdutoEditor />} />
          <Route path="/produtos/:id" element={<AppLayout><ProdutoDetalhes /></AppLayout>} />
          <Route path="/produtos/:id/editar" element={<ProdutoEditor />} />
          <Route path="/produtos/:id/checkout" element={<ProdutoCheckout />} />
          <Route path="/marketplace" element={<AppLayout><Marketplace /></AppLayout>} />
          <Route path="/marketplace/:id" element={<AppLayout><ProdutoDetalhe /></AppLayout>} />
          <Route path="/vendas" element={<AppLayout><Vendas /></AppLayout>} />
          <Route path="/afiliados" element={<AppLayout><Afiliados /></AppLayout>} />
          <Route path="/relatorios" element={<AppLayout><Relatorios /></AppLayout>} />
          <Route path="/configuracoes" element={<AppLayout><Configuracoes /></AppLayout>} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
