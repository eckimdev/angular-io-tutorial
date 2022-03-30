import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  //! That's the non-null assertion operator. It is a way to tell the compiler
  //"this expression cannot be null or undefined here,
  // so don't complain about the possibility of it being null or undefined
  @Input() product!: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
