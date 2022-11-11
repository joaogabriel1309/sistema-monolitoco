
import Id from "../../@compartilhada/dominio/valor-do-objetos/id.valor-do-objetos";
import Produto from "../domain/produto.entidade";
import ProdutoGateway from "../gateway/produto-gateway";
import ProdutoModel from "./produto.model";

export default class RepositorioProduto implements ProdutoGateway{
    async procurarTodos(): Promise<Produto[]> {
        const produto = await ProdutoModel.findAll();

        return produto.map(
            (produto) => 
                new Produto({
                    id: new Id(produto.id),
                    nome: produto.nome,
                    descricao: produto.descricao,
                    precoVenda: produto.precoVenda,
                })
        );
    }
    
    async procurar(id: string): Promise<Produto> {
        const produto = await ProdutoModel.findOne({
            where: {id},
        })
        
        if (!produto) {
            throw Error("Produto não encontrado!");
        }

        return new Produto({
            id: new Id(produto.id),
            nome: produto.nome,
            descricao: produto.descricao,
            precoVenda: produto.precoVenda,
        });
        
    }

}