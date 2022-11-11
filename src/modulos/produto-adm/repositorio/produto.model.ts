import { Column, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({
    tableName: "TBProduto",
    timestamps: false,
})

export class ProdutoModel extends Model{
    @PrimaryKey
    @Column({ allowNull: false})
    id: string;
    @Column({ allowNull: false})
    nome: string;
    @Column({ allowNull: false})
    descricao: string;
    @Column({ allowNull: false})
    precocompra: number;
    @Column({ allowNull: false})
    estoque: number;
    @Column({ allowNull: false})  
    criaId: Date;
    @Column({ allowNull: false})
    AtualizaId:Date;  
}