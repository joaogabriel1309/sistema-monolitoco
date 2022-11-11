import { Column, Model, PrimaryKey, Table } from "sequelize-typescript"

@Table({    
    tableName: "tbnota",
    timestamps: false,
})

export class NotaModel extends  Model{
    @PrimaryKey
    @Column({
        allowNull: false
    })
    id: string

    @Column({
        allowNull: false 
    })
    nome: string

    @Column({
        allowNull: false 
    })
    preco: number

}