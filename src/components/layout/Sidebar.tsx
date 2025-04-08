
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
  Store
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
    <div
      className={cn(
        "bg-sidebar h-screen fixed left-0 top-0 z-40 transition-all duration-300 ease-in-out border-r border-sidebar-border",
        open ? "w-64" : "w-0 -translate-x-full"
      )}
    >
      <div className="h-16 flex items-center justify-between px-6 border-b border-sidebar-border">
        <span className="text-xl font-bold">NexusSales</span>
        <button
          onClick={() => setOpen(false)}
          className="p-2 rounded-md hover:bg-sidebar-accent lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <nav className="p-4">
        <ul className="space-y-1.5">
          {navItems.map((item) => (
            <li key={item.href}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "flex items-center justify-between px-3 py-2.5 rounded-md transition-colors",
                    isActive
                      ? "bg-sidebar-primary text-sidebar-primary-foreground font-medium"
                      : "text-sidebar-foreground hover:bg-sidebar-accent"
                  )
                }
              >
                <div className="flex items-center gap-3">
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </div>
                {item.badge && (
                  <span className="bg-primary/20 text-primary text-xs px-1.5 py-0.5 rounded-full font-medium">
                    {item.badge}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
