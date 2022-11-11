import Produto from "../dominio/entidade-do-produto";

export default interface ProdutoGateway{
    adicionar(produto: Produto): Promise<void>;
    procurar(id: string): Promise<Produto>;
}