import { Component } from "@angular/core";
import { Product } from "./models/product";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  products: Product[];
  product: Product | any;
  isEdit: boolean;

  constructor() {
    this.products = [
      { id: 101, name: "shirt", price: 299 },
      { id: 102, name: "shoe", price: 199 },
      { id: 103, name: "sports shoe", price: 599 }];
    this.product = new Product();
    this.isEdit = false;
  }

  AddProduct() {
    // if (Object.keys(this.product).length == 0) { 
    if (this.products.length <= 0) {
      alert(`Id, Name and Price cannot be empty`);
    } else {
      this.products.push(this.product);
      alert(`${this.product.name} added successfully.`);
      this.product = new Product();
    }
  }

  UpdateProduct() {
    for (let i = 0; i < this.products.length; i++) {
      const element = this.products[i];
      if (element.id == this.product.id) {
        this.products[i].name = this.product.name;
        this.products[i].price = this.product.price;

        this.product = new Product();
        this.isEdit = false;
        break;
      }
    }
  }

  EditProduct(id: number) {
    const existingProduct = this.products.find(u => u.id == id);
    if (existingProduct != undefined) {
      // this.product = Object.create(existingProduct);
      this.product.id = existingProduct.id;
      this.product.name = existingProduct.name;
      this.product.price = existingProduct.price;
      this.isEdit = true;
    }
  }

  DeleteProduct(id: number, name: string) {
    if (confirm(`Do you want to delete product "${name}"?`)) {
      let index = this.products.findIndex(x => x.id === id);
      this.products.splice(index, 1);
      alert(`The product "${name}" has been deleted successfully.`);
    }
  }
}