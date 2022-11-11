
import Id from "../../@compartilhada/dominio/valor-do-objetos/id.valor-do-objetos";
import Produto from "../dominio/entidade-do-produto";
//import produto from "../dominio/entidade-do-produto";
import ProdutoGateway from "../gateway/produto.gateway";
import { ProdutoModel } from "./produto.model";

export default class ProdutoRepositorio implements ProdutoGateway{
    async adicionar(produto: Produto): Promise<void> {
        await ProdutoModel.create({
            id: produto.id.id,
            nome: produto.nome,
            descricao: produto.descricao,
            precocompra: produto.precocompra,
            estoque: produto.estoque,
            criaId: new Date(),
            atualizaid: new Date(),
        })
    }

    async procurar(id: string): Promise<Produto> {
        const produto = await ProdutoModel.findOne({
            where: {id},
        });

        if(!produto){
            throw new Error(`Produto com o ID ${id} não existe`);
        }

        return new Produto({
            id: new Id(produto.id),
            nome: produto.nome,
            descricao: produto.descricao,
            precocompra: produto.precocompra,
            estoque: produto.estoque,
            criaid: produto.criaId,
            atualizaid: produto.AtualizaId, 
        });
    }
}