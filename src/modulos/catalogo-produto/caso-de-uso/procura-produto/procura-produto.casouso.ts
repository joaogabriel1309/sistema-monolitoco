import ProdutoGateway from "../../gateway/produto-gateway";
import { ProcuraProdutoEntradaDto, ProcuraProdutoSaidaDto } from "./procura-produto.dto";

export default class ProcuraProdutoCasoUso{
    constructor(private readonly produtoRepository: ProdutoGateway){}

    async execute(entrada: ProcuraProdutoEntradaDto): Promise<ProcuraProdutoSaidaDto>{
        const produto = await this.produtoRepository.procurar(entrada.id);

        return {
            id: produto.id.id,
            nome: produto.nome,
            descricao: produto.descricao,
            precoVenda: produto.precoVenda,
        };
    }
}