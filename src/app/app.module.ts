import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/modules/material.module';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './products/products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { UserBoardComponent } from './user-board/user-board.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    RegisterComponent,
    LoginComponent,
    ProductComponent,
    ProductDetailComponent,
    ProfileComponent,
    UserBoardComponent,
    ProductEditComponent,
    ProductAddComponent,
    ConfirmDialogComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
