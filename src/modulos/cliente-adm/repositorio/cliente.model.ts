import { Column, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({
    tableName: "tbcliente",
    timestamps: false,
})
export class ClienteModel extends Model{
    @PrimaryKey
    @Column({ allowNull: false })
    id: string;

    @Column({ allowNull: false})
    nome: string

    @Column({ allowNull: false})
    email:string

    @Column({ allowNull: false})
    endereco: string

    @Column({ allowNull: false})
    criaId: Date

    @Column({ allowNull: false})
    atualiza: Date
}