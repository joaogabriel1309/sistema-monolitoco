export interface ProcessaPagamentoEntradaDto{
    ordenaId: string;
    quantidade: number;
}

export interface ProcessaPagamentoSaidaDto{
    IdTransacao: string;
    ordenaId: string;
    quantidade: number;
    estados: string;
    criaId: Date;
    atualizaId: Date;
}