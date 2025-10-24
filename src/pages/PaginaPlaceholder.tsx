
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RocketIcon, Clock, Settings, Zap } from "lucide-react"

interface PaginaPlaceholderProps {
  titulo: string;
}

const PaginaPlaceholder = ({ titulo }: PaginaPlaceholderProps) => {
  return (
    <div className="animate-fade-in space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">{titulo}</h1>
        <p className="text-muted-foreground">Esta funcionalidade está em desenvolvimento</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="dashboard-card">
          <CardHeader>
            <RocketIcon className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>Em Desenvolvimento</CardTitle>
            <CardDescription>
              Nossa equipe está trabalhando para trazer esta funcionalidade em breve
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Estamos construindo recursos incríveis para melhorar sua experiência na plataforma.
            </p>
          </CardContent>
        </Card>

        <Card className="dashboard-card">
          <CardHeader>
            <Clock className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>Lançamento em Breve</CardTitle>
            <CardDescription>
              Fique atento às próximas atualizações
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Notificaremos você assim que esta funcionalidade estiver disponível.
            </p>
          </CardContent>
        </Card>

        <Card className="dashboard-card">
          <CardHeader>
            <Settings className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>Configuração Avançada</CardTitle>
            <CardDescription>
              Recursos personalizáveis
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Esta seção terá configurações avançadas para personalizar sua experiência.
            </p>
          </CardContent>
        </Card>

        <Card className="dashboard-card">
          <CardHeader>
            <Zap className="h-8 w-8 mb-2 text-primary" />
            <CardTitle>Alto Desempenho</CardTitle>
            <CardDescription>
              Otimizado para velocidade
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Desenvolvido com as melhores práticas para garantir máxima performance.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PaginaPlaceholder;
