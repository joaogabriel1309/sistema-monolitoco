
import Id from "../../../@compartilhada/dominio/valor-do-objetos/id.valor-do-objetos";
import ProcuraProdutoCasoUso from "../../../catalogo-produto/caso-de-uso/procura-produto/procura-produto.casouso";
import Cliente from "../../domain/cliente.entidade";
import ProcuraClienteCasoUso from "./procura-cliente.casouso";

const cliente = new Cliente({
    id: new Id("1"),
    nome: "cliente 1",
    email: "x@X.com",
    endereco: "endereco 1",
});

const MockRepository = () => {
    return{
        adiciona: jest.fn(),
        procura: jest.fn().mockReturnValue(Promise.resolve(Cliente)),
    };
};

describe("procurar cliente da unit CasoUso teste", async () => {
    const repositorio = MockRepository();
    const casouso = new ProcuraClienteCasoUso(repositorio);

    const entrada = {
        id: "1",
    };

    const resultado = await casouso.execute(entrada);

    expect(repositorio.procura).toHaveBeenCalled();
    expect(resultado.id).toEqual(entrada.id);
    expect(resultado.nome).toEqual(cliente.nome);
    expect(resultado.email).toEqual(cliente.email);
    expect(resultado.endereco).toEqual(cliente.endereco);
    expect(resultado.criaId).toEqual(cliente.criaid);
    expect(resultado.atualizaId).toEqual(cliente.atualizaid);
});