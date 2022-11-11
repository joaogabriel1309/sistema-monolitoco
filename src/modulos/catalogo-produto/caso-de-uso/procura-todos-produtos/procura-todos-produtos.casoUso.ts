import CasoUsoInterface from "../../../@compartilhada/casouso/caso-uso.interface";
import ProdutoGateway from "../../gateway/produto-gateway";

export default class ProcuraTodosProdutosCasoUso implements CasoUsoInterface{
        
    constructor (private produtoRepositorio: ProdutoGateway) {}

    async executa(): Promise<any>{
        const produtos = await this.produtoRepositorio.procurarTodos();

        return{
            produtos: produtos.map((produto) => ({
                id: produto.id.id,
                nome: produto.nome,
                descricao: produto.descricao,
                precoVenda: produto.precoVenda,
            })),
        };
    }
}