import notaFiscal from "../dominio/notaFiscal.dto";

export default interface NotaFiscalGateway{
    cria(NotaFiscal: notaFiscal): Promise<void>;
    procurar(id: string): Promise<notaFiscal>;
}