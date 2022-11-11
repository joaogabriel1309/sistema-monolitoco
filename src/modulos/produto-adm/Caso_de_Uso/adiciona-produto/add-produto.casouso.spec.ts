import AdicionaProdutoCasoDeUso from "./add-produto.casouso";

const MockRepositorio = () =>{
    return{
        adicionar: jest.fn(),
        procurar: jest.fn(),
    };
}

describe("Adicionar teste de unidade de usecase do produto", () => {
    it("Deve adicionar um produto", async () => {
        const repositorioProduto = MockRepositorio();
        const CasoDeUso = new AdicionaProdutoCasoDeUso(repositorioProduto);

        const entrada = {
            nome: "Produto1",
            descricao: "Produto 1 descrição",
            precocompra: 100,
            estoque: 10,
        };

        const resultado = await CasoDeUso.execute(entrada);

        expect(repositorioProduto.adicionar).toHaveBeenCalled();
        expect(resultado.id).toBeDefined;
        expect(resultado.nome).toBe(entrada.nome);
        expect(resultado.descricao).toBe(entrada.descricao);
        expect(resultado.precocompra).toBe(entrada.precocompra);
        expect(resultado.estoque).toBe(entrada.estoque);
    })
})