import { Component } from '@angular/core';
import { BookService } from './book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BookService]
})
export class AppComponent {
  constructor(private bookService:BookService){
    
  }

  title1 = 'Books List';
  title2 = 'Favorite Books';

  
}
