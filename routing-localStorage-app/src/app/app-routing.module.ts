import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './product-management/products/products.component';
import { CreateComponent } from './product-management/create/create.component';
import { EditComponent } from './product-management/edit/edit.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },   
  { path: 'create', component: CreateComponent },   
  { path: 'edit/:id', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
