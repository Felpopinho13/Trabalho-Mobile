import {Entity,PrimaryColumn,Column,CreateDateColumn,UpdateDateColumn,
} from "typeorm";
    import { v4 as uuid } from "uuid";  
    @Entity("sales")
    class Sales {
    @PrimaryColumn()
    readonly id!: string ;  
    @Column()
        codproduto!: number;  
    @Column()
        produto!: string;  
    @Column()
        cliente!: string;
    @Column()
        quantidade!: number;
    @Column()
        valor!: number;
    @Column()   
        desconto!: number;
    @CreateDateColumn()
        created_at!: Date;  
    @UpdateDateColumn()
        updated_at!: Date;  
    constructor() {
        if (!this.id) {
        this.id = uuid();
        }
    }
}

export { Sales };