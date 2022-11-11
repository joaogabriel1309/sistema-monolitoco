import AgregadoRaiz from "../../@compartilhada/dominio/entidade/agregados-raiz.interface";
import EntidadeBase from "../../@compartilhada/dominio/entidade/entidade.base";
import Id from "../../@compartilhada/dominio/valor-do-objetos/id.valor-do-objetos";


type ClientePropriedade = {
    id?: Id;
    nome: string;
    email: string;
    endereco: string;
    criaId?: Date;
    atualizaId?: Date;
}

export default class Cliente extends EntidadeBase implements AgregadoRaiz{
    private _nome: string;
    private _email: string;
    private _endereco: string;

    constructor(propriedades: ClientePropriedade){
        super(propriedades.id, propriedades.criaId, propriedades.atualizaId);
        this._nome = propriedades.nome;
        this._email = propriedades.email;
        this._endereco = propriedades.endereco;
    }

    get nome() : string {
        return this._nome;
    }
    
    get email() : string {
        return this._email;
    }
 
    get endereco() : string {
        return this._endereco;
    }
    
}