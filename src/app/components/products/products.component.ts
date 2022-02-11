import { Component, OnInit } from '@angular/core';
import { Product } from './../../models/product.model';

import { ProductsService } from './../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productsService.getAllSimple()
    .subscribe(products => {
      this.products = products;
    });
  }

}
