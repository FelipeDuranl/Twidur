import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid} from "uuid";
import { User } from "./Users";

@Entity("Posts")
export class Post{

  @PrimaryColumn()
  id: string;

  @Column()
  message: string;

  @Column()
  likes: number;

  @Column()
  user_id: string;

  @ManyToOne(()=> User)
  @JoinColumn({ name: "user_id" })
  Users: User;

  @CreateDateColumn()
  created_at: Date;

  constructor(){
    if (!this.id) {
      this.id = uuid();
    }
  }
}