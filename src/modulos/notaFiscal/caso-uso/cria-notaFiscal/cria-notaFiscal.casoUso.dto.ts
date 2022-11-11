export interface ProcuraNotaFiscalEntradaDto{
    id: string;
}

export interface ProcuraNotaFiscalSaidaDto{
    id: string;
    nome: string;
    documento: string;
    endereco: string;
    // endereco: {
    //     rua: string;
    //     numbero: number;
    //     complemento: string;
    //     cidade: string;
    //     estado: string;
    //     cep: string;
    // }
    itens: string;
    // itens:{
    //     id: string;
    //     nome: string;
    //     preco: number;        
    // }[];
    total: number;
    criaId: Date;
    preco: number;
}