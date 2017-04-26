import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class BookService {
    constructor(private http: http) {
        console.log("================   BookServise =============")
     }

     getBooks(){
         return this.http.get('http://localhost:3000/api/books')
                        .map(res => res.json());
     }
}