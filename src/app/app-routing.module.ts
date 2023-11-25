import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductStoreComponent } from './components/product-store/product-store.component';
import { HomeComponent } from "./views/home/home.component";
import { ProductCrudComponent } from "./views/product-crud/product-crud.component";
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { StoreComponent } from './components/store/store.component';
import { ShopComponent } from './components/shop/shop.component';
import { RegisterComponent } from './components/register/register.component';
import { CartComponent } from './components/cart/cart.component';
import { UserComponent } from './components/user/user.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductCrudComponent
  },
  {
    path: "products/create",
    component: ProductCreateComponent
  },
  {
    path: "products/update/:id",
    component: ProductUpdateComponent
  },
  {
    path: "products/delete/:id",
    component: ProductDeleteComponent
  },
  {
    path: "products/store",
    component: StoreComponent
  },
  {
    path: "shop/close/:id",
  component: ShopComponent
}, 
  {
    path: "register",
  component: RegisterComponent
},
  {
    path: "cart",
  component: CartComponent
},
  {
    path: "user",
  component: UserComponent
  },
  {
    path: "store/product/:id",
    component: ProductStoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
