import { Sequelize } from "sequelize-typescript"
import ArmazenaCatalogoFacadeFactory from "../factory/facade.factory";
import ProdutoModel from "../repositorio/produto.model";

describe("armazena catalogo facade teste", () => {
    let sequelize: Sequelize;

    beforeEach(async () => {
        sequelize = new Sequelize({
            dialect: "sqlite",
            storage: ":memory",
            logging: false,
            sync: {force: true},
        });

        await sequelize.addModels([ProdutoModel]);
        await sequelize.sync();        
    });

    afterEach(async () => {
        await sequelize.close();
    });

    it("deve procurar produto", async () => {
        const facade = ArmazenaCatalogoFacadeFactory.create();
        await ProdutoModel.create({
            id: "1",
            nome: "Porduto 1",
            descricao: "descricao 1",
            precoVenda: 100,
        });

        const resultado = await facade.procura({id: "1"});

        expect(resultado.id).toBe("1");
        expect(resultado.nome).toBe("produto 1");
        expect(resultado.descricao).toBe("descricao 1");
        expect(resultado.precoVenda).toBe(100);
    });

    it("deve procurar todos os produtos", async () => {
        const facade = ArmazenaCatalogoFacadeFactory.create();
        await ProdutoModel.create({
            id:"1",
            nome:"produto 1",
            descricao: "descricao 1",
            precoVenda: 100,            
        });

        await ProdutoModel.create({
            id:"2",
            nome:"produto 2",
            descricao: "descricao 2",
            precoVenda: 200,            
        });

        const resultado = await facade.procuraTodos();

        expect(resultado.produto.length).toBe(2);
        expect(resultado.produto[0].id).toBe("1");
        expect(resultado.produto[0].nome).toBe("produto 1");
        expect(resultado.produto[0].descricao).toBe("descricao 1");
        expect(resultado.produto[0].precoVenda).toBe(100);
        expect(resultado.produto[1].id).toBe("2");
        expect(resultado.produto[1].nome).toBe("produto 2");
        expect(resultado.produto[1].descricao).toBe("descricao 2");
        expect(resultado.produto[1].precoVenda).toBe(200);
    });
});