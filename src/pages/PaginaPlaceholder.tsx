
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card } from "@/components/ui/card"
import { RocketIcon, Sparkles, Zap, Code } from "lucide-react"

interface PaginaPlaceholderProps {
  titulo: string;
}

const PaginaPlaceholder = ({ titulo }: PaginaPlaceholderProps) => {
  return (
    <div className="animate-fade-in space-y-6">
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">{titulo}</h1>
        <p className="text-muted-foreground">Esta seção estará disponível em breve</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6 hover:scale-105 transition-transform">
          <Sparkles className="h-10 w-10 mb-3 text-primary" />
          <h3 className="font-semibold mb-2">Em Desenvolvimento</h3>
          <p className="text-sm text-muted-foreground">
            Estamos trabalhando nesta funcionalidade
          </p>
        </Card>
        
        <Card className="p-6 hover:scale-105 transition-transform">
          <Zap className="h-10 w-10 mb-3 text-primary" />
          <h3 className="font-semibold mb-2">Recursos Avançados</h3>
          <p className="text-sm text-muted-foreground">
            Ferramentas poderosas em breve
          </p>
        </Card>
        
        <Card className="p-6 hover:scale-105 transition-transform">
          <Code className="h-10 w-10 mb-3 text-primary" />
          <h3 className="font-semibold mb-2">Integração Total</h3>
          <p className="text-sm text-muted-foreground">
            Conecte com suas plataformas favoritas
          </p>
        </Card>
      </div>
      
      <Alert className="bg-card/50 backdrop-blur-sm border-primary/20">
        <RocketIcon className="h-5 w-5" />
        <AlertTitle className="text-lg">Aguarde Novidades!</AlertTitle>
        <AlertDescription className="text-base mt-2">
          Esta funcionalidade será implementada em breve. Estamos trabalhando para oferecer a melhor experiência possível com recursos de última geração.
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default PaginaPlaceholder;

