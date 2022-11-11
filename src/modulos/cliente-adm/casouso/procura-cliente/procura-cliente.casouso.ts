// import Id from "../../../../@compartilhada/dominio/valor-do-objetos/id.valor-do-objetos";
// import Cliente from "../../domain/cliente.entidade";
import ClienteGateway from "../../gateway/cliente.gateway";
import { 
    ProcuraClienteEntradaDto, 
    ProcuraClienteSaidaDto 
} from "./procura-cliente.casouso.dto";

export default class ProcuraClienteCasoUso{
    private _clienteRepositorio: ClienteGateway;

    constructor(clienteRepositorio: ClienteGateway){
        this._clienteRepositorio = clienteRepositorio;
    }

    async execute(entrada: ProcuraClienteEntradaDto): Promise<ProcuraClienteSaidaDto>{

        const resultado = await this._clienteRepositorio.procura(entrada.id);

        return{ 
            id: resultado.id.id,
            nome: resultado.nome,
            email: resultado.email,
            endereco: resultado.endereco,
            criaId: resultado.criaid,
            atualizaId: resultado.atualizaid,
        }
    }
}