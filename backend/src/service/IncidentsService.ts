import { getCustomRepository, Repository } from "typeorm";
import { Incident } from "../entities/Incident";
import { IncidentsRepository } from "../repositories/IncidentsRepository";
import { IIncidentCreate } from "../types";

class IncidentsService {
  private incidentsRepository: Repository<Incident>

  constructor() {
    this.incidentsRepository = getCustomRepository(IncidentsRepository);
  }

  async index() {
    const incidents = await this.incidentsRepository.find();
    return incidents;
  }

  async create({ description, id, ong_id, title, value }: IIncidentCreate) {
    console.log(description, id, ong_id, title, value)
    const incident = this.incidentsRepository.create({
      description,
      id,
      ong_id,
      title,
      value
    })

    await this.incidentsRepository.save(incident);

    return incident;
  }

  async delete(id: string) {
    await this.incidentsRepository.delete(id);
  }
}

export { IncidentsService };