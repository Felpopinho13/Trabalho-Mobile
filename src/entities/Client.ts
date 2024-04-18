import {Entity,PrimaryColumn,Column,CreateDateColumn,UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";  
@Entity("client")
class Client {
    @PrimaryColumn()
    readonly id!: string ;  
    @Column()
        nome!: string;
    @Column()
        CPF!: string;  
    @Column()
        email!: string;  
    @Column()
        endereco!: string;  
    @Column()
        bairro!: string;
    @Column()
        cidade!: string;
    @Column()  
        estado!: string;
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

export { Client };