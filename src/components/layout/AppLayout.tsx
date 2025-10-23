
import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { StarfieldBackground } from "./StarfieldBackground";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { cn } from "@/lib/utils";

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const isMobile = useIsMobile();

  // On mobile, sidebar is closed by default
  React.useEffect(() => {
    if (isMobile) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
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
        <header className="h-16 flex items-center px-4 sm:px-6 border-b border-border/50 backdrop-blur-xl bg-background/50 shrink-0">
          <button
            onClick={toggleSidebar}
            className="p-2.5 rounded-xl hover:bg-secondary/80 transition-all hover:scale-105 active:scale-95"
            aria-label="Toggle sidebar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <h1 className="text-lg sm:text-xl font-bold ml-3 sm:ml-4 truncate">Plataforma de Vendas</h1>
        </header>
        <main className="flex-1 overflow-y-auto px-4 py-5 sm:p-6 lg:p-8">
          <div className="max-w-[1600px] mx-auto">
            {children}
          </div>
        </main>
        <ScrollToTop />
      </div>
    </div>
  );
}

