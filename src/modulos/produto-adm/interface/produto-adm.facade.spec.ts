import { Sequelize } from "sequelize-typescript"
import ProdutoAdmFacadeFactory from "../factory/facade.factory";
import { ProdutoModel } from "../repositorio/produto.model";

describe ("ProdutoAdmFacade Teste", () => {
    let sequelize: Sequelize;
    beforeEach(async () => {
        sequelize = new Sequelize({
            dialect: "sqlite",
            storage: ":memory",
            logging: false,
            sync: { force: true}
        });
        await sequelize.addModels([ProdutoModel]);
        await sequelize.sync();
    });

    afterEach(async () => {
        await sequelize.close();
    })

    it ("Deve criar um produto", async () => {
        // const produtoRepositorio = new ProdutoRepositorio();
        // const adicionaProdutoCasoUso = new AdicionaProdutoCasoDeUso(produtoRepositorio);
        // const produtoFacade = new ProdutoAdmFacade({
        //     AdicionaCasoUso: adicionaProdutoCasoUso,
        //     EstoqueCasoUso: undefined,
        // });

        const produtoFacade = ProdutoAdmFacadeFactory.cria();

        const entrada = {
            id: "1",
            nome: "Produto 1",
            descricao: "Produto 1 descricao",
            precocompra: 10,
            estoque: 10,
        }

       // await produtoFacade.AdcionarProduto(entrada);

        const produto = await ProdutoModel.findOne({ where: {id: "1"}});
        expect(produto).toBeDefined();
        expect(produto.id).toBe(entrada.id);
        expect(produto.nome).toBe(entrada.nome);
        expect(produto.descricao).toBe(entrada.descricao);
        expect(produto.precocompra).toBe(entrada.precocompra);
        expect(produto.estoque).toBe(entrada.estoque);
    })
})