import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  selectedItems = [];
  cartCount: number = 0;
  cartAmount: number = 0;
  counts = new Subject();
  constructor() { }
}
