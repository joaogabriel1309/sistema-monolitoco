import { Sequelize } from "sequelize-typescript";
import Id from "../../@compartilhada/dominio/valor-do-objetos/id.valor-do-objetos";
import AdicionarClienteCasoUso from "../casouso/adiciona-cliente/adiciona-cliente.casouso";
import { ClienteModel } from "../repositorio/cliente.model";
import ClienteRepositorio from "../repositorio/cliente.repositorio";
import clienteAdmFacade from "./cliente-adm.facade";

describe("cliente repositorio teste", () => {
    let sequelize: Sequelize;
    
    beforeEach( async () => {
        sequelize = new Sequelize({
            dialect: "sqlite",
            storage: "memory",
            logging: false,
            sync: {force: true},
        });

        //transacao model e a onde e criado a minha tabela com as minhas colunas
        await sequelize.addModels([ClienteModel]);
        await sequelize.sync();
    });

    afterEach(async () => {
        await sequelize.close();
    })

    it("deve criar um cliente",async () => {
        const repositorio = new ClienteRepositorio();
        const AdicionaCasoUso = new AdicionarClienteCasoUso(repositorio);
        const facade = new clienteAdmFacade({
            adicionaCasoUso: AdicionaCasoUso,  
            procuraCasoUso: undefined,                      
        });
        
        const entrada = {
            id: new Id("1"),
            nome: "joao1",
            email: "joao@gmail.com",
            endereco: "teste1",
        }
        await facade.adiciona(entrada);

        const cliente = await ClienteModel.findOne({ where: {id: "1"}});

        expect(cliente).toBeDefined();
        expect(cliente.nome).toBe(entrada.nome);
        expect(cliente.email).toBe(entrada.email);
        expect(cliente.endereco).toBe(entrada.endereco);
    })

    //criar teste para procuara um cliente
});