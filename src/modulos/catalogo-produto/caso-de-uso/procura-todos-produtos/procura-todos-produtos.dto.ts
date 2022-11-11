export interface ProcuraTodosProdutosDto{
    produtos:{
        id: string;
        nome: string;
        descricao: string;
        precoVenda: number;
    }[];
}