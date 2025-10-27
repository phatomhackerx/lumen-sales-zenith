import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, HelpCircle, BarChart3, Users } from "lucide-react";

const quizzes = [
  {
    id: "1",
    titulo: "Qual produto é ideal para você?",
    descricao: "Ajude seus clientes a encontrarem o produto perfeito",
    perguntas: 5,
    respostas: 234,
    conversao: 32,
    status: "ativo",
  },
  {
    id: "2",
    titulo: "Descubra seu perfil de investidor",
    descricao: "Quiz interativo para categorizar clientes",
    perguntas: 8,
    respostas: 456,
    conversao: 28,
    status: "ativo",
  },
  {
    id: "3",
    titulo: "Teste seus conhecimentos em Marketing",
    descricao: "Engaje sua audiência com um quiz educativo",
    perguntas: 10,
    respostas: 123,
    conversao: 15,
    status: "inativo",
  },
];

const Quiz = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div>
          <h1 className="text-3xl font-bold">Quiz Interativos</h1>
          <p className="text-muted-foreground mt-1">
            Crie quizzes para engajar e converter sua audiência
          </p>
        </div>

        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Novo Quiz
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <HelpCircle className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Quizzes Ativos</p>
              <p className="text-2xl font-bold">8</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-500/10 rounded-lg">
              <Users className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Respostas Totais</p>
              <p className="text-2xl font-bold">2,847</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-emerald-500/10 rounded-lg">
              <BarChart3 className="h-6 w-6 text-emerald-500" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Taxa de Conversão</p>
              <p className="text-2xl font-bold">25.4%</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quizzes.map((quiz) => (
          <Card key={quiz.id} className="hover:shadow-lg transition-all">
            <CardHeader>
              <div className="flex items-start justify-between">
                <HelpCircle className="h-8 w-8 text-primary" />
                <Badge variant={quiz.status === "ativo" ? "default" : "secondary"}>
                  {quiz.status.charAt(0).toUpperCase() + quiz.status.slice(1)}
                </Badge>
              </div>
              <CardTitle className="mt-4">{quiz.titulo}</CardTitle>
              <CardDescription>{quiz.descricao}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="text-2xl font-bold">{quiz.perguntas}</p>
                    <p className="text-xs text-muted-foreground">Perguntas</p>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="text-2xl font-bold">{quiz.respostas}</p>
                    <p className="text-xs text-muted-foreground">Respostas</p>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="text-2xl font-bold">{quiz.conversao}%</p>
                    <p className="text-xs text-muted-foreground">Conversão</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">
                    Editar
                  </Button>
                  <Button className="flex-1">
                    Ver Resultados
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Como funcionam os Quizzes?</CardTitle>
          <CardDescription>
            Os quizzes são uma ferramenta poderosa para engajar sua audiência
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">1. Engajamento</h4>
              <p className="text-sm text-muted-foreground">
                Crie quizzes interativos que prendem a atenção dos visitantes e os mantêm engajados com seu conteúdo.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">2. Qualificação</h4>
              <p className="text-sm text-muted-foreground">
                Use as respostas para entender melhor seu público e qualificar leads de forma mais eficiente.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">3. Personalização</h4>
              <p className="text-sm text-muted-foreground">
                Ofereça recomendações personalizadas de produtos com base nas respostas do quiz.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">4. Conversão</h4>
              <p className="text-sm text-muted-foreground">
                Transforme visitantes em clientes ao direcionar ofertas relevantes após o quiz.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Quiz;