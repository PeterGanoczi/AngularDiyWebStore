import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { UserBoardComponent } from './user-board/user-board.component';

const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'product/:id', component:ProductDetailComponent},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'userproducts', component: UserBoardComponent, canActivate: [AuthGuard]},
  { path: 'userproducts/edit/:id', component: ProductEditComponent, canActivate: [AuthGuard] },
  { path: 'userproducts/add', component: ProductAddComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
