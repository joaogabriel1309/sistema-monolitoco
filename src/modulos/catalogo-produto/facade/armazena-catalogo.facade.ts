//import { ProcuraTodosProdutos } from "../../../@compartilhada/casouso/procura-todos-produtos/procurar-todos-produtos-.dto";
import ProcuraProdutoCasoUso from "../caso-de-uso/procura-produto/procura-produto.casouso";
import ProcuraTodosProdutosCasoUso from "../caso-de-uso/procura-todos-produtos/procura-todos-produtos.casoUso";
import ArmazenaCatalogoFacadeInterface, { 
    procuraArmazenaCatalogoFacadeEntradaDto, 
    procuraArmazenaCatalogoFacadeSaidaDto, 
    procuraTodosArmazenaCatalogoFacadeSaidaDto
} from "./armazena-catalogo.facade.interface";

export interface casoUsoPropriedades{
    procurarCasoUso: ProcuraProdutoCasoUso;
    procurarTodosCasoUso: ProcuraTodosProdutosCasoUso;
}

export default class ArmazenaCatalogoFacade implements ArmazenaCatalogoFacadeInterface{
    private _procuraCasoUso: ProcuraProdutoCasoUso;
    private _procuraTodosCasoUso: ProcuraTodosProdutosCasoUso;

    constructor (propriedades: casoUsoPropriedades){
        this._procuraCasoUso = propriedades.procurarCasoUso;
        this._procuraTodosCasoUso = propriedades.procurarTodosCasoUso;
    }

    async procura(id: procuraArmazenaCatalogoFacadeEntradaDto): Promise<procuraArmazenaCatalogoFacadeSaidaDto> {
        // throw new Error("Metodo não implementado");
        return await this._procuraCasoUso.execute(id);
    }

    async procuraTodos(): Promise<procuraTodosArmazenaCatalogoFacadeSaidaDto> {
        // throw new Error("Metodo não implementado");
        return await this._procuraTodosCasoUso.executa();
    }
}