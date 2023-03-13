import { Component, OnInit, } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { Product } from '../../models/product.model';
import { DataSourceProduct } from './data-source';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {

  productDataSource = new DataSourceProduct();
  columns: string[] = ['id', 'title', 'price', 'cover', 'actions'];
  total = 0;
  input = new FormControl('',{nonNullable: true})

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
    .subscribe(data => {
      this.productDataSource.init(data);
      this.total = this.productDataSource.getTotal();
    })

    this.input.valueChanges
      .pipe(
        debounceTime(1000)
      )
      .subscribe(value => {
        this.productDataSource.find(value)
    })
  }

  update(product:Product) {
    this.productDataSource.update(product.id, { price: 20})
  }

}
