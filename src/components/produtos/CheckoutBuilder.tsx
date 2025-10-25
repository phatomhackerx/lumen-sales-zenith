import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Settings, 
  Palette, 
  Layout, 
  CreditCard,
  Gift,
  ArrowRight,
  Plus,
  Trash,
  Eye,
  Save
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";

interface CheckoutConfig {
  id: string;
  nome: string;
  layout: "simples" | "completo" | "minimalista";
  cores: {
    primaria: string;
    secundaria: string;
    fundo: string;
    texto: string;
  };
  elementos: {
    logo: boolean;
    depoimentos: boolean;
    garantia: boolean;
    contador: boolean;
    urgencia: boolean;
  };
  upsell: {
    ativo: boolean;
    produtos: string[];
  };
  pagamento: {
    pix: boolean;
    cartao: boolean;
    boleto: boolean;
  };
  camposPersonalizados: Array<{
    nome: string;
    tipo: string;
    obrigatorio: boolean;
  }>;
}

interface CheckoutBuilderProps {
  produtoId: string;
  onSave?: (config: CheckoutConfig) => void;
}

export const CheckoutBuilder = ({ produtoId, onSave }: CheckoutBuilderProps) => {
  const { toast } = useToast();
  const [config, setConfig] = useState<CheckoutConfig>({
    id: Date.now().toString(),
    nome: "Checkout Padrão",
    layout: "completo",
    cores: {
      primaria: "#6366f1",
      secundaria: "#8b5cf6",
      fundo: "#ffffff",
      texto: "#1f2937"
    },
    elementos: {
      logo: true,
      depoimentos: true,
      garantia: true,
      contador: true,
      urgencia: false
    },
    upsell: {
      ativo: false,
      produtos: []
    },
    pagamento: {
      pix: true,
      cartao: true,
      boleto: false
    },
    camposPersonalizados: []
  });

  const [novoCampo, setNovoCampo] = useState({ nome: "", tipo: "text", obrigatorio: false });

  const handleSave = () => {
    onSave?.(config);
    toast({
      title: "Checkout salvo!",
      description: "As configurações do checkout foram salvas com sucesso.",
    });
  };

  const adicionarCampo = () => {
    if (novoCampo.nome.trim()) {
      setConfig({
        ...config,
        camposPersonalizados: [...config.camposPersonalizados, novoCampo]
      });
      setNovoCampo({ nome: "", tipo: "text", obrigatorio: false });
    }
  };

  const removerCampo = (index: number) => {
    setConfig({
      ...config,
      camposPersonalizados: config.camposPersonalizados.filter((_, i) => i !== index)
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Checkout Builder</h2>
          <p className="text-muted-foreground">Personalize cada detalhe do seu checkout</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Eye className="mr-2 h-4 w-4" />
            Preview
          </Button>
          <Button onClick={handleSave}>
            <Save className="mr-2 h-4 w-4" />
            Salvar
          </Button>
        </div>
      </div>

      <Tabs defaultValue="layout" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="layout">
            <Layout className="mr-2 h-4 w-4" />
            Layout
          </TabsTrigger>
          <TabsTrigger value="cores">
            <Palette className="mr-2 h-4 w-4" />
            Cores
          </TabsTrigger>
          <TabsTrigger value="elementos">
            <Settings className="mr-2 h-4 w-4" />
            Elementos
          </TabsTrigger>
          <TabsTrigger value="upsell">
            <Gift className="mr-2 h-4 w-4" />
            Upsell
          </TabsTrigger>
          <TabsTrigger value="pagamento">
            <CreditCard className="mr-2 h-4 w-4" />
            Pagamento
          </TabsTrigger>
        </TabsList>

        <TabsContent value="layout" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Estilo do Layout</CardTitle>
              <CardDescription>Escolha o layout do seu checkout</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {["simples", "completo", "minimalista"].map((layout) => (
                  <Card 
                    key={layout}
                    className={`cursor-pointer transition-all ${
                      config.layout === layout ? "ring-2 ring-primary" : ""
                    }`}
                    onClick={() => setConfig({ ...config, layout: layout as any })}
                  >
                    <CardContent className="p-4">
                      <div className="aspect-video bg-muted rounded mb-2 flex items-center justify-center">
                        <Layout className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <p className="font-medium capitalize">{layout}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="space-y-4">
                <div>
                  <Label>Nome do Checkout</Label>
                  <Input 
                    value={config.nome}
                    onChange={(e) => setConfig({ ...config, nome: e.target.value })}
                    placeholder="Ex: Checkout de Vendas"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cores" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Personalização de Cores</CardTitle>
              <CardDescription>Defina a paleta de cores do checkout</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Cor Primária</Label>
                  <div className="flex gap-2 items-center">
                    <Input 
                      type="color"
                      value={config.cores.primaria}
                      onChange={(e) => setConfig({
                        ...config,
                        cores: { ...config.cores, primaria: e.target.value }
                      })}
                      className="w-16 h-10"
                    />
                    <Input 
                      value={config.cores.primaria}
                      onChange={(e) => setConfig({
                        ...config,
                        cores: { ...config.cores, primaria: e.target.value }
                      })}
                    />
                  </div>
                </div>

                <div>
                  <Label>Cor Secundária</Label>
                  <div className="flex gap-2 items-center">
                    <Input 
                      type="color"
                      value={config.cores.secundaria}
                      onChange={(e) => setConfig({
                        ...config,
                        cores: { ...config.cores, secundaria: e.target.value }
                      })}
                      className="w-16 h-10"
                    />
                    <Input 
                      value={config.cores.secundaria}
                      onChange={(e) => setConfig({
                        ...config,
                        cores: { ...config.cores, secundaria: e.target.value }
                      })}
                    />
                  </div>
                </div>

                <div>
                  <Label>Cor de Fundo</Label>
                  <div className="flex gap-2 items-center">
                    <Input 
                      type="color"
                      value={config.cores.fundo}
                      onChange={(e) => setConfig({
                        ...config,
                        cores: { ...config.cores, fundo: e.target.value }
                      })}
                      className="w-16 h-10"
                    />
                    <Input 
                      value={config.cores.fundo}
                      onChange={(e) => setConfig({
                        ...config,
                        cores: { ...config.cores, fundo: e.target.value }
                      })}
                    />
                  </div>
                </div>

                <div>
                  <Label>Cor do Texto</Label>
                  <div className="flex gap-2 items-center">
                    <Input 
                      type="color"
                      value={config.cores.texto}
                      onChange={(e) => setConfig({
                        ...config,
                        cores: { ...config.cores, texto: e.target.value }
                      })}
                      className="w-16 h-10"
                    />
                    <Input 
                      value={config.cores.texto}
                      onChange={(e) => setConfig({
                        ...config,
                        cores: { ...config.cores, texto: e.target.value }
                      })}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="elementos" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Elementos do Checkout</CardTitle>
              <CardDescription>Escolha quais elementos exibir</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(config.elementos).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <Label className="capitalize">{key}</Label>
                  <Switch 
                    checked={value}
                    onCheckedChange={(checked) => setConfig({
                      ...config,
                      elementos: { ...config.elementos, [key]: checked }
                    })}
                  />
                </div>
              ))}

              <div className="pt-4 border-t">
                <h4 className="font-medium mb-4">Campos Personalizados</h4>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <Input 
                      placeholder="Nome do campo"
                      value={novoCampo.nome}
                      onChange={(e) => setNovoCampo({ ...novoCampo, nome: e.target.value })}
                    />
                    <Button onClick={adicionarCampo}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="space-y-2">
                    {config.camposPersonalizados.map((campo, index) => (
                      <div key={index} className="flex items-center justify-between p-2 border rounded">
                        <span className="text-sm">{campo.nome}</span>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => removerCampo(index)}
                        >
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="upsell" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Configuração de Upsell</CardTitle>
              <CardDescription>Aumente seu ticket médio com ofertas complementares</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Ativar Upsell</Label>
                  <p className="text-sm text-muted-foreground">
                    Ofereça produtos complementares após a compra
                  </p>
                </div>
                <Switch 
                  checked={config.upsell.ativo}
                  onCheckedChange={(checked) => setConfig({
                    ...config,
                    upsell: { ...config.upsell, ativo: checked }
                  })}
                />
              </div>

              {config.upsell.ativo && (
                <div className="pt-4 space-y-4">
                  <div>
                    <Label>Produtos para Upsell</Label>
                    <p className="text-sm text-muted-foreground mb-2">
                      Selecione produtos para oferecer como upsell
                    </p>
                    <Button variant="outline" className="w-full">
                      <Plus className="mr-2 h-4 w-4" />
                      Adicionar Produto
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pagamento" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Métodos de Pagamento</CardTitle>
              <CardDescription>Configure os métodos de pagamento aceitos</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>PIX</Label>
                  <p className="text-sm text-muted-foreground">Pagamento instantâneo</p>
                </div>
                <Switch 
                  checked={config.pagamento.pix}
                  onCheckedChange={(checked) => setConfig({
                    ...config,
                    pagamento: { ...config.pagamento, pix: checked }
                  })}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label>Cartão de Crédito</Label>
                  <p className="text-sm text-muted-foreground">Parcelamento disponível</p>
                </div>
                <Switch 
                  checked={config.pagamento.cartao}
                  onCheckedChange={(checked) => setConfig({
                    ...config,
                    pagamento: { ...config.pagamento, cartao: checked }
                  })}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label>Boleto</Label>
                  <p className="text-sm text-muted-foreground">Aprovação em até 2 dias úteis</p>
                </div>
                <Switch 
                  checked={config.pagamento.boleto}
                  onCheckedChange={(checked) => setConfig({
                    ...config,
                    pagamento: { ...config.pagamento, boleto: checked }
                  })}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
