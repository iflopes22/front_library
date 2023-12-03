import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product.model';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products: Product[]
  displayedColumns = ['id', 'name', 'description', 'price', 'action']
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
    })

    /*
    this.productService.read().subscribe((response) => {
      this.products = response;
    });
    }*/
  }

}
