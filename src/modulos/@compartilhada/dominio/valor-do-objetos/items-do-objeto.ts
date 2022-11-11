import Id from "./id.valor-do-objetos";
import ValoresObjetos from "./valores-do-objetos.interface";

type propriedades = {
    id?: Id,
    nome: string;
    preco: number;
}

export default class Items implements ValoresObjetos{
    private _id: Id;
    private _nome: string;
    private _preco: number;

    constructor(propriedade: propriedades) {
        this._id = propriedade.id;
        this._nome = propriedade.nome;
        this._preco = propriedade.preco;    
    }

    get itens(): string{
        return this.itens;
    }
    // get id(): Id{
    //     return this._id;
    // }

    // get nome(): string{
    //     return this._nome;
    // }

    // get preco(): number{
    //     return this._preco;
    // }
}