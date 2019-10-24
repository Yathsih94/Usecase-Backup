import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ConfirmationService]
})

/**
 * Creating class for Home Dashboard
 */
export class HomeComponent implements OnInit {
  display: boolean = false;
  userId;
  bookName: string;
  authorName: string;
  cols = [];
  books = [];
  pageNo = 0;
  msgs = []
  searchByName: string;
  searchByAuthor: string;
  show: boolean = false;

  constructor(private messageService: MessageService, private _service: DataService, private confirmationService: ConfirmationService, private _router: Router) {
    /**
     * Assiagning the fields and headers array to cols array
     */
    this.cols = [
      { field: 'bookName', header: 'Book Name' },
      { field: 'authorName', header: 'Author Name' },
      { field: 'bookStatus', header: 'Book Status' },

    ];
  }

  /**
   * 
  show the popup  
  */
  showPopUp = () => {
    this.display = true;
  }

  /**
   * Search book by its author name or book title
   * @param :searchByName,searchByAuthor and pageNo
   */
  searchBook = () => {
    this._service.getSearchResult(this.searchByName, this.searchByAuthor, this.pageNo).subscribe((data) => {
      console.log("search result", data);
      this.books = data['bookList'];
    })

  }

  /**
   * Add Book method to send book data to service
   * @param : Book Name,Author Name and User Id
   */
  addBook = () => {
    this._service.postBookToApi(this.bookName, this.authorName, this.userId).subscribe((data) => {
      console.log(data);
      this.display = false;
      this.messageService.add({ severity: 'success', summary: 'Success', detail: data['message'] });
      this.getBooks();
      this.bookName = "";
      this.authorName = "";

    })

  }

  /**
   * Cancel method to hide the popup and clearing the fields
   * @var :display,bookname and authorname
   */
  cancelAdd = () => {
    this.display = false;
    this.bookName = "";
    this.authorName = "";

  }

  /**
   * Borrow book method to send the book data and user id to service
   * @param:bookid,userid
   */
  borrowBook = (bookId) => {
    console.log("bookdid", bookId)
    this._service.borrowBookFromApi(bookId, this.userId).subscribe((data) => {
      console.log("bookssssssss", data['message']);
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Book Borrowed Successfully' });
    })
    setTimeout(() => {
      this.getBooks();
    }, 500);

  }

  /**
   * Borrow book method to send the book data and user id to service
   * @param:bookid,userid
   */
  requestBook = (bookId) => {

    this._service.requestBookFromApi(bookId, this.userId).subscribe((data) => {
      console.log("requesttttt", data['message'])
      this.messageService.add({ severity: 'success', summary: 'Success', detail: data['message'] });
    })
    setTimeout(() => {
      this.show = true;
      this.getBooks();
    }, 500);

  }

  /**
   * Logout method to popup confirmation message 
   */
  logout = () => {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to Log-out?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        sessionStorage.removeItem('key');
        this._service.updateLoginStatus(true);
        this._router.navigate(['login']);
      }
    });
  }

  /**
     * Get Book method to get the list of books and assigning to books array
     */
  getBooks = () => {
    this._service.getAllBooks(this.pageNo).subscribe((data) => {
      console.log(data)
      if (data['statusCode'] == 200) {
        this.books = data['bookList'];
      }

    })
  }

  /**
   * Getting userid form session storage and calling getbooks method
   */
  ngOnInit() {
    this.userId = sessionStorage.getItem("key");
    console.log("userid", this.userId)
    this.getBooks();
  }

}
