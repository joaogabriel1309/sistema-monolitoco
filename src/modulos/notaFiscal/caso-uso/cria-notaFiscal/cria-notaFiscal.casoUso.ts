//import endereco from "../../../@compartilhada/dominio/valor-do-objetos/endereco-do-objeto";
import NotaFiscalGateway from "../../gateway/notaFiscal-gateway";
import { 
    ProcuraNotaFiscalEntradaDto, 
    ProcuraNotaFiscalSaidaDto } 
from "./cria-notaFiscal.casoUso.dto";

  //estrutura da minha nota fiscal aqui eu posso fala q minha nota tem q ter um valor
  //um produto, entre outras coisa, aqui eu defino a estrura dela

export default class ProcuraNotaFiscalCasoUso{
    private _repositorioNotaFiscal: NotaFiscalGateway;

    constructor(_repositorioNotaFiscal: NotaFiscalGateway) {        
        this._repositorioNotaFiscal = _repositorioNotaFiscal;
    }

    async executa(entrada: ProcuraNotaFiscalEntradaDto): Promise<ProcuraNotaFiscalSaidaDto>{
        const notaFiscal = await this._repositorioNotaFiscal.procurar(entrada.id);        

        return{
            id: notaFiscal.id.id,
            nome: notaFiscal.nome,
            documento: notaFiscal.documento,
            endereco: notaFiscal.endereco.endereco,
            itens: notaFiscal.items.itens,

        }
    } 

    16:09
}