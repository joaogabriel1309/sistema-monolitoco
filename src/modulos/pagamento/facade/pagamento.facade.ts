import CasoUsoInterface from "../../@compartilhada/casouso/caso-uso.interface";
import PagamentoFacadeInterface, { PagamentoFacadeEntradaDto, PagamentoFacadeSaidaDto } from "./facade.interface";

export default class PagamentoFacade implements PagamentoFacadeInterface{
    constructor(private processaPagamentoCasoUso: CasoUsoInterface) {}
    processo(entrada: PagamentoFacadeEntradaDto): Promise<PagamentoFacadeSaidaDto> {
        return this.processaPagamentoCasoUso.executa(entrada);
    }
}