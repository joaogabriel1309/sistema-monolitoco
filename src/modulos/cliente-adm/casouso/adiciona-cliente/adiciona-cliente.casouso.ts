
import Id from "../../../@compartilhada/dominio/valor-do-objetos/id.valor-do-objetos";
import Cliente from "../../domain/cliente.entidade";
import ClienteGateway from "../../gateway/cliente.gateway";
import { 
        AdcionaClienteEntradaDto, 
        AdcionaClienteSaidaDto 
    } from "./adiciona-cliente.casouso.dto";

export default class AdicionarClienteCasoUso {
    private _clienteRepositorio: ClienteGateway;

    constructor(clienteRepositorio: ClienteGateway){
        this._clienteRepositorio = clienteRepositorio;
    }

    async execute(entrada: AdcionaClienteEntradaDto): Promise <AdcionaClienteSaidaDto>{
        const propriedade = {
            id: new Id(entrada.id) || new Id(),
            nome: entrada.nome,
            email: entrada.email,
            endereco: entrada.endereco,
        };
 
        const cliente = new Cliente(propriedade);
        this._clienteRepositorio.adiciona(cliente);

        return{
            id: cliente.id.id,
            nome: cliente.nome,
            email: cliente.email,
            endereco: cliente.endereco,
            criaId: cliente.criaid,
            atualizaId: cliente.atualizaid,
        };
    }
}