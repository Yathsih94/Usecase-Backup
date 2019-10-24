import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { User } from './register/user';

@Injectable({
  providedIn: 'root'
})

/**
 * dataservice class to communicate with the API
 *  @author: yatheesh
 */
export class DataService {

  constructor(private _http: HttpClient) { }

  /**
   * creating login status variable and assigning initial value as true
   * @param : loginStatus
   */
  loginStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  /**
   * updating the login status
   */
  updateLoginStatus = (status: boolean) => {

    this.loginStatus.next(status)
  }

  /**
   *postRegister method to save user data to backend
   */
  postRegister = (user: User) => {
    return this._http.post("http://10.117.189.162:9090/book-lending-system/users/", user);
  }

  /**
   * getting all the users from the database
   */
  getLoginUser = (email: string, password: string) => {
    let userObj = {
      "email": email,
      "password": password
    }
    return this._http.post("http://10.117.189.162:9090/book-lending-system/login", userObj)
  }

  /**
   * adding book to the backend table
   */
  postBookToApi = (bookName: string, authorName: string, userId: number) => {
    let book = {
      "bookName": bookName,
      "authorName": authorName,
      "userId": userId
    }
    return this._http.post("http://10.117.189.162:9090/book-lending-system/books/", book)
  }

  /**
   * Get All the books
   * @param: pageNo
   */
  getAllBooks = (pageNo: number) => {
    return this._http.get<Array<object>>("http://10.117.189.162:9090/book-lending-system/books/?pageNumber=" + pageNo);
  }

  /**
   * Get the Search Result for search crite
   * @param :title,author,pageNo
   * @returns :Array
   */
  getSearchResult = (title: string, author: string, pageNo: number) => {
    if (author != undefined && title != undefined) {
      return this._http.get("http://10.117.189.162:9090/book-lending-system/books/?authorName=" + author + "&bookName=" + title + "&pageNumber=" + pageNo);
    }
    else if (author != undefined) {
      return this._http.get("http://10.117.189.162:9090/book-lending-system/books/?authorName=" + author + "&pageNumber=" + pageNo);
    }
    else {
      return this._http.get("http://10.117.189.162:9090/book-lending-system/books/?bookName=" + title + "&pageNumber=" + pageNo);
    }
  }

  /**
   * sending bookid and userid to borrow the book
   * @param :bookid,userid
   * @returns :observable
   */
  borrowBookFromApi = (bookId: number, userId: number) => {
    let obj = {
      "userId": userId
    }
    return this._http.post("http://10.117.189.162:9090/book-lending-system/books/" + bookId + "/borrow", obj)

  }

  /**
   * sending bookid,userid to request for the book
   * @param :bookId,userId
   * @returns :observable
   */
  requestBookFromApi = (bookId: number, userId: number) => {
    let obj = {
      "userId": userId
    }
    return this._http.post("http://10.117.189.162:9090/book-lending-system/books/" + bookId + "/request", obj)
  }


}
