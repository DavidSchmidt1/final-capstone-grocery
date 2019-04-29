import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutComponent } from './about/about.component';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ShopProductComponent } from './shop-product/shop-product.component';

const routes: Routes = [

  { path: '#', component: HomeComponent },   /* rubric13 */
  { path: '#/cart', component: CartComponent }, /* rubric56 */
  { path: '#/shopping', component: ShopComponent }, /* rubric34 */
  { path: '#/contact', component: ContactComponent }, /*rubric62*/
  { path: '#/about', component: AboutComponent }, /*rubric64 */
  { path: '#/shopping/product/:name', component: ShopProductComponent }  /*rubric46*/
  //{ path: 'map', component: MapComponent },
  //{ path: '', component: OrderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
