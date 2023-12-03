import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Cart } from '../cart/cart.model';
import { CartService } from '../cart/cart.service';
import { Product } from '../product/product.model';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-product-store',
  templateUrl: './product-store.component.html',
  styleUrls: ['./product-store.component.css']
})
export class ProductStoreComponent implements OnInit {
  product: Product;
  cartItem: Cart;

  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.productService.readById(id).subscribe((product) => {
      this.product = product;
      console.log(this.product)
      this.productService.showMessage("Produto excluido com sucesso!");
      this.router.navigate(["/products"]);
    });


    /*const id = +this.route.snapshot.paramMap.get("id");
    this.productService.readById(this.product.id).subscribe((response) => {
      this.product = response;
      this.productService.showMessage('Produto criado!')
      this.router.navigate(['/products'])
    });
    }*/
  }

  addCart(product: Product) {
    this.cartItem.nome = product.name;
    this.cartItem.price = product.price;
    this.cartItem.qtde = 1;

    this.cartService.create(this.cartItem).subscribe(() => {
      this.cartService.showMessage('Produto adicionado ao Carrinho!')
    })

    /*this.cartService.create(this.cartItem).subscribe((response) => {
      this.cartItem = response;
      this.cartService.showMessage('Adicionado ao Carrinho!')
    });
    }*/
  }


  buyProduct(product: Product) {
    this.cartItem.nome = product.name;
    this.cartItem.price = product.price;
    this.cartItem.qtde = 1;

    this.cartService.create(this.cartItem).subscribe(() => {
    this.cartService.showMessage('Produto adicionado ao Carrinho!')
    this.router.navigate(['/cart'])

    /*this.cartService.create(this.cartItem).subscribe((response) => {
      this.cartItem = response;
      this.cartService.showMessage('Encaminhando para o Carrinho!')
      this.router.navigate(['/cart'])
    });
    }*/

    })
  }

  cancel(): void {
      this.router.navigate(["/store"]);
    }
}