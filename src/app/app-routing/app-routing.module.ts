import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

import { HeroesComponent } from "../heroes/heroes.component";
import { ProductListComponent } from "../product-list/product-list.component";
import { ProductDetailsComponent } from "../product-details/product-details.component";
import { CartComponent } from "../cart/cart.component";
import { ShippingComponent } from "../shipping/shipping.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { HeroDetailComponent } from "../hero-detail/hero-detail.component";

const routes: Routes = [
  { path: "heroes", component: HeroesComponent },
  { path: "store", component: ProductListComponent },
  { path: "products/:productId", component: ProductDetailsComponent },
  { path: "cart", component: CartComponent },
  { path: "shipping", component: ShippingComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "detail/:id", component: HeroDetailComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
