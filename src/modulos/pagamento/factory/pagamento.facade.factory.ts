import ProcessamentoPagamentoCasoUso from "../caso-de-uso/processa-pagamento/processamento-de-pagamento.caso-de-uso";
import PagamentoFacadeInterface from "../facade/facade.interface";
import PagamentoFacade from "../facade/pagamento.facade";
import TransacaoRepositorio from "../repositorio/transacao.repositorio";

export default class PagamentoFacadeFactory{
    static create(): PagamentoFacadeInterface{
        const repositorio = new TransacaoRepositorio();
        const casoUso = new ProcessamentoPagamentoCasoUso(repositorio);
        const facade = new PagamentoFacade(casoUso);
        return facade;
    }
}

//CRIAR MODULO CHECKOUT 
//Aula: Criando entidade client - Modulo: checkout
