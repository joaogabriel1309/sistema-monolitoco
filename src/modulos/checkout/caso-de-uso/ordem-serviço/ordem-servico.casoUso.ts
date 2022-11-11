import CasoUsoInterface from "../../../@compartilhada/casouso/caso-uso.interface";
import { ClienteAdmFacadeInterface } from "../../../cliente-adm/facade/cliente-adm.facade.interface";
import { OrdemServicoEntradaDto, OrdemServicoSaidaDto } from "./orderm-servico.dto";

export default class OrdemServicoCasoUso implements CasoUsoInterface {    
    private _clienteFacade: ClienteAdmFacadeInterface;
    
    constructor (clienteAdmFacade: ClienteAdmFacadeInterface) {
        this._clienteFacade = clienteAdmFacade;
    }

    async executa( entrada: OrdemServicoEntradaDto): Promise<OrdemServicoSaidaDto>{                
        const cliente = await this._clienteFacade.procura({id: entrada.clienteID})
        if (!cliente) {
            throw new Error("cliente não existe");
        }
        await this.ValidaProduto(entrada);
        return {
            id: "",
            faturaId: "",
            estado: "",
            total: 0,
            produto: [],
        };
    }

    private async ValidaProduto(entrada: OrdemServicoEntradaDto): Promise<void>{
        if (entrada.produto.length === 0) {
            throw new Error("Produto não selecionado");
        }
    }
}