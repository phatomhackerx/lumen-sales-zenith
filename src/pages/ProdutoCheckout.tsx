import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Save, Eye, Monitor, Smartphone, Tablet } from "lucide-react";
import { CheckoutBuilder } from "@/components/produtos/CheckoutBuilder";

export default function ProdutoCheckout() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [previewDevice, setPreviewDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");

  const handleSave = (config: any) => {
    toast({
      title: "Checkout salvo!",
      description: "As configurações foram salvas com sucesso.",
    });
  };

  const getPreviewWidth = () => {
    switch (previewDevice) {
      case "mobile": return "max-w-[375px]";
      case "tablet": return "max-w-[768px]";
      default: return "max-w-full";
    }
  };

  return (
    <div className="animate-fade-in h-screen flex flex-col">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate(`/produtos/${id}/editar`)}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold">Checkout Builder</h1>
              <p className="text-sm text-muted-foreground">
                Personalize cada detalhe do checkout do seu produto
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 p-1 bg-muted rounded-lg">
              <Button
                variant={previewDevice === "desktop" ? "secondary" : "ghost"}
                size="icon"
                onClick={() => setPreviewDevice("desktop")}
              >
                <Monitor className="h-4 w-4" />
              </Button>
              <Button
                variant={previewDevice === "tablet" ? "secondary" : "ghost"}
                size="icon"
                onClick={() => setPreviewDevice("tablet")}
              >
                <Tablet className="h-4 w-4" />
              </Button>
              <Button
                variant={previewDevice === "mobile" ? "secondary" : "ghost"}
                size="icon"
                onClick={() => setPreviewDevice("mobile")}
              >
                <Smartphone className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          {/* Editor - Lado Esquerdo */}
          <div className="border-r overflow-y-auto p-6 bg-muted/20">
            <CheckoutBuilder produtoId={id || ""} onSave={handleSave} />
          </div>

          {/* Preview - Lado Direito */}
          <div className="overflow-y-auto p-6 bg-gradient-to-br from-background to-muted/30">
            <div className="flex items-center justify-center min-h-full">
              <div className={`w-full ${getPreviewWidth()} transition-all duration-300`}>
                <Card className="shadow-2xl">
                  <CardContent className="p-0">
                    <div className="aspect-[9/16] md:aspect-video bg-gradient-to-br from-background to-accent/10 rounded-lg flex items-center justify-center">
                      <div className="text-center space-y-4 p-8">
                        <Eye className="h-16 w-16 mx-auto text-muted-foreground" />
                        <p className="text-lg font-medium">Preview do Checkout</p>
                        <p className="text-sm text-muted-foreground max-w-md">
                          Configure os elementos no painel à esquerda para ver as alterações em tempo real
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
