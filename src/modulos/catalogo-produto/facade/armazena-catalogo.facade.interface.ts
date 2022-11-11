export interface procuraArmazenaCatalogoFacadeEntradaDto {
    id: string;
}

export interface procuraArmazenaCatalogoFacadeSaidaDto {
    id: string;
    nome: string;
    descricao: string;
    precoVenda: number;
}

export interface procuraTodosArmazenaCatalogoFacadeSaidaDto {
    produto: {
        id: string;
        nome: string;
        descricao: string;
        precoVenda: number;
    }[];
}

export default interface ArmazenaCatalogoFacadeInterface {
    procura(id: procuraArmazenaCatalogoFacadeEntradaDto): Promise<any>;
    procuraTodos(): Promise<any>;
}