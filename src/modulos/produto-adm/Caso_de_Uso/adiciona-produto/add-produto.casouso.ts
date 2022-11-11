//import Id from "../../../@compartilhada/dominio/valor-do-objetos/id.valor-do-objetos";

import Id from "../../../@compartilhada/dominio/valor-do-objetos/id.valor-do-objetos";
import Produto from "../../dominio/entidade-do-produto";
import ProdutoGateway from "../../gateway/produto.gateway";
import { adicionarProdutoEntradaDto, adicionarProdutoSaidaDto } from "./add-produto.dto";  

export default class AdicionaProdutoCasoDeUso{
    private _procedureRepositorio: ProdutoGateway;

    constructor(_procedureRepositorio: ProdutoGateway){
        this._procedureRepositorio = _procedureRepositorio;
    }
    async execute(Entrada: adicionarProdutoEntradaDto):  Promise<adicionarProdutoSaidaDto>{
        const Propriedade = {
            id: new Id(Entrada.id),
            nome: Entrada.nome,
            descricao: Entrada.descricao,
            precocompra: Entrada.precocompra,
            estoque: Entrada.estoque,
        };
        
        const produto = new Produto(Propriedade);
        this._procedureRepositorio.adicionar(produto);

        return{
            id: produto.id.id,
            nome: produto.nome,
            descricao: produto.descricao,
            precocompra: produto.precocompra,
            estoque: produto.estoque,
            criaId: produto.criaid,
            AtualizaId: produto.atualizaid,
        };
    }
}