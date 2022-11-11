import AdicionaProdutoCasoDeUso from "../Caso_de_Uso/adiciona-produto/add-produto.casouso";
import ChecarEstoqueCasoUso from "../Caso_de_Uso/checa-estoque/checa-estoque.casouso";
import ProdutoAdmFacade from "../interface/produto-adm.facade";
import ProdutoRepositorio from "../repositorio/produto.repositorio";

export default class ProdutoAdmFacadeFactory{
    static cria(){
        // const produtoRepositorio = new ProdutoRepositorio();
        // const adicionaProdutoCasoUso = new AdicionaProdutoCasoDeUso(produtoRepositorio);
        // const checarEstoqueCasoUso = new ChecarEstoqueCasoUso(produtoRepositorio);
        // const produtoFacade = new ProdutoAdmFacade({
        //     AdicionaCasoUso: adicionaProdutoCasoUso,
        //     EstoqueCasoUso: checarEstoqueCasoUso,
        // });
        // return produtoFacade;
    }
}