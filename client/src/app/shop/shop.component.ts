import { Component, OnInit } from '@angular/core';
import { IBrand } from '../shared/models/brand';
import { IProduct } from '../shared/models/product';
import { IType } from '../shared/models/productType';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styles: [
  ]
})
export class ShopComponent implements OnInit {
  products: IProduct[];
  brands: IBrand[];
  types: IType[];
  brandIdSelected: number;
  typeIdSelected: number;

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }

  getProducts() {
    this.shopService.getProducts(this.brandIdSelected, this.typeIdSelected).subscribe(res => {
      this.products = res.data;
    }, error => {
      console.log(error);
    });
  }

  getBrands() {
    this.shopService.getBrands().subscribe(res => {
      this.brands = [{id: 0, name: 'All'}, ...res];
    }, error =>{
      console.log(error);
    });
  }

  getTypes() {
    this.shopService.getTypes().subscribe(res => {
      this.types = [{id: 0, name: 'All'}, ...res];
    }, error => {
      console.log(error);
    });
  }

  onBrandSelected(brandId: number) {
    this.brandIdSelected = brandId;
    this.getProducts();
  }

  onTypeSelected(typeId: number) {
    this.typeIdSelected = typeId;
    this.getProducts();
  }

}
