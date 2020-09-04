import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NavigationLink } from 'app/shared/interfaces/navigation-link';
import { MegamenuColumn } from 'app/shared/interfaces/megamenu-column';
import { NestedLink } from 'app/shared/interfaces/nested-link';

import { prodtypes } from 'app/shared/dummydatas/productype';
import { ProductType } from 'app/shared/interfaces/product-type';
import { Product } from 'app/shared/interfaces/product';
import { isObject } from 'util';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductCategoryService } from 'app/shared/services/productCategory.service';
import { Title } from '@angular/platform-browser';

import { convertStringToSlug } from 'app/shared/helpers/string';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @ViewChild('editModal') editModal : TemplateRef<any>; // Note: TemplateRef
  selector:Selector = new Selector();

    constructor(private modalService: NgbModal, public productCategoryService: ProductCategoryService) { 

    }

    ngOnInit(): void {
    }

  //#region Ediot
  openEditor(editorType:string){

  }

  productCategories: ProductType[] = prodtypes;
  productMainTypes: ProductType[] =[];
  productType: ProductType[] = [];
  nestedLinks: NestedLink[] = [];

  selectProductCategory($event, itemId:string){
    this.clearCategoryListsAndSelections();
    $event.target.closest("li").style.backgroundColor ="#e8a39e";
    this.selector.category = this.productCategories.find(p => p.id === itemId);
    this.productMainTypes = [...this.selector.category.child];

    if(this.selector.category.child){
      this.productMainTypes = [...this.selector.category.child];
    }
  }

  selectProductMainType($event, itemId:string){

    this.clearMainTypeListsAndSelections();
    $event.target.closest("li").style.backgroundColor ="#e8a39e";
    this.selector.mainType = this.productMainTypes.find(p => p.id === itemId);
    
    if(this.selector.mainType.child){
      this.productType = [...this.selector.mainType.child];
    }
  }

  selectProductType($event, itemId:string){
    this.clearProductTypeListAndSelections();
    $event.target.closest("li").style.backgroundColor ="#e8a39e";
    this.selector.type = this.productType.find(p => p.id === itemId);
  }

  private clearCategoryListsAndSelections(){
    document.querySelector('.categoryContainer').querySelectorAll('li').forEach(li => li.style.backgroundColor='');
    this.productType = [];
    this.productMainTypes = [];
    
    this.selector.category = null;
    this.selector.mainType = null;
    this.selector.type = null;
  }

  private clearMainTypeListsAndSelections(){
    document.querySelector('.mainTypeContainer').querySelectorAll('li').forEach(li => li.style.backgroundColor='');
    this.productType = [];

    this.selector.mainType = null;
    this.selector.type = null;
  }

  private clearProductTypeListAndSelections(){
    document.querySelector('.typeContainer').querySelectorAll('li').forEach(li => li.style.backgroundColor='');
    this.selector.type = null;
  }

  //#endregion

  //#region Modal

  productCategoryModal = null;

  clearModal(){
    this.productCategoryService.resetPCM();
  }

  openModal(modalType:ProductCategoryModalType, productType:ProductCategoryType){
    this.modalService.open(this.editModal);
    this.productCategoryModal = new ProductCategoryModal();

    this.fillModal(modalType,productType);   
  
  }

  private fillModal(modalType:ProductCategoryModalType, productType:ProductCategoryType){
    console.log("fillcalled");
    
    let title = "Hiba";
    let editorMode = "Hiba";
    const toReplace = "$attr$"

    switch (modalType) {
      case ProductCategoryModalType.New:
        title = "Új "+toReplace+" felvétele!"; 
        break;
      case ProductCategoryModalType.Edit:
        title = toReplace+" szerkesztése!";
        break;
      default:
        title = "Hiba";   
        break;  
    }

    switch (productType) {
      case ProductCategoryType.CategoryType:
        editorMode = "Termék kategória";
        
        this.productCategoryModal.ProductCategoryType = ProductCategoryType.CategoryType;

        if(modalType == ProductCategoryModalType.Edit)
          this.mapProductTypeToModal(this.selector.category);

        break;
      case ProductCategoryType.MainType:
        editorMode = "Termék főtípus";

        this.productCategoryModal.ProductCategoryType = ProductCategoryType.MainType;

        if(modalType == ProductCategoryModalType.Edit)
          this.mapProductTypeToModal(this.selector.mainType);  

        break;
      case ProductCategoryType.Type:
        editorMode = "Termék típus";

        this.productCategoryModal.ProductCategoryType = ProductCategoryType.Type;

        if(modalType == ProductCategoryModalType.Edit)
          this.mapProductTypeToModal(this.selector.type);
               
        break;
      default:
        editorMode = "Hiba";   
        break;
    }

    title = title.replace(toReplace,editorMode);
    this.productCategoryModal.Title = title;
  }

  private mapProductTypeToModal(prodType: ProductType ){
    if(!prodType)
      return;

    console.log()

    this.productCategoryModal.Name = prodType.label; 
    this.productCategoryService.productCategoryModal.controls["Name"].setValue(prodType.label);
    this.productCategoryModal.Slug = prodType.slug;
    this.productCategoryService.productCategoryModal.controls["Slug"].setValue(prodType.slug);
    this.productCategoryModal.Id = prodType.id;
    this.productCategoryService.productCategoryModal.controls["Id"].setValue(prodType.id);
  }

  saveModal(){
    let productType = this.productCategoryModal;

    switch (productType) {
      case ProductCategoryType.CategoryType:

        break;
      case ProductCategoryType.MainType:
       
        break;
      case ProductCategoryType.Type:
              
        break;
      default:
        break;
    }
  }

  deepSearchAndPush(root:ProductType[],id:string,childToPush:ProductType){
    
  }

  setSlug($event){
    let slug = convertStringToSlug($event.target.value)
    this.productCategoryService.productCategoryModal.controls["Slug"].setValue(slug);
    this.productCategoryModal.Slug = slug;
  }

  //#endregion

}
enum ProductCategoryModalType {
  New,
  Edit,
}

enum ProductCategoryType{
  CategoryType,
  MainType,
  Type
}

class ProductCategoryModal{
  Title: string;
  EditorType: ProductCategoryModalType;
  CategoryType: ProductCategoryType;
  Name: string;
  Slug: string;
  Id: string;
}

class Selector {
  category: ProductType;
  mainType: ProductType;
  type: ProductType;
};