import {Sequelize} from "sequelize-typescript";
import Id from "../../@compartilhada/dominio/valor-do-objetos/id.valor-do-objetos";

import Produto from "../dominio/entidade-do-produto";
import { ProdutoModel } from "./produto.model";
import ProdutoRepositorio from "./produto.repositorio";
// import produtoRepositorio from "./produto.repositorio";

describe ("Repositorio de produtos teste", () => {
    let sequelize: Sequelize;

    beforeEach( async () => {
        sequelize = new Sequelize({
            dialect: "sqlite",
            storage: "memory",
            logging: false,
            sync: {force: true},
        });

        await sequelize.addModels([ProdutoModel]);
        await sequelize.sync();
    });
     
    afterEach(async () => {
        await sequelize.close();
    });

    //metodo de criação de um produto ID
    it("deve criar um produto", async () => {
        const produtoPropriedades = {
            id: new Id("1"),
            nome: "Produto 1",
            descricao: "produto 1 descrição",
            precocompra: 100,
            estoque: 10,
        };
        const produto = new Produto(produtoPropriedades);
        const produtoRepositorio = new ProdutoRepositorio();
        await produtoRepositorio.adicionar(produto);

        const produtoBD = await ProdutoModel.findOne({
            where: {id: produtoPropriedades.id.id},
        });

        expect(produtoPropriedades.id.id).toEqual(produtoPropriedades.id);
        expect(produtoPropriedades.nome).toEqual(produtoPropriedades.nome);
        expect(produtoPropriedades.descricao).toEqual(produtoPropriedades.descricao);
        expect(produtoPropriedades.precocompra).toEqual(produtoPropriedades.precocompra);
        expect(produtoPropriedades.estoque).toEqual(produtoPropriedades.estoque);
    })

    //metodo de procura de um produto
    it("deve procurar por um produto", async () => {
        const produtoRepositorio = new ProdutoRepositorio();

        ProdutoModel.create({
            id: "1",
            nome: "Produto 1",
            descricao: "produto 1 descrição",
            precocompra: 100,
            estoque: 10,
            // criaId: new Date(),
            // AtualizaId: new Date(),            
        })

        const produto = await produtoRepositorio.procurar("1");

        expect(produto.id.id).toEqual("1");
        expect(produto.nome).toEqual("Produto 1");
        expect(produto.descricao).toEqual("produto 1 descrição");
        expect(produto.precocompra).toEqual(100);
        expect(produto.estoque).toEqual(10);
    })
});