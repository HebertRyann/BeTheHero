import { EntityRepository, Repository } from "typeorm";
import { Session } from "../entities/Session";

@EntityRepository(Session)
class SessionRepository extends Repository<Session> {

}

export { SessionRepository };