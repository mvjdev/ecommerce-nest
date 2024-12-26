import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryColumn({unique: true})
    id:string;

    @Column()
    name:string;

    @Column({unique: true})
    email:string;

    @Column()
    password:string;
}
