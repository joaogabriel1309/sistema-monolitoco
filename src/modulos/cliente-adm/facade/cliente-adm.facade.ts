import CasoUsoInterface from "../../@compartilhada/casouso/caso-uso.interface";
import { AdicionaClienteEntradaDto, ClienteAdmFacadeInterface, ProcuraClienteEntradaDto, ProcuraClienteSaidaDto } from "./cliente-adm.facade.interface";

export interface CasoUsoPropriedade{
    procuraCasoUso: CasoUsoInterface;
    adicionaCasoUso: CasoUsoInterface;
}

export default class clienteAdmFacade implements ClienteAdmFacadeInterface{
    private _procuraCasoUso: CasoUsoInterface;
    private _adicionaCasoUso: CasoUsoInterface;

    constructor(casoUsoPropriedade: CasoUsoPropriedade){
        this._adicionaCasoUso = casoUsoPropriedade.adicionaCasoUso;
        this._procuraCasoUso = casoUsoPropriedade.procuraCasoUso;
    }

    async adiciona(entrada: AdicionaClienteEntradaDto): Promise<void> {
        await this._adicionaCasoUso.executa(entrada);
    }

    async procura(entrada: ProcuraClienteEntradaDto): Promise<ProcuraClienteSaidaDto> {
        return this._procuraCasoUso.executa(entrada);
    }
}