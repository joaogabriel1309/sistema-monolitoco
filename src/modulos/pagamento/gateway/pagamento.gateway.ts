import Transicao from "../dominio/transicao";

export default interface PagamentoGateway {
    salvar(entrada: Transicao): Promise<Transicao>; 
}