import AgregadoRaiz from "../../@compartilhada/dominio/entidade/agregados-raiz.interface";
import EntidadeBase from "../../@compartilhada/dominio/entidade/entidade.base";
import Id from "../../@compartilhada/dominio/valor-do-objetos/id.valor-do-objetos";


type PropriedadeProduto = {
    id?: Id;
    nome: string;
    descricao: string;
    precocompra: number;
    estoque: number;
    criaid?: Date;
    atualizaid?: Date;
}

export default class Produto extends EntidadeBase implements AgregadoRaiz {
    private _nome: string;
    private _descricao: string;
    private _precocompra: number;
    private _estoque: number;

    constructor(propriedades: PropriedadeProduto){
        // "super" executa o metodo contrutor         
        super(propriedades.id);
        this._nome = propriedades.nome;
        this._descricao = propriedades.descricao;
        this._precocompra = propriedades.precocompra; 
    }

    //dentro dos meus get poderia colocar a greda de negocio...
    get nome(): string{
        return this._nome;
    }

    get descricao(): string{
        return this._descricao;
    }

    get estoque(): number{
        return this._estoque;
    }

    get precocompra(): number{
        return this._precocompra;
    }

    //set e onde vou pegar minhas informações ao inver de chamar a valiavel posso chamar meu metodo set
    set nome (nome: string){
        this._nome = nome;
    }
    
    set descricao (descricao: string){
        this._descricao = descricao;
    }

    set estoque (estoque: number){
        this._estoque = estoque;
    }

    set precocompra (precocompra: number){
        this._precocompra = precocompra;
    }
}