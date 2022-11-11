import ProdutoGateway from "../../gateway/produto.gateway";
import { ChecarEstoqueInterfaceEntradaDto, ChecarEstoqueInterfaceSaidaDto } from "./checa-estoque.dto";

export default class ChecarEstoqueCasoUso{
    private _RepositorioProduto: ProdutoGateway;

    constructor(RepositorioProduto: ProdutoGateway){
        this._RepositorioProduto = RepositorioProduto;
    }

    async executar(Entrada: ChecarEstoqueInterfaceEntradaDto): Promise<ChecarEstoqueInterfaceSaidaDto>{
        const produto = await this._RepositorioProduto.procurar(Entrada.produtoId);
        return{ 
            //id do valores do objetos...
            produtoId: produto.id.id, 
            estoque: produto.estoque,
        };
    } 
}

