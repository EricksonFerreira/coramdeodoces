import { Component, Input, OnInit } from '@angular/core';

interface BreadCrumbItem {
  text: string;
  link?: string;
}

@Component({
  selector: 'app-bred-crumb',
  templateUrl: './bred-crumb.component.html',
  styleUrls: ['./bred-crumb.component.css']
})
export class BredCrumbComponent {
   @Input() items: Array<BreadCrumbItem> = [];

  constructor() { }

  isTheLastItem(item: BreadCrumbItem): boolean {
    const index = this.items.indexOf(item);
    return index + 1 === this.items.length;
  }
}
