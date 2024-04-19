import { hash } from "bcryptjs";
import { SalesRepositories } from "../../repositories/SalesRepositories";
import { getCustomRepository } from "typeorm";
interface ISalesRequest { codproduto:number; produto: string; cliente: string; quantidade: number; valor: number; desconto: number; }
class CreateSalesService {
  async execute({ codproduto, produto, cliente, quantidade, valor, desconto }: ISalesRequest) {
    if (!codproduto) {
      throw new Error("Codigo incorreto");
    }
    const salesRepository = getCustomRepository(SalesRepositories);
    const salesAlreadyExists = await salesRepository.findOne({
      codproduto,
    });
    if (salesAlreadyExists) {
      throw new Error("User already exists");
    }
    const sales = salesRepository.create({ codproduto, produto, cliente, quantidade, valor, desconto });
    await salesRepository.save(sales);
    return sales;
  }
}
export { CreateSalesService };
