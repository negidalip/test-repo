import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  getAuthors(){
    let temp= ["Dalip Kumar","Raj Sharma","Munish Gautam"];
    return temp;
}
}
