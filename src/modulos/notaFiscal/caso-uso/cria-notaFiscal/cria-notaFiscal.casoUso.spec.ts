import endereco from "../../../@compartilhada/dominio/valor-do-objetos/endereco-do-objeto";
import Id from "../../../@compartilhada/dominio/valor-do-objetos/id.valor-do-objetos";
import items from "../../../@compartilhada/dominio/valor-do-objetos/items-do-objeto";
import notaFiscal from "../../dominio/notaFiscal.dto";
import ProcuraNotaFiscalCasoUso from "./cria-notaFiscal.casoUso";

const enderecosObjeto = new endereco({
    rua: "rua 1",
    numero: 1,
    complemento: "complemento 1",
    cidade: "cidade 1",
    estado: "estado 1",
    cep: "78470000"
});

const itemsObjeto = new items({
    id: new Id("1"),
    nome: "nome item",
    preco: 10,
})

const Nota = new notaFiscal({
    id: new Id("1"),
    nome: "Nota Fiscal 1",
    documento: "documento 1",
    endereco: enderecosObjeto,
    items: itemsObjeto,
    total: 100,
})

const SimulaRepositorio = () => {
    return {
        cria: jest.fn(),
        procurar: jest.fn().mockReturnValue(Promise.resolve(notaFiscal)),
    };
};

describe("Procurar Nota Fiscal da unit caso de uso", async () => {
    const repositorioNotaFiscal = SimulaRepositorio(); //instanciando o meu simula repositorio
    const CasoUso = new ProcuraNotaFiscalCasoUso(repositorioNotaFiscal); //passando a minha nota fiscal

    const entrada = { id: "1" };//minha nota fiscal

    const resultadoRecebido = await CasoUso.executa(entrada);

    expect(repositorioNotaFiscal.procurar).toHaveBeenCalled();
    expect(resultadoRecebido.id).toEqual(Nota.id);
    expect(resultadoRecebido.nome).toEqual(Nota.nome);
    expect(resultadoRecebido.nome).toEqual(Nota.documento);
    expect(resultadoRecebido.nome).toEqual(Nota.endereco);
    expect(resultadoRecebido.nome).toEqual(Nota.items);
    expect(resultadoRecebido.preco).toEqual(Nota.total);
});

