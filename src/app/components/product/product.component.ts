import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { ProductService } from 'app/shared/services/product.service';
import { convertStringToSlug } from 'app/shared/helpers/string';
import { environment } from 'environments/environment';

import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from '@angular/common/http';

import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {
  //Public variables
  public progress: number;
  public message: string;
  public newProductImages: NewProductImage[] = [];
  public primaryImage:string;
  public baseUrl= environment.wwwRootUrl;
  //Output
  @Output() public onUploadFinished = new EventEmitter();


  //Input 
  @Input() productId: string;
  @Input() inputProduct: string;

 
  constructor(private cRef: ChangeDetectorRef, private http: HttpClient, public productService: ProductService) { }

  //Change detector
  imageArrayChanged(items) : void{
    this.newProductImages = [...items];
    this.cRef.detectChanges();
  }

  editorStyleShort = {
    height: '200px'
  };

  editorStyleLong ={
    height: '600px'
  }

  ngOnInit(): void {
  }

  setSlug($event){
    let productName = $event.target.value;
    this.productService.newProduct.controls["Slug"].setValue(convertStringToSlug(productName));
  }

  setComparePrice($event){
    let convertedDiscount = Number($event.target.value);
    let price = this.productService.newProduct.controls["Price"].value;
    let reducedPrice = price - (price * (convertedDiscount/100));

    if(price != null && price != 0)
      this.productService.newProduct.controls["CompareAtPrice"].setValue(reducedPrice);
  }

  sizeName:string ='';
  onSizeChange(value){
    this.sizeName = value;
  }


  logForm(){
    console.log('ASD');
    console.log(this.productService.newProduct);
  }



  onSubmit(){
    console.log('asd');
    console.log('OOOK');
  }

  //#region ImageUpload
  public uploadFile = (files) => {
    this.progress = 1;
    this.message = "Hiba !";
    if (files.length === 0) {
      return;
    }
 
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
 
    this.http.post(environment.apiURL + '/Image', formData, {reportProgress: true, observe: 'events'})
      .subscribe(event => {
            if(event.type === HttpEventType.Sent){
              this.message = "Feltöltés folyamatban";
            }
            else if (event.type === HttpEventType.UploadProgress){
              this.progress = Math.round(100 * event.loaded / event.total);
            }
            else if (event.type === HttpEventType.Response) 
            {
              console.log("!!!!");
              console.log(event);
              this.message = 'Feltöltés kész!';
              this.onUploadFinished.emit(event);
    
              let newImage = new NewProductImage();
                  newImage.ImageUrl = event.body["serverPath"];
                  newImage.Primary = false;
                  newImage.SelfId = this.newProductImages.length + 1;
              
              this.newProductImages.push(newImage);

              let imageArray = [...this.newProductImages];
              this.imageArrayChanged(imageArray);
            }
            //this.toastr.success(this.toasterMessages.UploadSuccess);
      });
  }

  public setToPrimaryImage(imageId: number){
    this.newProductImages.map(i => {
      if(i.SelfId !== imageId)
        i.Primary = false;
      else
        i.Primary = true;
    });
    let imageArray = [...this.newProductImages];
    this.imageArrayChanged(imageArray);
    //this.toastr.success(this.toasterMessages.MakePrimarySuccess);
    console.log(JSON.stringify(this.newProductImages));
  }

  public deleteImage(imageId: number){
    let index = this.newProductImages.findIndex(i => i.SelfId === imageId);
    this.newProductImages.splice(index,1);
    //this.toastr.success(this.toasterMessages.DeleteSuccess);
  }
  //#endregion

}

class NewProductImage {
  SelfId:number;
  ImageUrl:string;
  Primary:boolean;
}

class Color{
  Hex: string;
  Name: string;
  Selected: boolean;
}
