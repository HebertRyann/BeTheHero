import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('ong')
class Ong {
  
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  whatsapp: string;

  @Column()
  city: string;
  
  @Column()
  uf: string;
  
};

export { Ong };