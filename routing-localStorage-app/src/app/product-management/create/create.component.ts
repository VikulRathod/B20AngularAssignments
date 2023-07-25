import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorage } from 'src/app/helpers/local-storage';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  product: Product; 
  storage: LocalStorage; 
  constructor(private router: Router) { 
    this.storage = new LocalStorage(); 
    this.product = new Product(); 
  } 
  
  ngOnInit(): void { } 
  
  SaveData() {
    if (localStorage.getItem('products') != null) {
      let data = localStorage.getItem('products'); 
      if (data != null) {
        const products = JSON.parse(data); 
        products.push(this.product);
        this.storage.Set("products", products);
      }
    } else { 
      const products = []; 
      products.push(this.product); 
      this.storage.Set("products", products); 
    } 
    this.router.navigate(['/']);
  }
} 
