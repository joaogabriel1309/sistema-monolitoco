import AgregadoRaiz from "../../@compartilhada/dominio/entidade/agregados-raiz.interface";
import EntidadeBase from "../../@compartilhada/dominio/entidade/entidade.base";
import Endereco from "../../@compartilhada/dominio/valor-do-objetos/endereco-do-objeto";
import Id from "../../@compartilhada/dominio/valor-do-objetos/id.valor-do-objetos";
import Items from "../../@compartilhada/dominio/valor-do-objetos/items-do-objeto";

type notaFiscalPropriedades ={
    id?: Id;
    nome: string;
    documento: string;
    endereco: string;
    items: Items;
    total: number;
};

export default class NotaFiscal extends EntidadeBase implements AgregadoRaiz{
    private _nome: string;
    private _documento: string;
    private _endereco: string;
    private _items: Items;
    private _total: number;

    constructor(propriedades: notaFiscalPropriedades){
        super(propriedades.id);
        this._nome = propriedades.nome;
        this._documento = propriedades.documento;
        this._endereco = propriedades.endereco;
        this._items = propriedades.items;
        this._total = propriedades.total;        
    }

    get nome(): string{
        return this._nome;
    }

    get documento(): string{
        return this._documento;
    }

    get endereco(): string{
        return this._endereco;
    }

    get items(): Items{
        return this._items;
    }

    get total(): number{
        return this._total;
    }
}