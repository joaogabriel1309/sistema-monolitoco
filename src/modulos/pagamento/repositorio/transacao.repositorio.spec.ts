import { Sequelize } from "sequelize-typescript";
import Id from "../../@compartilhada/dominio/valor-do-objetos/id.valor-do-objetos";
import Transicao from "../dominio/transicao";
import TransacaoModel from "./transacao.model";
import TransacaoRepositorio from "./transacao.repositorio";

describe("transação repositorio teste", () => {
    let sequelize: Sequelize;
    
    beforeEach( async () => {
        sequelize = new Sequelize({
            dialect: "sqlite",
            storage: "memory",
            logging: false,
            sync: {force: true},
        });

        await sequelize.addModels([TransacaoModel]);
        await sequelize.sync();
    });

    afterEach(async () => {
        await sequelize.close();
    })
    
    it ("Deve salvar uma transação", async () => {
        const transacao = new Transicao({
            id: new Id("1"),
            quantidade: 100,
            ordenaId: "1",
        })
        transacao.aprovado();

        const repositorio = new TransacaoRepositorio();
        const resultado = await repositorio.salvar(transacao);

        expect(resultado.id.id).toBe(transacao.id.id);
        expect(resultado.estado).toBe("Aprovado");
        expect(resultado.quantidade).toBe(transacao.quantidade);
        expect(resultado.ordenaId).toBe(transacao.ordenaId);                
    })
});