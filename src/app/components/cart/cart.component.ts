import { ActivatedRoute, Router } from "@angular/router";
import { Cart } from "./cart.model";
import { CartService } from "./cart.service";
import { Component, OnInit } from "@angular/core";
import { async } from "rxjs/internal/scheduler/async";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
  template: '<a href="#" (click)="deleteCart(id)">Deletar</a>',
})
export class CartComponent implements OnInit {
  carts: Cart[];
  displayedColumns = ["id", "name", "price", "qtde", "action"];
  total: number;
  subTotal: null;

  constructor(
    private cartService: CartService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.create();
  }

  /*
    this.productService.read().subscribe((response) => {
      this.products = response;
    });
    }*/
  async create() {
    this.cartService.read().subscribe((carts) => {
      this.carts = carts;
      this.soma();
    });
  }

  soma() {
    console.log("oi");
    console.log(this.carts);
    this.total = 0;
    let totalPrice = 0;
    console.log(typeof(totalPrice))
    console.log(typeof(this.total))
    this.carts.forEach(function (cart) {
      totalPrice += Number(cart.price);
    });
    this.total = totalPrice;
  }

  deleteCart(id): void {
    this.cartService.delete(id).subscribe(() => {
      this.cartService.showMessage("Item removido");
    });
    this.cartService.read().subscribe((carts) => {
      this.carts = carts;
      this.soma();
    });
  }
}
