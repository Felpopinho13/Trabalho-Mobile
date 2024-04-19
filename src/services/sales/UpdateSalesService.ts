import { getCustomRepository } from "typeorm";
import { SalesRepositories } from "../../repositories/SalesRepositories"; import { hash } from "bcryptjs";
interface ISalesRequest {
id: string; codproduto:number; produto: string; cliente: string; quantidade: number; valor: number; desconto: number;
}  
class UpdateSalesService {
async execute({ id, codproduto, produto, cliente, quantidade, valor, desconto}: ISalesRequest) {
    const salesRepository = getCustomRepository(SalesRepositories);
    const salesAlreadyExists = await salesRepository.findOne({
    id,
    });
    if (!salesAlreadyExists) {
        throw new Error("Sale not exists")
    }
    salesAlreadyExists.codproduto=codproduto
    salesAlreadyExists.produto=produto
    salesAlreadyExists.cliente=cliente
    salesAlreadyExists.quantidade=quantidade
    salesAlreadyExists.valor=valor
    salesAlreadyExists.desconto=desconto
    salesAlreadyExists.updated_at=new Date()
    return await salesRepository.update(id,salesAlreadyExists)
}
}  
export { UpdateSalesService };