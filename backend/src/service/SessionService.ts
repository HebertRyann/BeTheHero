import { getCustomRepository, Repository } from "typeorm";
import { Session } from "../entities/Session";
import { SessionRepository } from "../repositories/SessionRepository";

class SessionService {
  private sessionRepository: Repository<Session>;

  constructor() {
    this.sessionRepository = getCustomRepository(SessionRepository);
  }

  async create(name: string) {
    const findOng = await this.sessionRepository.findOne({
      where: {
        name
      } 
    })

    if(findOng) {
      return findOng
    }
    throw new Error('This name not found');
  };
}

export { SessionService };