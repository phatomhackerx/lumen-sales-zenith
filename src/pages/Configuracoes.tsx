import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import {
  User,
  Bell,
  CreditCard,
  Shield,
  Palette,
  Globe,
  Mail,
  Key,
  Building2,
  Save
} from "lucide-react";

const Configuracoes = () => {
  const { toast } = useToast();
  const [notificacoes, setNotificacoes] = useState({
    email: true,
    push: false,
    sms: false,
    vendas: true,
    afiliados: true,
    marketing: false
  });

  const handleSaveProfile = () => {
    toast({
      title: "Perfil atualizado",
      description: "Suas informações foram salvas com sucesso.",
    });
  };

  const handleSaveNotifications = () => {
    toast({
      title: "Preferências salvas",
      description: "Suas configurações de notificação foram atualizadas.",
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold">Configurações</h1>
        <p className="text-muted-foreground mt-2">
          Gerencie as configurações da sua conta e preferências
        </p>
      </div>

      <Tabs defaultValue="perfil" className="space-y-6">
        <TabsList className="w-full justify-start overflow-x-auto flex-nowrap bg-muted/30">
          <TabsTrigger value="perfil" className="gap-2">
            <User className="h-4 w-4" />
            Perfil
          </TabsTrigger>
          <TabsTrigger value="empresa" className="gap-2">
            <Building2 className="h-4 w-4" />
            Empresa
          </TabsTrigger>
          <TabsTrigger value="notificacoes" className="gap-2">
            <Bell className="h-4 w-4" />
            Notificações
          </TabsTrigger>
          <TabsTrigger value="pagamento" className="gap-2">
            <CreditCard className="h-4 w-4" />
            Pagamento
          </TabsTrigger>
          <TabsTrigger value="seguranca" className="gap-2">
            <Shield className="h-4 w-4" />
            Segurança
          </TabsTrigger>
          <TabsTrigger value="aparencia" className="gap-2">
            <Palette className="h-4 w-4" />
            Aparência
          </TabsTrigger>
        </TabsList>

        <TabsContent value="perfil" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informações Pessoais</CardTitle>
              <CardDescription>
                Atualize suas informações pessoais e de contato
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome completo</Label>
                  <Input id="nome" placeholder="Seu nome" defaultValue="João Silva" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="seu@email.com" defaultValue="joao@exemplo.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="telefone">Telefone</Label>
                  <Input id="telefone" placeholder="(00) 00000-0000" defaultValue="(11) 99999-9999" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cpf">CPF</Label>
                  <Input id="cpf" placeholder="000.000.000-00" defaultValue="123.456.789-00" />
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Input id="bio" placeholder="Conte um pouco sobre você" />
              </div>

              <Button onClick={handleSaveProfile} className="gap-2">
                <Save className="h-4 w-4" />
                Salvar alterações
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="empresa" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informações da Empresa</CardTitle>
              <CardDescription>
                Configure os dados da sua empresa
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="razao-social">Razão Social</Label>
                  <Input id="razao-social" placeholder="Nome da empresa" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cnpj">CNPJ</Label>
                  <Input id="cnpj" placeholder="00.000.000/0000-00" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="endereco">Endereço</Label>
                  <Input id="endereco" placeholder="Rua, número" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cidade">Cidade</Label>
                  <Input id="cidade" placeholder="Cidade - UF" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="cep">CEP</Label>
                  <Input id="cep" placeholder="00000-000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="site">Website</Label>
                  <Input id="site" placeholder="https://seusite.com" />
                </div>
              </div>

              <Button className="gap-2">
                <Save className="h-4 w-4" />
                Salvar informações
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notificacoes" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Preferências de Notificação</CardTitle>
              <CardDescription>
                Configure como você deseja receber notificações
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Email</Label>
                    <p className="text-sm text-muted-foreground">
                      Receber notificações por email
                    </p>
                  </div>
                  <Switch 
                    checked={notificacoes.email}
                    onCheckedChange={(checked) => setNotificacoes({...notificacoes, email: checked})}
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">Push</Label>
                    <p className="text-sm text-muted-foreground">
                      Receber notificações push no navegador
                    </p>
                  </div>
                  <Switch 
                    checked={notificacoes.push}
                    onCheckedChange={(checked) => setNotificacoes({...notificacoes, push: checked})}
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label className="text-base">SMS</Label>
                    <p className="text-sm text-muted-foreground">
                      Receber notificações por SMS
                    </p>
                  </div>
                  <Switch 
                    checked={notificacoes.sms}
                    onCheckedChange={(checked) => setNotificacoes({...notificacoes, sms: checked})}
                  />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">Tipos de Notificação</h4>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Vendas</Label>
                    <p className="text-sm text-muted-foreground">
                      Notificações sobre novas vendas
                    </p>
                  </div>
                  <Switch 
                    checked={notificacoes.vendas}
                    onCheckedChange={(checked) => setNotificacoes({...notificacoes, vendas: checked})}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Afiliados</Label>
                    <p className="text-sm text-muted-foreground">
                      Notificações sobre atividades de afiliados
                    </p>
                  </div>
                  <Switch 
                    checked={notificacoes.afiliados}
                    onCheckedChange={(checked) => setNotificacoes({...notificacoes, afiliados: checked})}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Marketing</Label>
                    <p className="text-sm text-muted-foreground">
                      Novidades e atualizações da plataforma
                    </p>
                  </div>
                  <Switch 
                    checked={notificacoes.marketing}
                    onCheckedChange={(checked) => setNotificacoes({...notificacoes, marketing: checked})}
                  />
                </div>
              </div>

              <Button onClick={handleSaveNotifications} className="gap-2">
                <Save className="h-4 w-4" />
                Salvar preferências
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pagamento" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Métodos de Pagamento</CardTitle>
              <CardDescription>
                Gerencie suas formas de pagamento
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <CreditCard className="h-8 w-8 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Cartão •••• 4242</p>
                      <p className="text-sm text-muted-foreground">Expira em 12/2025</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Editar</Button>
                </div>
              </div>

              <Button className="w-full" variant="outline">
                Adicionar método de pagamento
              </Button>

              <Separator />

              <div className="space-y-2">
                <h4 className="font-medium">Chaves PIX</h4>
                <div className="space-y-2">
                  <Label htmlFor="pix">Chave PIX (Email, CPF ou Telefone)</Label>
                  <Input id="pix" placeholder="sua-chave@pix.com" />
                </div>
              </div>

              <Button className="gap-2">
                <Save className="h-4 w-4" />
                Salvar configurações
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="seguranca" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Segurança</CardTitle>
              <CardDescription>
                Mantenha sua conta segura
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="senha-atual">Senha atual</Label>
                <Input id="senha-atual" type="password" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="nova-senha">Nova senha</Label>
                <Input id="nova-senha" type="password" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmar-senha">Confirmar nova senha</Label>
                <Input id="confirmar-senha" type="password" />
              </div>

              <Button className="gap-2">
                <Key className="h-4 w-4" />
                Alterar senha
              </Button>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Autenticação de dois fatores</Label>
                  <p className="text-sm text-muted-foreground">
                    Adicione uma camada extra de segurança
                  </p>
                </div>
                <Switch />
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">Sessões ativas</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">Chrome - Windows</p>
                      <p className="text-sm text-muted-foreground">São Paulo, Brasil • Agora</p>
                    </div>
                    <Button variant="outline" size="sm">Encerrar</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="aparencia" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Preferências de Aparência</CardTitle>
              <CardDescription>
                Personalize a aparência da plataforma
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <Label>Tema</Label>
                <div className="grid grid-cols-3 gap-4">
                  <button className="border-2 border-primary rounded-lg p-4 text-center hover:bg-secondary/50 transition-colors">
                    <div className="w-full h-20 bg-gradient-to-br from-background to-secondary rounded mb-2"></div>
                    <p className="font-medium">Escuro</p>
                  </button>
                  <button className="border rounded-lg p-4 text-center hover:bg-secondary/50 transition-colors">
                    <div className="w-full h-20 bg-gradient-to-br from-white to-gray-200 rounded mb-2"></div>
                    <p className="font-medium">Claro</p>
                  </button>
                  <button className="border rounded-lg p-4 text-center hover:bg-secondary/50 transition-colors">
                    <div className="w-full h-20 bg-gradient-to-br from-background via-white to-secondary rounded mb-2"></div>
                    <p className="font-medium">Auto</p>
                  </button>
                </div>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Animações</Label>
                  <p className="text-sm text-muted-foreground">
                    Ativar animações na interface
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Modo compacto</Label>
                  <p className="text-sm text-muted-foreground">
                    Reduzir espaçamentos na interface
                  </p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Configuracoes;
