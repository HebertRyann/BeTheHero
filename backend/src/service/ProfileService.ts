import { getCustomRepository, Repository } from "typeorm";
import { Incident } from "../entities/Incident";
import { IncidentsRepository } from "../repositories/IncidentsRepository";

class ProfileService {
  private incidentRepository: Repository<Incident>;

  constructor() {
    this.incidentRepository = getCustomRepository(IncidentsRepository);
  }

  async index(ong_id: string) {
    const incidents = await this.incidentRepository.find({ where: { ong_id }});

    if(incidents){
      return incidents
    }
    throw new Error('Not found incidents for this NGO')
  }
}

export { ProfileService };