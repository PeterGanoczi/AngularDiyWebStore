import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ProductEditComponent } from 'src/app/product-edit/product-edit.component';
import { Product } from 'src/entities/product';

const API_URL='http://localhost:8080/products/';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(API_URL+'list', {responseType: 'json'});
  }

  getProduct(id: number):Observable<Product> {
    return this.http.get<Product>(API_URL+id,{responseType: 'json'});
  }

  getProductsByLoggedUser(id: number): Observable<any> {
    return this.http.get(API_URL+ 'list/'+id, {responseType: 'json'});
  }

  createProduct(id: number, product: Product): Observable<any>{
    // return this.http.post<Product>(API_URL+'create', product);
    const body = JSON.stringify({
      userId: id,
      name: product.name,
      description: product.description,
      price: product.price,
      imgUrl: product.imgUrl
  
  });
    return this.http.post<Array<any>>(API_URL + 'create', body).pipe(
      map(messages => {
          console.log("Succes message: "+JSON.stringify(messages));
          return messages;
      }),
      catchError(error => {
          console.log(' error create product' + JSON.stringify(error));
          return this.processHttpError(error);
      })
  );
  }

  updateProduct(productId: number, product: Product): Observable<Product> {
    return this.http.post<Product>(API_URL+'update/'+productId, product);
  }

  deleteProduct(product: Product): any {
    return this.http.delete(API_URL+'delete/'+product.id);
  }


  processHttpError(error): Observable<never> {
    console.log(error);

    if (error instanceof HttpErrorResponse) {
        if (error.status === 0) {
            // this.messageService.sendMessage('Server unavailable');
            console.log("Server unavailable")
        } else {
            if (error.status >= 400 && error.status < 500) {
                const message = error.error.error
                    ? error.error.error
                    : JSON.parse(error.error).error;
                //   const message = error.error.error ?? JSON.parse(error.error).error;
                console.log(message);

                // this.messageService.sendMessage(message);
            } else {
                // this.messageService.sendMessage('Server error: ' + error.message);
                console.log("Server error:"+error.message);
            }
        }
    } else {
        console.log('Server error ' + error);
        console.log(error);

        // this.messageService.sendMessage('Client error : ' + JSON.stringify(error));
        
    }
    console.error('Server error: ', error);
    return EMPTY;
}

}
