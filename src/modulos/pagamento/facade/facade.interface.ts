import { DeletedAt } from "sequelize-typescript";

export interface PagamentoFacadeEntradaDto{
    ordernaId: string;
    quantidade: number;    
}

export interface PagamentoFacadeSaidaDto{
    transacaoId: string;
    ordernaId: string;
    quantidade: number;
    estado: string;
    criaId: Date;
    AtualizaId: Date;
}

export default interface PagamentoFacadeInterface{
    processo(entrada: PagamentoFacadeEntradaDto): Promise<PagamentoFacadeSaidaDto>    
}