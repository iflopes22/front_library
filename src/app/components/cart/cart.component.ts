import { Component, OnInit } from '@angular/core';
import { Cart } from './cart.model';
import { CartService } from './cart.service';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  carts: Cart[]
  displayedColumns= ['id', 'name', 'price']
  priceTotal: ''

  totalCart() {
    this.carts.forEach(x => {
      let priceTotal = this.carts.reduce((total, cart) => total + cart.price, 0);
    })
  }

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    /*const id = +this.route.snapshot.paramMap.get("id");
    this.cartService.read().subscribe((response) => {
      this.carts = response;
    });
    }*/
    
    this.cartService.read().subscribe(carts => {
      this.carts = carts;
    })
}