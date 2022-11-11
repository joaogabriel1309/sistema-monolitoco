export interface ProcuraClienteEntradaDto{
    id: string;
}

export interface ProcuraClienteSaidaDto{
    id: string;
    nome: string;
    email: string;
    endereco: string;
    criaId: Date;
    atualizaId: Date;
}