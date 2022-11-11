
import Id from "../../../@compartilhada/dominio/valor-do-objetos/id.valor-do-objetos";
import Produto from "../../dominio/entidade-do-produto";
//import ProdutoRepositorio from "../../repositorio/produto.repositorio";
import ChecarEstoqueCasoUso from "./checa-estoque.casouso";

const produto = new Produto({
    id: new Id("1"),
    nome: "Produto",
    descricao: "produto descricao",
    precocompra: 100,
    estoque: 10,
});

const MockRepositorio = () => {
    return{
        adicionar: jest.fn(),
        procurar: jest.fn().mockReturnValue(Promise.resolve(produto)),
    };
};

describe("cheque estoque caso de uso unit teste", () => {
    it("deve obter estoque de um produto", async () => {
        const RepositorioProduto = MockRepositorio();
        const checarEstoqueCasoUso = new ChecarEstoqueCasoUso(RepositorioProduto);
        const entrada = { 
            produtoId: "1",
        };

        const resultado = await checarEstoqueCasoUso.executar(entrada);

        expect(RepositorioProduto.procurar).toHaveBeenCalled();
        expect(resultado.produtoId).toBe("1");
        expect(resultado.estoque).toBe(10);
    });
});