import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './page-product.component.html',
  styleUrls: ['./page-product.component.css']
})
export class PageProductComponent implements OnInit {
  links: {label: string; url: string}[] = [
    {label: 'Új termék', url: './ujtermek'},
    {label: 'Összes termék', url:'./termekek'},
    {label: 'Raktár készlet', url:'./raktar'},
    {label: 'Kategóriák', url:'./kategoriak'},
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
