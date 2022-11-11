import { Sequelize } from "sequelize-typescript"
import { ClienteModel } from "./cliente.model";
import ClienteRepositorio from "./cliente.repositorio";

describe("Cliente repostorio teste", () => {
    let sequelize: Sequelize;
    
    beforeEach( async () => {
        sequelize = new Sequelize({
            dialect: "sqlite",
            storage: "memory",
            logging: false,
            sync: {force: true},
        });

        await sequelize.addModels([ClienteModel]);
        await sequelize.sync();
    });

    afterEach(async () => {
        await sequelize.close();
    })

    it ("Deve procurar um cliente", async () => {
        const cliente = await ClienteModel.create({
            id:"1",
            nome: "cliente 1",
            email: "x@x.com",
            endereco: "endereco 1",
            criaId: new Date(),
            atualizaId: new Date(),
        })

        const repositorio = new ClienteRepositorio();
        const resultado = await repositorio.procura(cliente.id);

        expect(resultado.id.id).toEqual(cliente.id);
        expect(resultado.nome).toEqual(cliente.nome);
        expect(resultado.email).toEqual(cliente.email);
        expect(resultado.endereco).toEqual(cliente.endereco);
        expect(resultado.criaid).toEqual(cliente.criaId);
        expect(resultado.atualizaid).toEqual(cliente.atualiza);
    })
}) 