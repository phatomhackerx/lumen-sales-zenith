
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import Dashboard from "./pages/Dashboard";
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
                <PaginaPlaceholder titulo="Produtos" />
              </AppLayout>
            }
          />
          <Route
            path="/vendas"
            element={
              <AppLayout>
                <PaginaPlaceholder titulo="Minhas Vendas" />
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
                <PaginaPlaceholder titulo="Relatórios" />
              </AppLayout>
            }
          />
          <Route
            path="/afiliados"
            element={
              <AppLayout>
                <PaginaPlaceholder titulo="Afiliados" />
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
