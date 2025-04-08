
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { RocketIcon } from "lucide-react"

interface PaginaPlaceholderProps {
  titulo: string;
}

const PaginaPlaceholder = ({ titulo }: PaginaPlaceholderProps) => {
  return (
    <div className="animate-fade-in">
      <h1 className="text-3xl font-bold mb-6">{titulo}</h1>
      
      <Alert className="bg-secondary border-primary/30">
        <RocketIcon className="h-4 w-4" />
        <AlertTitle>Página em desenvolvimento</AlertTitle>
        <AlertDescription>
          Esta funcionalidade será implementada em breve. Estamos trabalhando para oferecer a melhor experiência possível.
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default PaginaPlaceholder;
