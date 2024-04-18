import { getCustomRepository } from "typeorm";
import { SalesRepositories } from "../../repositories/SalesRepositories";

class ListSalesService {
    async execute() {
    const salesRepositories = getCustomRepository(SalesRepositories);
    const sales = await salesRepositories.find();
    return sales;
    }
}

export { ListSalesService };