import { Sequelize } from "sequelize-typescript"
//import ProdutoRepositorio from "../../produto-adm/repositorio/produto.repositorio";
// import ProdutoRepositorio from "../../produto-adm/repositorio/produto.repositorio";
import ProdutoModel from "./produto.model";
import RepositorioProduto from "./repositorio.produto";

describe("repositorio de produto", () => {
    let sequelize: Sequelize;

    beforeEach(async () => {
        sequelize = new Sequelize({
           dialect: "sqlite",
           storage: "memory",
           logging: false,
           sync: {force: true},
            // dialect: "sqllite",
            // Storage: "memory",
            // logging:  false,
            // sync: { force: true},
        });

        await sequelize.addModels([ProdutoModel]);
        await sequelize.sync();
    });

    afterEach(async () => {
        await sequelize.close();
    })

    it("deve procurar todos os produtos", async () => {
        await ProdutoModel.create({
            id: "1",
            nome: "produto 1",
            descricao: "descricao 1",
            precoVenda: "100",
        });

        await ProdutoModel.create({
            id: "2",
            nome: "produto 2",
            descricao: "descricao 2",
            precoVenda: "200",
        });

        const produtoRepositorio = new RepositorioProduto();
        const produto = await produtoRepositorio.procurarTodos();

        expect(produto.length).toBe(2);
        expect(produto[0].id.id).toBe("1");
        expect(produto[0].nome).toBe("produto 1");
        expect(produto[0].descricao).toBe("descricao 1");
        expect(produto[0].precoVenda).toBe(100);

        expect(produto[0].id.id).toBe("2");
        expect(produto[0].nome).toBe("produto 2");
        expect(produto[0].descricao).toBe("descricao 2");
        expect(produto[0].precoVenda).toBe(200);        
    })

    //implementado a procura por um produto apenas para estudo pq nao faz sendito implementar a buscar por um 
    //produto aqui.....
    it("deve procurar por produto", async () => {
        await ProdutoModel.create({
            Id: "1",
            nome: "produto 1",
            descricao: "descricao 1",
            precoVenda: 100,
        });

        const produtoRepositorio = new RepositorioProduto();
        const produto = await produtoRepositorio.procurarTodos();

        expect(produto.length).toBe(1);
        expect(produto[0].id.id).toBe("1");
        expect(produto[0].nome).toBe("produto 1");
        expect(produto[0].descricao).toBe("descricao 1");
        expect(produto[0].precoVenda).toBe(100);
    })
});