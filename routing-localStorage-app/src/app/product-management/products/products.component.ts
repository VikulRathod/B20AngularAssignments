import { Component } from '@angular/core';
import { LocalStorage } from 'src/app/helpers/local-storage';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] | undefined;
  storage: LocalStorage;
  constructor() {
    this.storage = new LocalStorage();
    this.products = this.storage.Get('products');
  }
  DeleteProduct(id: number, name: string) {
    if (confirm(`Do you want to delete product "${name}"?`) && this.products) {
      let index = this.products.findIndex(x => x.id == id);
      if (index > -1) {
        this.products.splice(index, 1); this.storage.Set("products", this.products);
        alert(`The product "${name}" has been deleted successfully.`);
      }
    }
  } ngOnInit(): void { }
} 
