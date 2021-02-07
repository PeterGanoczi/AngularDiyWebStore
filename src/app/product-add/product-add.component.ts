import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Product } from 'src/entities/product';
import { ProductsService } from 'src/services/products.service';
import { SnackbarService } from 'src/services/snackbar.service';
import { TokenStorageService } from 'src/services/token-storage.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  product: Product;
  user = this.tokenStorageService.getUser();

  selectedFile: File=null;

  constructor(private productService: ProductsService, 
              private route: ActivatedRoute, 
              private router: Router, 
              private tokenStorageService: TokenStorageService, 
              private httpClient: HttpClient,
              private snackBar: SnackbarService) { }
  

  ngOnInit(): void {


  }

  onSubmit(): void {
 
    this.productService.createProduct(this.user.id,this.form).subscribe(data => {
      console.log(JSON.stringify(data));
      
      this.router.navigateByUrl("/userproducts");
      this.snackBar.successMessage(data.success);
    },
      err=> {
      
        this.snackBar.errorMessage(this.errorMessage);
      }
    );
    

  }

  /* functions to upload image- not successful yet
  onFileSelected(event){
    this.selectedFile=<File>event.target.files[0];
  }

  onUpload(){
    const fd= new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.httpClient.post('/assets/img/'+this.selectedFile.name, fd)
    .subscribe( res=> {
      console.log(res);
    })

  }
*/

}
