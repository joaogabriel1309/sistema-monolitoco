import transicao from "../dominio/transicao";
import PagamentoGateway from "../gateway/pagamento.gateway";
import TransacaoModel from "./transacao.model";

export default class TransacaoRepositorio implements PagamentoGateway{
    async salvar(entrada: transicao): Promise<transicao> {
        await TransacaoModel.create({
            id: entrada.id.id,
            ordernaId: entrada.ordenaId,
            qauntidade: entrada.quantidade,
            estado: entrada.estado,
            criaId: entrada.criaid,
            atualizaId: entrada.atualizaid,
        });

        return new transicao({
            id: entrada.id,
            ordenaId: entrada.ordenaId,
            quantidade: entrada.quantidade,
            estado: entrada.estado,
            criaId: entrada.criaid,
            atualizaId: entrada.atualizaid,
        })
    }
}