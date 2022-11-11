import { Order } from "sequelize/types";

export default interface ChecaGateway{
    adicionaOrdem(ordem: Order): Promise<void>;
    procuraOrdem(id: string): Promise<Order | null>
}