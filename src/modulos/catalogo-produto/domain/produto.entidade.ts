import { AggregateError } from "sequelize/types";
import AgregadoRaiz from "../../@compartilhada/dominio/entidade/agregados-raiz.interface";
import EntidadeBase from "../../@compartilhada/dominio/entidade/entidade.base";
import Id from "../../@compartilhada/dominio/valor-do-objetos/id.valor-do-objetos";

type ProdutoPropriedade = {
    id: Id;
    nome: string;
    descricao: string;
    precoVenda: number;
};

export default class Produto extends EntidadeBase implements AgregadoRaiz{
    private _nome: string;
    private _descricao: string;
    private _precoVenda: number;

    constructor(propriedade: ProdutoPropriedade){
        super(propriedade.id);
        this._nome = propriedade.nome;
        this._descricao = propriedade.descricao;
        this._precoVenda = propriedade.precoVenda;
    }

    get nome(): string{
        return this._nome;
    }

    get descricao(): string{ 
        return this._descricao;
    }

    get precoVenda(): number{
        return this._precoVenda;
    }
}