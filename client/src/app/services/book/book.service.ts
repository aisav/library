import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BookService {

  constructor(private http:Http) { }
  getBooks(){
    return this.http.get("http://localhost:3000/api/books")
    .map(res => res.json());
  }

}
