import { Component, OnInit } from "@angular/core";
import { ProductService } from "./../product/product.service";
import { Product } from "./../product/product.model";
import { Cart } from "../cart/cart.model";
import { CartService } from "../cart/cart.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-store",
  templateUrl: "./store.component.html",
  styleUrls: ["./store.component.css"],
})
export class StoreComponent implements OnInit {
  products: Product[];
  displayedColumns = ["id", "name", "description", "price", "action"];
  pd: Product;
  cartItem: Cart = {
    name: "",
    qtde: null,
    price: null,
  };

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productService.read().subscribe((products) => {
      this.products = products;
    });

    /*
    this.productService.read().subscribe((response) => {
      this.products = response;
    });
    }*/
  }
  async buy(prd) {
    this.pd = prd;
    this.cartItem.name = prd.name;
    this.cartItem.price = prd.price;
    this.cartItem.qtde = 1;

    this.cartService.create(this.cartItem).subscribe(() => {
      this.cartService.showMessage("Produto adicionado ao Carrinho!");
      this.router.navigate(["/cart"]);
    });
  }
}
