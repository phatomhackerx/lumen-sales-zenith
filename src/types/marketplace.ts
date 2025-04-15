export interface ProdutoMarketplace {
  id: string;
  nome: string;
  vendedor: string;
  preco: number;
  precoOriginal?: number;
  comissao: number;
  vendas: number;
  avaliacao: number;
  categoria: string;
  imagem: string;
  emDestaque: boolean;
  melhorComissao: boolean;
  maisVendido: boolean;
  nivelDificuldade?: 'iniciante' | 'intermediario' | 'avancado';
  tempoEntrega?: string;
}

export interface ProductCardHeaderProps {
  produto: ProdutoMarketplace;
}

export interface ProductCardContentProps {
  produto: ProdutoMarketplace;
}

export interface ProductCardFooterProps {
  produto: ProdutoMarketplace;
}
