import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('incidents')
class Incident {

  @PrimaryColumn()
  id: string;
  
  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  value: number;

  @Column()
  ong_id: string;
  
};

export { Incident };