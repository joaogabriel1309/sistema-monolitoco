import EntidadeBase from "../../@compartilhada/dominio/entidade/entidade.base";
import Id from "../../@compartilhada/dominio/valor-do-objetos/id.valor-do-objetos"
import Cliente from "./cliente.entidade";
import Produto from "./produto.entidade";

type PropriedadeOrder = {
    id?: Id;
    cliente: Cliente;
    produto: Produto[];
    estado: string;
}

export default class order extends EntidadeBase{
    private _cliente: Cliente;
    private _produto: Produto[];
    private _estado: string;

    constructor(propriedade: PropriedadeOrder){
        super(propriedade.id);
        this._cliente = propriedade.cliente;
        this._produto = propriedade.produto;
        this._estado = propriedade.estado || "Pendente";
    }

    Aprovado(): void{
        this._estado = "Aprovado";
    }    

    get cliente(): Cliente{
        return this._cliente;
    }

    get produto(): Produto[]{
        return this._produto;
    }

    get estado(): string{
        return this._estado;
    }

    get total(): number{
        return this._produto.reduce((total, Produto) => {
            return total + Produto.precoCompra;
        }, 0);
    }
}