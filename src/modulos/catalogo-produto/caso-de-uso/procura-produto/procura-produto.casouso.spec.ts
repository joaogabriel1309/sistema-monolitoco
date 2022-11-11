//import Id from "../../../../@compartilhada/dominio/valor-do-objetos/id.valor-do-objetos";
import Id from "../../../@compartilhada/dominio/valor-do-objetos/id.valor-do-objetos";
import Produto from "../../domain/produto.entidade";
//import ProcuraTodosProdutosCasoUso from "../procura-todos-produtos/procura-todos-produtos.casoUso";
import ProcuraProdutoCasoUso from "./procura-produto.casouso";

const produto = new Produto({
    id: new Id("1"),
    nome: "produto",
    descricao: "descricao 1",
    precoVenda: 100,
});

const MockRepositorio = () => {
    return {
        procurarTodos: jest.fn(),
        procurar: jest.fn().mockReturnValue(Promise.resolve(produto)),
    };
};

describe("procura um produto Caso de Uso unit teste", () => {
    it("deve procurar um produto", async () => {
        const produtoRepositorio = MockRepositorio();
        const CasoUso = new ProcuraProdutoCasoUso(produtoRepositorio);

        const input = {
            id: "1",
        }

        const resultado = await CasoUso.execute(input);

        expect(produtoRepositorio.procurar).toHaveBeenCalled();
        expect(resultado.id).toBe("1");
        expect(resultado.nome).toBe("produto 1");
        expect(resultado.descricao).toBe("descricao 1");
        expect(resultado.precoVenda).toBe(100);
    });
});