import Produto from "../domain/produto.entidade";

export default interface ProdutoGateway{
    procurarTodos(): Promise<Produto[]>;
    procurar(id: string): Promise<Produto>;
}