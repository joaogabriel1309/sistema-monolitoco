
import CasoUsoInterface from "../../@compartilhada/casouso/caso-uso.interface";
import ProdutoAdmInterface, { 
    AdcionarProdutoInterfaceEntradaDto, 
    ChecarEstoqueInterfaceEntradaDto, 
    ChecarEstoqueInterfaceSaidaDto } from "./produto-adm.facade.interface";

export interface CasoUsoPropriedades{
    AdicionaCasoUso: CasoUsoInterface;
    EstoqueCasoUso: CasoUsoInterface;
}
export default class ProdutoAdmFacade implements ProdutoAdmInterface {
    private _AdicionaCasoUso: CasoUsoInterface;
    private _ChecaEstoqueCasoUso: CasoUsoInterface;

    constructor(casoUsoPropriedades: CasoUsoPropriedades){
        this._AdicionaCasoUso = casoUsoPropriedades.AdicionaCasoUso;
        this._ChecaEstoqueCasoUso = casoUsoPropriedades.EstoqueCasoUso;
    }
    
    //caso o dto do caso de uso for != do dto da facade, sera necessario converter o dto do caso de uso
    AdcionarProduto(Entrada: AdcionarProdutoInterfaceEntradaDto): Promise<void> {
        return this._AdicionaCasoUso.executa(Entrada);
    }

    ChecarEstoque(Entrada: ChecarEstoqueInterfaceEntradaDto): Promise<ChecarEstoqueInterfaceSaidaDto> {
        return this._ChecaEstoqueCasoUso.executa(Entrada);
    }
}