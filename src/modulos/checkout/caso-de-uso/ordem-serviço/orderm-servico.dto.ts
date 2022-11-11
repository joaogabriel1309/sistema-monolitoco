import Id from "../../../@compartilhada/dominio/valor-do-objetos/id.valor-do-objetos";

export interface OrdemServicoEntradaDto{
    clienteID: string;
    produto: {
        produtoId: string;
    }[];
}

export interface OrdemServicoSaidaDto{
    id: string;
    faturaId: string;
    estado: string;
    total: number;
    produto:{
        produtoId:string;
    }[];
}