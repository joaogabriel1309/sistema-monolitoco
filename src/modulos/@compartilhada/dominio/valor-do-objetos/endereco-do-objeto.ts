import ValoresObjetos from "./valores-do-objetos.interface";

type propriedades = {
    rua: string;
    numero: number;
    complemento: string;
    cidade: string; 
    estado: string;
    cep: string;
}

export default class Endereco implements ValoresObjetos{
    private _rua: string;
    private _numero: number;
    private _complemento: string;
    private _cidade: string;
    private _estado: string;
    private _cep: string;

    constructor(propriedade: propriedades){
        this._rua = propriedade.rua;
        this._numero = propriedade.numero;
        this._complemento = propriedade.complemento;
        this._cidade = propriedade.cidade;
        this._estado = propriedade.estado;
        this._cep = propriedade.cep;
    }

    get endereco(): string {
        return this.endereco;
    }
    
    // get rua(): string{
    //     return this._rua;
    // }

    // get numero(): number{
    //     return this._numero;
    // }

    // get complemento(): string{
    //     return this._complemento;
    // }

    // get cidade(): string{
    //     return this._cidade;
    // }

    // get estado(): string{
    //     return this._estado;
    // }

    // get cep(): string{
    //     return this._cep;
    // }
}