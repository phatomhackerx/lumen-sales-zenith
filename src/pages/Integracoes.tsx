import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { 
  Zap, 
  Mail, 
  MessageSquare, 
  CreditCard, 
  ShoppingBag,
  BarChart3,
  Webhook,
  ExternalLink,
  CheckCircle2,
  Settings
} from "lucide-react";

const integracoes = [
  {
    id: "stripe",
    nome: "Stripe",
    descricao: "Processamento de pagamentos online",
    icon: CreditCard,
    status: "ativa",
    categoria: "Pagamentos",
  },
  {
    id: "mailchimp",
    nome: "Mailchimp",
    descricao: "Email marketing e automação",
    icon: Mail,
    status: "inativa",
    categoria: "Marketing",
  },
  {
    id: "zapier",
    nome: "Zapier",
    descricao: "Automação de workflows",
    icon: Zap,
    status: "ativa",
    categoria: "Automação",
  },
  {
    id: "whatsapp",
    nome: "WhatsApp Business",
    descricao: "Comunicação com clientes",
    icon: MessageSquare,
    status: "inativa",
    categoria: "Comunicação",
  },
  {
    id: "analytics",
    nome: "Google Analytics",
    descricao: "Análise de dados e métricas",
    icon: BarChart3,
    status: "ativa",
    categoria: "Analytics",
  },
  {
    id: "shopify",
    nome: "Shopify",
    descricao: "Integração com e-commerce",
    icon: ShoppingBag,
    status: "inativa",
    categoria: "E-commerce",
  },
];

const Integracoes = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div>
          <h1 className="text-3xl font-bold">Integrações</h1>
          <p className="text-muted-foreground mt-1">
            Conecte suas ferramentas favoritas
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {integracoes.map((integracao) => {
          const Icon = integracao.icon;
          return (
            <Card key={integracao.id} className="hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{integracao.nome}</CardTitle>
                      <Badge variant="outline" className="mt-1">
                        {integracao.categoria}
                      </Badge>
                    </div>
                  </div>
                  {integracao.status === "ativa" && (
                    <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  )}
                </div>
                <CardDescription className="mt-2">
                  {integracao.descricao}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Switch 
                      id={`switch-${integracao.id}`}
                      checked={integracao.status === "ativa"}
                    />
                    <Label htmlFor={`switch-${integracao.id}`}>
                      {integracao.status === "ativa" ? "Ativa" : "Inativa"}
                    </Label>
                  </div>
                  <Button variant="outline" size="sm">
                    <Settings className="h-4 w-4 mr-2" />
                    Configurar
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <Webhook className="h-6 w-6" />
            <div>
              <CardTitle>Webhooks</CardTitle>
              <CardDescription>
                Configure webhooks para receber eventos em tempo real
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="webhook-url">URL do Webhook</Label>
            <div className="flex gap-2">
              <Input 
                id="webhook-url" 
                placeholder="https://seu-site.com/webhook" 
                className="flex-1"
              />
              <Button>
                <ExternalLink className="h-4 w-4 mr-2" />
                Testar
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Eventos</Label>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium">Nova Venda</p>
                  <p className="text-sm text-muted-foreground">Disparado quando uma nova venda é realizada</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium">Novo Afiliado</p>
                  <p className="text-sm text-muted-foreground">Disparado quando um novo afiliado se cadastra</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium">Pagamento Aprovado</p>
                  <p className="text-sm text-muted-foreground">Disparado quando um pagamento é confirmado</p>
                </div>
                <Switch />
              </div>
            </div>
          </div>

          <Button>Salvar Webhooks</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Integracoes;