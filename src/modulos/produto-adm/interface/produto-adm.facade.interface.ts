//import AdicionaProdutoCasoDeUso from "../Caso_de_Uso/add-produto.casouso";
import { adicionarProdutoEntradaDto } from "../Caso_de_Uso/adiciona-produto/add-produto.dto";

export interface AdcionarProdutoInterfaceEntradaDto{
    id?: string;
    nome: string;
    descricao: string;
    precocompra: number;
    estoque: number;
}

export interface ChecarEstoqueInterfaceEntradaDto{
    produtoId: string;
}

export interface ChecarEstoqueInterfaceSaidaDto{
    produtoId: string;
    estoque: number;
}

export default interface ProdutoAdmInterface{
    AdcionarProduto(Entrada: AdcionarProdutoInterfaceEntradaDto): Promise<void>;
    ChecarEstoque(Entrada: ChecarEstoqueInterfaceEntradaDto): Promise<ChecarEstoqueInterfaceSaidaDto>; 
}