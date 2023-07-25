import { Component } from '@angular/core';
import { Post } from './models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post: Post; 
  
  constructor() { 
    this.post = new Post(1, 'Trip', 
    'Vishal Pawar', '7 Days GOA Trip'); }
}
