import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import 'rxjs/Rx';
import { ProductListComponent } from './products/product-list.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { ProductService } from './products/product.service';
import { WelcomeComponent } from './home/welcome.component';

@Component({
    selector: 'pm-app',
    template:`
                <div>
                <nav class='navbar navbar-default'>
                    <div class='container-fluid'>
                        <a class='navbar-brand'>{{pageTitle}}</a>
                        <ul class='nav navbar-nav'>
                            <li><a [routerLink]="['Welcome']">Home</a></li>
                            <li><a [routerLink]="['Products']">Product List</a></li>
                         </ul>
                      </div>
                </nav>
                <router-outlet></router-outlet>
             </div>`,
    directives:[ROUTER_DIRECTIVES],
        providers:[
    HTTP_PROVIDERS,
    ProductService
]
})
@RouteConfig([
    {path: '/products', name:"Products", component: ProductListComponent},
    {path: '/product/:id', name:"ProductDetail", component: ProductDetailComponent},
    {path: '/welcome',name:"Welcome", component: WelcomeComponent, useAsDefault:true }
])
export class AppComponent {
    pageTitle:string = "Acme product Management"
}