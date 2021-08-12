import { getCustomRepository, Repository } from "typeorm";
import { Incident } from "../entities/Incident";
import { IncidentsRepository } from "../repositories/IncidentsRepository";
import { IIncidentCreate } from "../types";

class IncidentsService {
  private incidentsRepository: Repository<Incident>

  constructor() {
    this.incidentsRepository = getCustomRepository(IncidentsRepository);
  }

  async index(skip: number) {
    const incidents = await this.incidentsRepository.find({
      take: 5,
      skip,
    });
    const total = await this.incidentsRepository.find()
    return { incidents, total: total.length };
  }

  async create({ description, id, ong_id, title, value }: IIncidentCreate) {
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