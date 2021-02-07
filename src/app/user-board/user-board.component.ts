import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/entities/product';
import { ProductsService } from 'src/services/products.service';
import { TokenStorageService } from 'src/services/token-storage.service';
import { UserService } from 'src/services/user.service';
import { ConfirmDialogComponent, ConfirmDialogData } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-user-board',
  templateUrl: './user-board.component.html',
  styleUrls: ['./user-board.component.css']
})
export class UserBoardComponent implements OnInit {

  content: string;

  products: Product[];
  product: Product;
  
  constructor(private userService: UserService,
               private productService: ProductsService,
                private tokenStorageService: TokenStorageService,
                private dialog: MatDialog) { }

  ngOnInit(): void {
  

    this.productService.getProductsByLoggedUser(this.tokenStorageService.getUser().id).subscribe(
      data=>{
        this.products=data;
      },
      err => {
        this.products=JSON.parse(err.error).message;
        
      }
    );
  }

  deleteProduct(product: Product) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: new ConfirmDialogData("Deleting product", "Do you really want to delete product " + product.name + "?")
    });
    
    dialogRef.afterClosed().subscribe(result=> {
      if(result) {
         this.productService.deleteProduct(product).subscribe(ok=> {

      if(ok){
        this.products=this.products.filter(p => p.id != product.id);
      }
     })
    }
  });    
  }

  // deleteProduct(product: Product) {

  //   this.productService.deleteProduct(product).subscribe(
  //       this.products=this.products.filter(p => p.id !=product.id)
  //     )
  // }
}
