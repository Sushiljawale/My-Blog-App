import { Component } from '@angular/core';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {
  blogTitle:any;
  content:any;
  name:any;
  imageURL:any;
  newPostForm:Array<any>=[];

}



