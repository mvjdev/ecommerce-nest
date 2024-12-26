import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('/products')
  findAll() {
    return this.productService.findAll();
  }

  @Get('/products/:id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Post('/products/')
  create(@Body() createProductDto: CreateProductDto){
    return this.productService.create(createProductDto);
  }

  @Delete('/products/:id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
