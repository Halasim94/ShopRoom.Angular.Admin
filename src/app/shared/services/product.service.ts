import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  newProduct = this.fb.group({
    Id: ['',Validators.required],
    InnerId: [''],
    ConstructionNumber: ['',Validators.required],
    Name: ['',Validators.required],
    Slug: ['',Validators.required],
    IsAvailable:[''],
    Price: ['',Validators.required],
    ShortDescription:['',Validators.required],
    LongDescription:['',Validators.required],
    ProductInStock: [''],
    CompareAtPrice: [''],
    Image: ['',Validators.required],
    Badges: [''],
    Availability: [''],
    Brand: [''],
    Categories: [''],
    Attributes: [''],
    CustomFields: ['']
   });


  constructor(private fb: FormBuilder) { }
}


class ProductModel implements Product{
  id: number;
  innerId: string;
  constuctionNumber: string;
  slug: string;
  name: string;
  shortDescriotion: string;
  description: string;
  price: number;
  isAvailable: boolean;
  compareAtPrice: number;
  productInStock: number;
  images: string[];
  badges: string[];
  rating: number;
  reviews: number;
  availability: string;
  brand: import("../interfaces/brand").Brand;
  categories: import("../interfaces/category").Category[];
  attributes: import("../interfaces/product").ProductAttribute[];
  customFields: import("../interfaces/custom-fields").CustomFields;
}
