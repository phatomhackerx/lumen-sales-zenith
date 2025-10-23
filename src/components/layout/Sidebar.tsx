
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
  Store,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";

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
      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}
      
      <aside
        className={cn(
          "bg-sidebar/95 backdrop-blur-xl h-screen fixed left-0 top-0 z-40 transition-all duration-300 ease-in-out border-r border-sidebar-border/50 flex flex-col",
          open ? "w-64 translate-x-0" : "w-64 -translate-x-full lg:w-20 lg:translate-x-0"
        )}
      >
        {/* Header */}
        <div className="h-16 flex items-center justify-between px-5 border-b border-sidebar-border/50 shrink-0">
          <span className={cn(
            "text-xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent transition-opacity",
            !open && "lg:opacity-0 lg:hidden"
          )}>
            NexusSales
          </span>
          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-lg hover:bg-sidebar-accent/50 lg:hidden transition-colors"
            aria-label="Fechar menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-3">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-3 px-4 py-3 rounded-xl transition-all group relative",
                      isActive
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-foreground"
                    )
                  }
                  title={item.title}
                >
                  {({ isActive }) => (
                    <>
                      <item.icon className={cn(
                        "h-5 w-5 shrink-0 transition-transform group-hover:scale-110",
                        !open && "lg:mx-auto"
                      )} />
                      <span className={cn(
                        "font-medium transition-opacity",
                        !open && "lg:opacity-0 lg:hidden"
                      )}>
                        {item.title}
                      </span>
                      {item.badge && (
                        <span className={cn(
                          "ml-auto bg-emerald-500/20 text-emerald-400 text-xs px-2 py-0.5 rounded-full font-semibold",
                          !open && "lg:hidden"
                        )}>
                          {item.badge}
                        </span>
                      )}
                      
                      {/* Tooltip for collapsed state */}
                      {!open && (
                        <span className="hidden lg:block absolute left-full ml-2 px-3 py-2 bg-card rounded-lg shadow-lg text-sm font-medium opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-opacity z-50">
                          {item.title}
                          {item.badge && (
                            <span className="ml-2 bg-emerald-500/20 text-emerald-400 text-xs px-2 py-0.5 rounded-full">
                              {item.badge}
                            </span>
                          )}
                        </span>
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-3 border-t border-sidebar-border/50 shrink-0">
          <div className={cn(
            "px-4 py-3 rounded-xl bg-sidebar-accent/30 transition-all",
            !open && "lg:px-2"
          )}>
            <p className={cn(
              "text-xs text-muted-foreground transition-opacity",
              !open && "lg:opacity-0 lg:hidden"
            )}>
              © 2024 NexusSales
            </p>
            <p className={cn(
              "text-xs text-muted-foreground mt-1 transition-opacity",
              !open && "lg:opacity-0 lg:hidden"
            )}>
              v1.0.0
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}

