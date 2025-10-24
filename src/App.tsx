import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import Produtos from "./pages/Produtos";
import Marketplace from "./pages/Marketplace";
import ProdutoDetalhe from "./pages/ProdutoDetalhe";
import Vendas from "./pages/Vendas";
import Afiliados from "./pages/Afiliados";
import Configuracoes from "./pages/Configuracoes";
import Relatorios from "./pages/Relatorios";
import PaginaPlaceholder from "./pages/PaginaPlaceholder";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <AppLayout>
                <Dashboard />
              </AppLayout>
            }
          />
          <Route
            path="/produtos"
            element={
              <AppLayout>
                <Produtos />
              </AppLayout>
            }
          />
          <Route
            path="/marketplace"
            element={
              <AppLayout>
                <Marketplace />
              </AppLayout>
            }
          />
          <Route
            path="/marketplace/:id"
            element={
              <AppLayout>
                <ProdutoDetalhe />
              </AppLayout>
            }
          />
          <Route
            path="/vendas"
            element={
              <AppLayout>
                <Vendas />
              </AppLayout>
            }
          />
          <Route
            path="/assinaturas"
            element={
              <AppLayout>
                <PaginaPlaceholder titulo="Assinaturas" />
              </AppLayout>
            }
          />
          <Route
            path="/relatorios"
            element={
              <AppLayout>
                <Relatorios />
              </AppLayout>
            }
          />
          <Route
            path="/afiliados"
            element={
              <AppLayout>
                <Afiliados />
              </AppLayout>
            }
          />
          <Route
            path="/configuracoes"
            element={
              <AppLayout>
                <Configuracoes />
              </AppLayout>
            }
          />
          <Route
            path="/financeiro"
            element={
              <AppLayout>
                <PaginaPlaceholder titulo="Financeiro" />
              </AppLayout>
            }
          />
          <Route
            path="/integracoes"
            element={
              <AppLayout>
                <PaginaPlaceholder titulo="Integrações" />
              </AppLayout>
            }
          />
          <Route
            path="/cupons"
            element={
              <AppLayout>
                <PaginaPlaceholder titulo="Cupons de Desconto" />
              </AppLayout>
            }
          />
          <Route
            path="/quiz"
            element={
              <AppLayout>
                <PaginaPlaceholder titulo="Quiz" />
              </AppLayout>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
