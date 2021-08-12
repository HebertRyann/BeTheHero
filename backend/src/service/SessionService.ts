import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository, Repository } from "typeorm";
import { Ong } from "../entities/Ong";
import { OngRepository } from "../repositories/OngRepository";

class SessionService {
  private ongRepository: Repository<Ong>;

  constructor() {
    this.ongRepository = getCustomRepository(OngRepository);
  }

  async execute(name: string, password: string) {
    const findOng = await this.ongRepository.findOne({
      where: {
        name
      } 
    });

    if (!findOng) {
      throw new Error('This name/password is incorrect');  
    }

    const comparePassword = await compare(password, findOng.password)
    
    if(comparePassword) {
      const token = sign({}, process.env.SECRET_STRING_HASH, {
        subject: findOng.id,
        expiresIn: '1d'
      })
      return {
        ong: findOng,
        token
      }
    }

    throw new Error('This name/password is incorrect');
  };

  async index(id: string) {
    const ong = await this.ongRepository.findOne({
      where: {
        id,
      }
    });


    if(!ong) {
      throw new Error('This ong ID not found');
    }
    return ong;
  };

}

export { SessionService };