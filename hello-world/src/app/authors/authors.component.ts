import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.less']
})
export class AuthorsComponent {
  title="List of authors";
  authors: string[];
  constructor(service: AuthorsService){
      this.authors=service.getAuthors();
  }
  getTitle(){
      return this.title;
  }

}
