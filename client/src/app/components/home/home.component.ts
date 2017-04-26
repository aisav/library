import { Component, OnInit } from '@angular/core';

import { BookComponent } from '../book/book.component';
import { AuthorComponent } from '../author/author.component';
import { BookService } from '../../services/book/book.service';
import { AuthorService } from '../../services/author/author.service';
import { Book } from '../../models/book';
import { Author } from '../../models/author';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public bookService: BookService,
    public authorService: AuthorService
  ) { }

  ngOnInit() {
    this.getBooks();
  }
  books: Book;
  author: Author;
  getBooks(){
    this.bookService.getBooks()
    .subscribe(books=>{
      this.books=books;
    });
  }
}
