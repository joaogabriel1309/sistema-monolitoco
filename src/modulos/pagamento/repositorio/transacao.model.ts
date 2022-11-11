import { Column, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({
    tableName: "TBTRANSACAO",
    timestamps: false,
})

export default class TransacaoModel extends Model {
        
    @PrimaryKey
    @Column({ allowNull: false })    
    id: string;

    @Column({ allowNull: false, field: "order_id" })
    orderId: string;
    
    @Column({ allowNull: false })
    qauntidade: number;
    
    @Column({ allowNull: false })
    estado: string;
    
    @Column({ allowNull: false, field: "cria_id" })
    criaId: Date;
    
    @Column({ allowNull: false, field: "atualiza_id" })
    atualizaId: Date;
}