import Id from "../../@compartilhada/dominio/valor-do-objetos/id.valor-do-objetos";
import Cliente from "../../cliente-adm/domain/cliente.entidade";
import clienteEntidade from "../../cliente-adm/domain/cliente.entidade";
import ClienteGateway from "../../cliente-adm/gateway/cliente.gateway";
import notaFiscal from "../dominio/notaFiscal.dto";
import { NotaModel } from "./nota.model";
//import notaFiscal from "../dominio/notaFiscal.dto";

export default class NotaRepositorio implements ClienteGateway{
    async adiciona(Nota: notaFiscal): Promise<void>{
        throw new Error("Metodo não implementado");
      }
    
    async procura(id: string): Promise<notaFiscal> {
        const Nota = await NotaModel.findOne({
            where: { id } 
        }) 

        if (!Nota){
            throw new Error("Nota Fiscal não existe");
        }

        return;
        // return new NotaFiscal{
        //     id: new Id(NotaFiscal.id),
        //     nome: NotaFiscal.nome
        // }
        
    }
}