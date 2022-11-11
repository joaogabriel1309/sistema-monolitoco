//import { table } from "console";
import { Table, Column, Model, PrimaryKey} from "sequelize-typescript";

@Table({
    tableName: "Produtos",
    timestamps: false,
})

//criando uma tabela bem simples apenas para salvar os dados...
export default class ProdutoModel extends Model{
    @PrimaryKey
    @Column({ allowNull: false})
    id: string;

    @Column({ allowNull: false})
    nome: string;

    @Column({ allowNull: false})
    descricao: string;

    @Column({ allowNull: false})
    precoVenda: number;
}