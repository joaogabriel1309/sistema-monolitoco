import { Sequelize } from "sequelize-typescript";
import ProcessamentoPagamentoCasoUso from "../caso-de-uso/processa-pagamento/processamento-de-pagamento.caso-de-uso";
import PagamentoFacadeFactory from "../factory/pagamento.facade.factory";
import TransacaoModel from "../repositorio/transacao.model";
import TransacaoRepositorio from "../repositorio/transacao.repositorio";
import PagamentoFacade from "./pagamento.facade";

describe("transação repositorio teste", () => {
    let sequelize: Sequelize;
    
    beforeEach( async () => {
        sequelize = new Sequelize({
            dialect: "sqlite",
            storage: "memory",
            logging: false,
            sync: {force: true},
        });

        //transacao model e a onde e criado a minha tabela com as minhas colunas
        await sequelize.addModels([TransacaoModel]);
        await sequelize.sync();
    });

    afterEach(async () => {
        await sequelize.close();
    })

    it("deve criar uma transação", async () => {

        const facade = PagamentoFacadeFactory.create();

        const entrada = {
            ordernaId: "order-1",
            quantidade: 100,
        }

        const saida = await facade.processo(entrada);

        expect(saida.transacaoId).toBeDefined();
        expect(saida.ordernaId).toBe(entrada.ordernaId);
        expect(saida.quantidade).toBe(entrada.quantidade);
        expect(saida.estado).toBe("Aporvado");
    })
});