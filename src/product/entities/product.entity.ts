import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Product {

    @PrimaryColumn({unique: true})
    id: number;

    @Column({unique: true})
    title: string;

    @Column()
    description: string;

}
