import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { NavigationLink } from 'app/shared/interfaces/navigation-link';
import { MegamenuColumn } from 'app/shared/interfaces/megamenu-column';
import { NestedLink } from 'app/shared/interfaces/nested-link';

import { departments } from 'app/shared/dummydatas/header-departments';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit {

  items: NavigationLink[] = departments;


  constructor() { }

  ngOnInit(): void {
  }


  //#region Ediot
openEditor(editorType:string){

}

productCategories = []
megaMenuColumns: MegamenuColumn[] =[];
nestedLinks: NestedLink[] = [];

selectCategory($event, item:NavigationLink){
  this.clearMenuListsAndSelections();
  $event.target.closest("li").style.backgroundColor ="#e8a39e";
  if(item.menu && item.menu.type === 'megamenu'){
      console.log(item.menu.columns);
      this.megaMenuColumns = [...item.menu.columns]
  } else if(item.menu && item.menu.type === 'menu'){
      console.log(item.menu.items);
      this.nestedLinks = [...item.menu.items];
  } else {

  }

}


selectMegaMenu($event, item:MegamenuColumn){

}

private clearMenuListsAndSelections(){
  document.querySelector('.categoryContainer').querySelectorAll('li').forEach(li => li.style.backgroundColor='');
  this.megaMenuColumns = [];
  this.nestedLinks = [];
}

//#endregion

}
