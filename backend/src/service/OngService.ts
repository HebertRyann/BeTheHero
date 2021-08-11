import { getCustomRepository, Repository } from "typeorm";
import { Ong } from "../entities/Ong";
import { OngRepository } from "../repositories/OngRepository";
import { IOngCreate } from "../types";
import { hash } from "bcryptjs";

class OngService {
  private ongRepository: Repository<Ong>;
  
  constructor() {
    this.ongRepository = getCustomRepository(OngRepository);
  }

  async index() {
    const ongs = await this.ongRepository.find();
    return ongs
  }

  async create({ city, email, name, uf, whatsapp, id, password }: IOngCreate) {
    const findOng = await this.ongRepository.findOne({ where: { name } });

    const hashedPassword = await hash(password, 8);

    if(!findOng){
      const ong = this.ongRepository.create({
        city,
        email,
        name,
        password: hashedPassword,
        uf,
        whatsapp,
        id,
      });

      await this.ongRepository.save(ong);

      return ong;
    }
    throw new Error("This name already used");
  }

  async findOng(name: string) {
    const ong = await this.ongRepository.findOne({
      where: {
        name,
      }
    });

    if(ong) {
      return ong
    }
    throw new Error('ONG not found');
  };
}

export { OngService };