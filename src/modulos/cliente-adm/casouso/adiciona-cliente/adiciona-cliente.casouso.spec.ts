// import RepositorioProduto from "../../../catalogo-produto/repositorio/repositorio.produto";
import ProdutoRepositorio from "../../../produto-adm/repositorio/produto.repositorio";
import AdicionarClienteCasoUso from "./adiciona-cliente.casouso";

const MockRepositorio = () => {
    return{
        adiciona: jest.fn(),
        procura: jest.fn(),
    };
};

describe("Adciona cliente da unit CasoUso", () => {
    it("deve adicionar cliente", async () => {
        const repositorio = MockRepositorio();
        const casouso = new AdicionarClienteCasoUso(repositorio);

        const entrada = {
            nome: "cliente 1",
            email: "x@x.com",
            endereco: "endereco 1",
        };

        const resultado = await casouso.execute(entrada);

        expect(repositorio.adiciona).toHaveBeenCalled();
        expect(resultado.id).toBeDefined();
        expect(resultado.nome).toEqual(entrada.nome);
        expect(resultado.email).toEqual(entrada.email);
        expect(resultado.endereco).toEqual(entrada.endereco);        
    });
});