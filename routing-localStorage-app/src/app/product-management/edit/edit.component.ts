import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorage } from 'src/app/helpers/local-storage';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  product: Product | any;
  storage: LocalStorage;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.storage = new LocalStorage();
    this.route.params.subscribe(param => {
      let id = param['id'];
      const products: Product[] = this.storage.Get("products");
      const existingProduct = products.find(u => u.id == id);
      if (existingProduct != undefined) {
        this.product = Object.create(existingProduct);
      }
    });
  }

  ngOnInit(): void { }

  SaveData() { 
    let products: Product[] = this.storage.Get('products'); 
    if (products != null) { 
      for (let i = 0; i < products.length; i++) { 
        const element = products[i]; 
        if (element.id == this.product.id) { 
          products[i].name = this.product.name; 
          products[i].price = this.product.price; break; 
        } 
      } 
      this.storage.Set("products", products); 
    } 
    this.router.navigate(['/']); }
}
