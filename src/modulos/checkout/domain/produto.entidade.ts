import AgregadoRaiz from "../../@compartilhada/dominio/entidade/agregados-raiz.interface";
import EntidadeBase from "../../@compartilhada/dominio/entidade/entidade.base";
import Id from "../../@compartilhada/dominio/valor-do-objetos/id.valor-do-objetos";

type PropriedadeProduto = {
    id?: Id,
    nome: string,
    descricao: string,
    precoCompra: number,
}

export default class Produto extends EntidadeBase implements AgregadoRaiz {
    private _nome: string;
    private _descricao: string;
    private _precoCompra: number;

    constructor (propriedade: PropriedadeProduto){
        super(propriedade.id);
        this._nome = propriedade.nome;
        this._descricao = propriedade.descricao;
        this._precoCompra = propriedade.precoCompra;
    }

    get nome(): string{
        return this._nome;
    }

    get descricao(): string{
        return this._descricao;
    }

    get precoCompra(): number{
        return this._precoCompra;
    }
}