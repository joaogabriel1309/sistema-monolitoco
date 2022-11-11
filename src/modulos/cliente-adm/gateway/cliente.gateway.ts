//import { deflate } from "zlib"

import Cliente from "../domain/cliente.entidade";

export default interface ClienteGateway{
    adiciona(cliente: Cliente): Promise<void>;
    procura(id: string): Promise<Cliente>; 
}
