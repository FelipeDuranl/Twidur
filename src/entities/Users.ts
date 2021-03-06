import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid} from "uuid";

@Entity("Users")
export class User{

  @PrimaryColumn()
  id: string;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;

  constructor(){
    if(!this.id) {
      this.id = uuid();
    }
  }
}