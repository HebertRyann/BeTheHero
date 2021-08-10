import { EntityRepository, Repository } from "typeorm";
import { Incident } from "../entities/Incident";

@EntityRepository(Incident)
class IncidentsRepository extends Repository<Incident> {

}

export { IncidentsRepository };