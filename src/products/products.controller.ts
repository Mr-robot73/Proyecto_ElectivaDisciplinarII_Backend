import {
  Controller,
  Post,
  Body,
  Get,
  Delete,
  Patch,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateNewProjectDto } from './dto/create-product.dto';
import { UpdateProjectDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  createProduct(@Body() newProduct: CreateNewProjectDto) {
    return this.productsService.createProduct(newProduct);
  }

  @Get()
  getAllProducts() {
    return this.productsService.getAllProducts();
  }

  @Get(':id')
  getProduct(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.getProduct(id);
  }

  @Delete(':id')
  updateProduct(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.deliteProduct(id);
  }

  @Patch(':id')
  cdeliteProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProduct: UpdateProjectDto,
  ) {
    return this.productsService.updateProduct(id, updateProduct);
  }
}
