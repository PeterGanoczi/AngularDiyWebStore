import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import {switchMap} from 'rxjs/operators';
import { Product } from 'src/entities/product';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  productName: string;
  productImg:string ='assets/img/';
  productTemp:Product;

  constructor(private productService: ProductsService, private route: ActivatedRoute) { }


  ngOnInit(): void {

    this.route.paramMap.pipe(switchMap(paramMap => {
      if (paramMap.has('id')) {
      
          return this.productService.getProduct(+paramMap.get('id'));
      } else {
       
          return of(new Product());
      }
  }))
      .subscribe(product => {
          this.product = product;
          console.log(product);
          this.productName = product.name;
          console.log(product.id);


      });

     




}


}
