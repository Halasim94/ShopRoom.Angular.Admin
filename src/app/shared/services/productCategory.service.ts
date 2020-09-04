import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

  productCategoryModal = this.fb.group({
    Id: ['',Validators.required],
    Name: ['',Validators.required],
    Slug: ['',Validators.required],
   });

   public resetPCM(){
    this.productCategoryModal.reset();
   }

  constructor(private fb: FormBuilder) { }
}