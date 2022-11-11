
import Id from "../../../@compartilhada/dominio/valor-do-objetos/id.valor-do-objetos";
import Produto from "../../domain/produto.entidade";
import ProcuraTodosProdutosCasoUso from "./procura-todos-produtos.casoUso";
//import ProcuraTodosProdutosCasoUso from "./procura-todos-produtos.casoUso";

const produto = new Produto({
    id: new Id("1"),
    nome: "Produto 1",
    descricao: "Descricao 1",
    precoVenda: 100,
});

const produto2 = new Produto({
    id: new Id("2"),
    nome: "Produto 2",
    descricao: "descricao 2",
    precoVenda: 200,
});

const MockRepositorio = () => {
    return {
        procurar: jest.fn(),
        procurarTodos: jest.fn().mockResolvedValue(Promise.resolve([produto, produto2])),
    };
};

describe("procura todos produtos caso de uso unit teste", () => {
    it("deve procurar por todos os produtos", async () => {
       const RepositorioProduto = MockRepositorio();
       const casouso = new ProcuraTodosProdutosCasoUso(RepositorioProduto);
       
       const resultado = await casouso.executa();

       expect(RepositorioProduto.procurar).toHaveBeenCalled();
       expect(resultado.produto.length).toBe(2);//definindo a quantidade de teste de produto no caso 2 produtos
       
       //caso de teste 01
       expect(resultado.produto[0].id).toBe("1");
       expect(resultado.produto[0].nome).toBe("produto 1");
       expect(resultado.produto[0].descricao).toBe("descricao 1");
       expect(resultado.produto[0].precoVenda).toBe(100);

       //caso de teste 02
       expect(resultado.produto[1].id).toBe("2");
       expect(resultado.produto[1].nome).toBe("produto 2");
       expect(resultado.produto[1].descricao).toBe("descricao 2");
       expect(resultado.produto[1].precoVenda).toBe(200);
    })
})
