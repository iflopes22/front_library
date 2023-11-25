import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  carts = [
    { name: 'Produto 1', price: 50.00 },
    { name: 'Produto 2', price: 30.00 },
    { name: 'Produto 3', price: 20.00 }
  ];

  totalCart(): number {
    return this.carts.reduce((total, cart) => total + cart.price, 0);
  }
}