import Id from "../../@compartilhada/dominio/valor-do-objetos/id.valor-do-objetos";

export interface AdicionaClienteEntradaDto{
    id: Id;
    nome: string;
    email: string;
    endereco: string;
}

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

export interface ClienteAdmFacadeInterface{
    adiciona(entrada: AdicionaClienteEntradaDto): Promise<void>;
    procura(entrada: ProcuraClienteEntradaDto): Promise<ProcuraClienteSaidaDto>;
}