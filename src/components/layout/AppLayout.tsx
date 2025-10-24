
import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { StarfieldBackground } from "./StarfieldBackground";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isMobile = useIsMobile();

  // On mobile/tablet, sidebar starts closed; on desktop, starts open
  React.useEffect(() => {
    setSidebarOpen(!isMobile);
  }, [isMobile]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen w-full bg-background overflow-hidden relative">
      <StarfieldBackground />
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      
      <div className={cn(
        "flex flex-col flex-1 w-full overflow-hidden relative z-10 transition-all duration-300",
        sidebarOpen ? "lg:ml-64" : "lg:ml-20"
      )}>
        {/* Header */}
        <header className="h-16 flex items-center px-4 sm:px-6 border-b border-border/50 backdrop-blur-xl bg-background/50 sticky top-0 z-20">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-secondary/80 transition-colors"
            aria-label="Alternar menu lateral"
          >
            <Menu className="h-5 w-5" />
          </button>
          <h1 className="text-lg sm:text-xl font-bold ml-4 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            Plataforma de Vendas
          </h1>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>

      <ScrollToTop />
    </div>
  );
}

