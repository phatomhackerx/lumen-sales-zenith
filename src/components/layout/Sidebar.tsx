
import React from "react";
import { NavLink } from "react-router-dom";
import { 
  BarChart3, 
  ShoppingCart, 
  Package, 
  Repeat, 
  FileText, 
  Users, 
  Wallet, 
  Link, 
  Tag, 
  HelpCircle,
  ShoppingBag,
  Store,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface NavItem {
  title: string;
  href: string;
  icon: React.ElementType;
  badge?: string;
}

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const navItems: NavItem[] = [
  { title: "Dashboard", href: "/", icon: BarChart3 },
  { title: "Produtos", href: "/produtos", icon: Package },
  { 
    title: "Marketplace", 
    href: "/marketplace", 
    icon: Store, 
    badge: "New" 
  },
  { title: "Minhas Vendas", href: "/vendas", icon: ShoppingCart },
  { title: "Assinaturas", href: "/assinaturas", icon: Repeat },
  { title: "Relatórios", href: "/relatorios", icon: FileText },
  { title: "Afiliados", href: "/afiliados", icon: Users },
  { title: "Financeiro", href: "/financeiro", icon: Wallet },
  { title: "Integrações", href: "/integracoes", icon: Link },
  { title: "Cupons de Desconto", href: "/cupons", icon: Tag },
  { title: "Quiz", href: "/quiz", icon: HelpCircle },
];

export function Sidebar({ open, setOpen }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={cn(
          "bg-sidebar/95 backdrop-blur-xl h-screen fixed left-0 top-0 z-40 transition-all duration-300 ease-in-out border-r border-sidebar-border/50 flex flex-col",
          open ? "w-64" : "w-0 lg:w-20"
        )}
      >
        {/* Header */}
        <div className={cn(
          "h-16 flex items-center border-b border-sidebar-border/50 transition-all duration-300",
          open ? "justify-between px-6" : "justify-center px-2"
        )}>
          {open ? (
            <>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                NexusSales
              </span>
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-lg hover:bg-sidebar-accent transition-colors lg:hidden"
                aria-label="Fechar sidebar"
              >
                <X className="h-5 w-5" />
              </button>
            </>
          ) : (
            <span className="text-lg font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent hidden lg:block">
              NS
            </span>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4">
          <TooltipProvider delayDuration={0}>
            <ul className="space-y-1.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  {open ? (
                    <NavLink
                      to={item.href}
                      onClick={() => window.innerWidth < 1024 && setOpen(false)}
                      className={({ isActive }) =>
                        cn(
                          "flex items-center justify-between px-4 py-3 rounded-xl transition-all group relative overflow-hidden",
                          isActive
                            ? "bg-primary text-primary-foreground shadow-lg"
                            : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-foreground"
                        )
                      }
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className="h-5 w-5 flex-shrink-0" />
                        <span className="text-sm font-medium">{item.title}</span>
                      </div>
                      {item.badge && (
                        <span className="bg-emerald-500/20 text-emerald-500 text-xs px-2 py-0.5 rounded-full font-medium">
                          {item.badge}
                        </span>
                      )}
                    </NavLink>
                  ) : (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <NavLink
                          to={item.href}
                          className={({ isActive }) =>
                            cn(
                              "hidden lg:flex items-center justify-center w-12 h-12 rounded-xl transition-all relative",
                              isActive
                                ? "bg-primary text-primary-foreground shadow-lg"
                                : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-foreground"
                            )
                          }
                        >
                          <item.icon className="h-5 w-5" />
                          {item.badge && (
                            <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-500 rounded-full" />
                          )}
                        </NavLink>
                      </TooltipTrigger>
                      <TooltipContent side="right" className="flex items-center gap-2">
                        {item.title}
                        {item.badge && (
                          <span className="bg-emerald-500/20 text-emerald-500 text-xs px-1.5 py-0.5 rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </TooltipContent>
                    </Tooltip>
                  )}
                </li>
              ))}
            </ul>
          </TooltipProvider>
        </nav>
      </aside>
    </>
  );
}
