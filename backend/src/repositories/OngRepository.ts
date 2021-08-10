import { EntityRepository, Repository } from "typeorm";
import { Ong } from "../entities/Ong";

@EntityRepository(Ong)
class OngRepository extends Repository<Ong> {}

export { OngRepository };