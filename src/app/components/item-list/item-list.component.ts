import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class ItemListComponent {

  private products: Product[] = [
    {
      uid: '1',
      name: 'Hair Straightener',
      price: 2598,
      description: 'This is a description for Hair Straightener'
    },
    {
      uid: '2',
      name: 'Hair Dryer',
      price: 889,
      description: 'This is a description for Hair Dryer'
    },
    {
      uid: '3',
      name: 'Curling Iron',
      price: 938,
      description: 'This is a description for Curling Iron'
    },
    {
      uid: '4',
      name: 'Hair Brush',
      price: 1399,
      description: 'This is a description for Hair Brush'
    },
    {
      uid: '5',
      name: 'Hair Straightener PRO',
      price: 1599,
      description: 'This is a description for Hair Straightener PRO'
    }
  ]

  filteredItems = [...this.products];
  searchTerm = '';
  sortOption = 'name';


  constructor() {
    this.applyFilters();
   }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  applyFilters() {
    let tempItems = [...this.products];

    if (this.searchTerm) {
      tempItems = tempItems.filter(item =>
        item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    tempItems.sort((a, b) =>
      this.sortOption === 'price'
        ? a.price - b.price
        : a.name.localeCompare(b.name)
    );

    this.filteredItems = tempItems;
  }
}
