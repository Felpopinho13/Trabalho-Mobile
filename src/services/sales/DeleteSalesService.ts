import { getCustomRepository } from "typeorm";
import { SalesRepositories } from "../../repositories/SalesRepositories";
interface ISalesDelete {
    id: string;
}
class DeleteSalesService {
  async execute({id}:ISalesDelete) {
      const salesRepository = getCustomRepository(SalesRepositories);
      const salesAlreadyExists = await salesRepository.findOne({
        id,
      });
      if (!salesAlreadyExists) {
          throw new Error("Sale not exists");
      }
      return await salesRepository.delete(id);           
  }
}
export { DeleteSalesService };