export interface adicionarProdutoEntradaDto{
    id?: string;
    nome: string;
    descricao: string;
    precocompra: number;
    estoque: number;
}

export interface adicionarProdutoSaidaDto{
    id: string;
    nome: string;
    descricao: string;
    precocompra: number;
    estoque: number;
    criaId: Date;
    AtualizaId: Date;
}