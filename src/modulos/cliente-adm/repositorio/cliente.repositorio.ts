//import EntidadeBase from "../../../@compartilhada/dominio/entidade/entidade.base";

import Id from "../../@compartilhada/dominio/valor-do-objetos/id.valor-do-objetos";
import Cliente from "../domain/cliente.entidade";
import clienteEntidade from "../domain/cliente.entidade";
import ClienteGateway from "../gateway/cliente.gateway";
import { ClienteModel } from "./cliente.model";

export default class ClienteRepositorio implements ClienteGateway{
      async adiciona(cliente: clienteEntidade): Promise<void>{
        throw new Error("Metodo não implementado");
      }

      async procura(id: string): Promise<clienteEntidade> {
        const cliente = await ClienteModel.findOne({ where: { id } } ); 
        
        if (!cliente) {
          throw new Error("Cliente não existe");
        }

        return new Cliente({
          id: new Id(cliente.id),
          nome: cliente.nome,
          email: cliente.email,
          endereco: cliente.endereco,
        })        
      }      
}