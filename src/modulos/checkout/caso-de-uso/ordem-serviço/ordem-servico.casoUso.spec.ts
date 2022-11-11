import OrdemServicoCasoUso from "./ordem-servico.casoUso";
import { OrdemServicoEntradaDto } from "./orderm-servico.dto";

describe ("Ordem de serviço unit teste", () => {
    describe("executar metodo", () => {
        it("deve retornar um erro caso cliente não existir", async () => {
            const SimulaclientFacade = { 
                procura: jest.fn().mockResolvedValue(null),
            };
            //@ts-expect-error - parametro nao construido 
            const ordemServicoCasoUso = new OrdemServicoCasoUso();
            //@ts-expect-error - forca pegar cliente
            OrdemServicoCasoUso["_clienteFacade"] = SimulaclientFacade;
            const entrada: OrdemServicoEntradaDto = {clienteID: "0", produto: []};
            await expect(ordemServicoCasoUso.executa(entrada)).rejects.toThrow(
                new Error("Cliente não existe")
            );
        });

        it("deve retornar um erro caso o produto nao estaja validado", async () => {
            const SimulaclienteFacade = {
                procura: jest.fn().mockRejectedValue(true),
            };
            //@ts-expect-error - parametro nao contruido
            const ordemServicoCasoUso = new OrdemServicoCasoUso();
            const SimulaValidadorProduto = jest
            //@ts-expect-error - metodo do tipo privado
            .spyOn(ordemServicoCasoUso, "ValidaProduto")
            //@ts-expect-error - nao retorna nunca
            .mockRejectedValue(new Error("Produto nao selecionado"))
            //@ts-expect-error - forca pegar cliente
            ordemServicoCasoUso["_clienteFacade"] = SimulaclienteFacade;
            const entrada: OrdemServicoEntradaDto = { clienteID: "1", produto: []};
            await expect(ordemServicoCasoUso.executa(entrada)).rejects.toThrow(
                new Error("produto nao selecionado")
            )
            expect(SimulaValidadorProduto).toHaveBeenCalledTimes(1);
        })
    })
})