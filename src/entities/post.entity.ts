import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Comment } from "./comment.entity";
import { User } from "./user.entity";

@Entity("posts")
export class Post {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  description: string;

  @Column({nullable: true})
  media: string;

  @ManyToOne((type) => User, (user) => user.posts ,{eager: true})
  user: User;

  @OneToMany((type) => Comment, (comment) => comment.post)
  comments: Comment[]
}
