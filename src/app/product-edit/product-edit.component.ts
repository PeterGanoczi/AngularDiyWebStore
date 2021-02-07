import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/entities/product';
import { ProductsService } from 'src/services/products.service';
import {switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import { SnackbarService } from 'src/services/snackbar.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  product: Product;

  constructor(private productService: ProductsService, private route: ActivatedRoute, private router: Router, private snackBar: SnackbarService) { }

  ngOnInit(): void {

    this.route.paramMap.pipe(switchMap(product=> {
      if(product.has('id')){
        return this.productService.getProduct(+product.get('id'));
      } else {
        return of(new Product());
      }
    }))
    .subscribe(product=> {
      this.product=product;
      console.log(product);
      console.log(product.name);
      

    })

  }

  onSubmit(): void {

    this.productService.updateProduct(this.product.id, this.product).subscribe(product => {
      this.product=product;
      this.router.navigateByUrl("/userproducts");
    });
      this.snackBar.successMessage("Product succesfully changed");
      
}



}
