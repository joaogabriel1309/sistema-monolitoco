//import Id from "../../../../@compartilhada/dominio/valor-do-objetos/id.valor-do-objetos";

export interface AdcionaClienteEntradaDto{
    id?: string,
    nome: string,
    email: string,
    endereco: string,
}

export interface AdcionaClienteSaidaDto {
    id: string,
    nome: string,
    email: string;
    endereco: string,
    criaId: Date,
    atualizaId: Date,
}