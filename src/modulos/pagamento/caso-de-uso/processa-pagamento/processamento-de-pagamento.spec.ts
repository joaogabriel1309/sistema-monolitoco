import Id from "../../../@compartilhada/dominio/valor-do-objetos/id.valor-do-objetos";
import Transicao from "../../dominio/transicao";
import ProcessamentoPagamentoCasoUso from "./processamento-de-pagamento.caso-de-uso";

const transicao = new Transicao({
   id: new Id("1"),
   quantidade: 100,
   ordenaId: "1",
   estado: "Aprovado",
});

const SimulaRepositorio = () => {
   return {salvar: jest.fn().mockReturnValue(Promise.resolve(transicao))};
};

const transicao2 = new Transicao({
   id: new Id("1"),
   quantidade: 50,
   ordenaId: "1",
   estado: "Declinado",
});

const SimulaRepositorioDeclina = () => {
   return {salvar: jest.fn().mockReturnValue(Promise.resolve(transicao2))};
};

describe("processo de pagamento unit teste", () => {
   
   it ("deve aprovar uma transação",async () => {
      const repositorioPagamento = SimulaRepositorio();
      const casoUso = new ProcessamentoPagamentoCasoUso(repositorioPagamento);
      const Entrada = {
         ordenaId: "1",
         quantidade: 100,
      };
   
      const Resultado = await casoUso.executa(Entrada);      
      
      expect(Resultado.IdTransacao).toBe(transicao.id.id);
      expect(repositorioPagamento.salvar).toHaveBeenCalled();
      expect(Resultado.estados).toBe("Aprovado");
      expect(Resultado.quantidade).toBe(100);
      expect(Resultado.ordenaId).toBe("1");
      expect(Resultado.criaId).toBe(transicao.criaid);
      expect(Resultado.atualizaId).toBe(transicao.atualizaid);
   })

   it ("deve declinar uma transação",async () => {
      const repositorioPagamento = SimulaRepositorioDeclina();
      const casoUso = new ProcessamentoPagamentoCasoUso(repositorioPagamento);
      const Entrada = {
         ordenaId: "1",
         quantidade: 100,
      };
   
      const Resultado = await casoUso.executa(Entrada);      
      
      expect(Resultado.IdTransacao).toBe(transicao2.id.id);
      expect(repositorioPagamento.salvar).toHaveBeenCalled();
      expect(Resultado.estados).toBe("Declinado");
      expect(Resultado.quantidade).toBe(50);
      expect(Resultado.ordenaId).toBe("1");
      expect(Resultado.criaId).toBe(transicao2.criaid);
      expect(Resultado.atualizaId).toBe(transicao2.atualizaid);
   })
})