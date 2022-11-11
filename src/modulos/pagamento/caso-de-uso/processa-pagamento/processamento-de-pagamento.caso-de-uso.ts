import CasoUsoInterface from "../../../@compartilhada/casouso/caso-uso.interface";
import Transicao from "../../dominio/transicao";
import PagamentoGateway from "../../gateway/pagamento.gateway";
import { ProcessaPagamentoEntradaDto, ProcessaPagamentoSaidaDto } from "./processamento-de-pagamento.dto";

export default class ProcessamentoPagamentoCasoUso implements CasoUsoInterface{
   constructor(private transicaoRepositorio: PagamentoGateway){}

   async executa(entrada: ProcessaPagamentoEntradaDto): Promise<ProcessaPagamentoSaidaDto>{
      const transicao = new Transicao({
        ordenaId: entrada.ordenaId,
        quantidade: entrada.quantidade,
      });

      transicao.processo();

      const percisteTransacao = await this.transicaoRepositorio.salvar(
        transicao
      );
    
      return {
        IdTransacao: percisteTransacao.id.id,
        ordenaId: percisteTransacao.ordenaId,
        quantidade: percisteTransacao.quantidade,
        estados: percisteTransacao.estado,
        criaId: percisteTransacao.criaid,
        atualizaId: percisteTransacao.atualizaid,
      };
   }
}