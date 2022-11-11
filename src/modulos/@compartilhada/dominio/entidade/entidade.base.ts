import Id from "../valor-do-objetos/id.valor-do-objetos";

export default class EntidadeBase{
    private _id: Id;
    private _criaid: Date;
    private _atualizaid: Date;

    constructor(id?: Id, criaId?: Date, atualizaId?: Date){
        this._id = id || new Id();
        this._criaid = criaId || new Date();
        this._atualizaid = atualizaId || new Date();
    }

    get id(): Id {
        return this._id;
    }

    get criaid(): Date {
        return this._criaid;
    }

    get atualizaid(): Date {
        return this._atualizaid;
    }

    set atualizaid(atualizaid: Date){
        this._atualizaid = atualizaid;
    }    
}