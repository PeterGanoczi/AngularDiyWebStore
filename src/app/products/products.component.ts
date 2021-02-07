import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/entities/product';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[];
  product: Product;
  router: Router;
  

  constructor(private productService: ProductsService) { 
    
  }

  ngOnInit(): void {


    this.productService.getProducts().subscribe(
      data=>{
        this.products=data;
      },
      err => {
        this.products=JSON.parse(err.error).message;
        
      }
    );

    }


}
