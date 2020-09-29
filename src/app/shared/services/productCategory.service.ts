import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Product } from '../interfaces/product';

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'environments/environment';
import { ProductType, NewProductType, EditProductType } from '../interfaces/product-type';
import 'rxjs/add/operator/map'


@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  productCategoryModal = this.fb.group({
    Id: ['',Validators.required],
    Name: ['',Validators.required],
    Slug: ['',Validators.required]
   });

   public resetPCM(){
    this.productCategoryModal.reset();
   }

   postProductType(productType: NewProductType) : any{
    return this.http.post(environment.apiURL + '/ProductType', productType)
          .map((response:any) => <ProductType>response)
          .toPromise()
          .catch(this.handlePromiseError);
  }

  putProductType(productTypeId : string, productType : EditProductType) : any{
    return this.http.put(environment.apiURL + '/ProductType/' + productTypeId, productType)
          .map((response:any) => <ProductType>response)
          .toPromise()
          .catch(this.handlePromiseError);
  }

   handlePromiseError(error: Response){
    console.error(error);
    throw(error);
  }

}