//import { setFlagsFromString } from "v8";
import ProdutoRepositorio from "../repositorio/repositorio.produto";
import ProcuraProdutoCasoUso from "../caso-de-uso/procura-produto/procura-produto.casouso";
import ProcuraTodosProdutosCasoUso from "../caso-de-uso/procura-todos-produtos/procura-todos-produtos.casoUso";
import ArmazenaCatalogoFacade from "../facade/armazena-catalogo.facade";

export default class ArmazenaCatalogoFacadeFactory{
    static create(): ArmazenaCatalogoFacade{
        const produtoRepositorio = new ProdutoRepositorio();
        const procuraCasoUso = new ProcuraProdutoCasoUso(produtoRepositorio);
        const procuraTodosCasoUso = new ProcuraTodosProdutosCasoUso(produtoRepositorio);

        const facade = new ArmazenaCatalogoFacade({
            procurarCasoUso: procuraCasoUso,
            procurarTodosCasoUso: procuraTodosCasoUso,
        });
        return facade;
    }
}