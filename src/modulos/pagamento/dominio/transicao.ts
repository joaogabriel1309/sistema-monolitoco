import AgregadoRaiz from "../../@compartilhada/dominio/entidade/agregados-raiz.interface";
import EntidadeBase from "../../@compartilhada/dominio/entidade/entidade.base";
import Id from "../../@compartilhada/dominio/valor-do-objetos/id.valor-do-objetos"

type propriedadeTransacao = {
    id?: IdTransacao,
    quantidade: number,
    ordenaId: string;
    estado?: string; 
    criaId?: Date;
    atualizaId?: Date;
};

//cria um id proprio para essa classe importando da classe valor-do-objeto
export class IdTransacao extends Id {
    constructor(id: string) {
        super(id);
    }
}

export default class Transicao extends EntidadeBase implements AgregadoRaiz {
    private _quantidade: number;
    private _ordenaId: string;
    private _estado: string;

    constructor(propriedades: propriedadeTransacao) {
        super(propriedades.id);
        this._quantidade = propriedades.quantidade;
        this._ordenaId = propriedades.ordenaId;
        this._estado = propriedades.estado || "Pendente";
        this.validacoes();
    }
    
    validacoes(): void{
        if(this._quantidade <= 0){
            throw new Error("Quantidade deve ser maior que 0");            
        }
    } 

    aprovado(): void{
        this._estado = "Aprovado";
    }

    reprovado(): void{
        this._estado = "Declinado";
    }

    processo(): void{
        //aqui seria necesseario conectar com uma gatew de pagamento
        if (this._quantidade >= 100){
            this.aprovado();
        }
        else{
            this.reprovado();
        }
    }

    get quantidade(): number{
        return this._quantidade;
    }    

    get ordenaId(): string{
        return this._ordenaId;
    }

    get estado(): string{
        return this._estado;
    }
}