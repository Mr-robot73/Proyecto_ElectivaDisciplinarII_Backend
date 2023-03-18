import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from './product.entitie';
import { Repository } from 'typeorm';
import { CreateNewProjectDto } from './dto/create-product.dto';
import { UpdateProjectDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private ProductsRepository: Repository<Products>,
  ) {}

  createProduct(product: CreateNewProjectDto): string {
    this.ProductsRepository.findOne({where:{code: product.code}})
    this.ProductsRepository.create(product);
    return 'Se ha registrado un producto nuevo satisfactoriamente';
  }
  getAllProducts() {
    return this.ProductsRepository.find();
  }
  getProduct(id: number) {
    return this.ProductsRepository.findOne({ where: { id } });
  }
  deliteProduct(id: number) {
    this.ProductsRepository.delete({ id });
    return 'Se ha eliminado correctamente.';
  }
  updateProduct(id: number, product: UpdateProjectDto) {
    this.ProductsRepository.update({ id }, product);
    return 'Se ha actualizado correctamente.';
  }
}
