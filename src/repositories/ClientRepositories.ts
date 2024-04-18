import { EntityRepository, Repository } from "typeorm";
import { Client } from "../entities/Client";

@EntityRepository(Client)
class ClientRepositories extends Repository<Client> {}

export { ClientRepositories };