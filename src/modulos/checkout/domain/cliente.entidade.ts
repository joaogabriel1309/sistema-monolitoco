import AgregadoRaiz from "../../@compartilhada/dominio/entidade/agregados-raiz.interface";
import EntidadeBase from "../../@compartilhada/dominio/entidade/entidade.base";
import Id from "../../@compartilhada/dominio/valor-do-objetos/id.valor-do-objetos";

type PropriedadeCliente = {
    id?: Id,
    nome: string,
    endereco: string,
    email: string,
}

export default class Cliente extends EntidadeBase implements AgregadoRaiz {
    private _nome: string;
    private _endereco: string;
    private _email: string;

    constructor(propriedade: PropriedadeCliente){
        super(propriedade.id);
        this._nome = propriedade.nome;
        this._endereco = propriedade.endereco;
        this._email = propriedade.email;
    }

    get nome(): string{
        return this._nome;
    }

    get endereco(): string{
        return this._endereco;
    }

    get email(): string{
        return this._email;
    }
}