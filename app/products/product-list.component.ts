import { Component,  OnInit } from 'angular2/core';
import { IProduct } from './product.ts';
import {ProductFilterPipe} from './product-filter.pipe';
import {StarComponent} from '../shared/star.component'
import { HTTP_PROVIDERS } from 'angular2/http';
import { RouteParams,ROUTER_DIRECTIVES } from 'angular2/router';
import { ProductService } from './product.service';
@Component({
    //selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html',
    styleUrls:['app/products/product-list.component.css'],
    pipes:[ProductFilterPipe],
    directives:[StarComponent,ROUTER_DIRECTIVES],
    providers:[
        HTTP_PROVIDERS,
        ProductService
    ]

})
export class ProductListComponent implements OnInit{

    errorMessage:string;
    pageTitle: string = 'Product List!';
    imageWith:number = 50;
    imageMargin:number = 2;
    showImage : boolean = false;
    listFilter:string= '';
    products: IProduct[] ;
    /* private _productService;
     constructor(productService:ProductService){
     _productService = productService;
     }*/
    constructor(private _productService:ProductService){

    }
    onRationgClicked(message:string):void{
        this.pageTitle ="Product List"+message;
    }
    toggleImage() :void{
        this.showImage=!this.showImage;
        console.log(this.showImage);
    }
    ngOnInit(): void {
        this._productService.getProducts()
            .subscribe(
            products => this.products = products,
            error =>  this.errorMessage = <any>error);
    }
}