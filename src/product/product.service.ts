import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  constructor(@InjectRepository(Product) private readonly repository: Repository<Product>){}
  private products: Product[] = [];

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }

  create(createProductDto: CreateProductDto):Product{
    const newProduct = new Product();
    newProduct.id = Date.now(); // Générer un ID (vous pouvez utiliser autre chose ici)
    newProduct.title = createProductDto.title;
    newProduct.description = createProductDto.description;

    this.products.push(newProduct); // Ajouter au tableau simulé
    return newProduct;
  }
}
