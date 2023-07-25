import { Component, Input } from '@angular/core';
import { Comment } from 'src/app/models/comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
  @Input() id: number | any;
  comments: Comment[];
  comment: Comment;

  constructor() {
    this.comment = new Comment();
    this.comments = [];
  }
  ngOnInit(): void { }
  SaveComment() {
    if (Object.keys(this.comment).length == 0) {
      alert(`Comment cannot be empty!`);
    } else {
      this.comment.postId = this.id;
      this.comments.push(this.comment);
      this.comment = new Comment();
    }
  }
}
