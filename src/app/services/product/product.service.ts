import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Product } from '../../model/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    {
      uid: '1',
      name: 'Hair Straightener',
      price: 2598,
      description: 'This is a description for Hair Straightener',
    },
    {
      uid: '2',
      name: 'Hair Dryer',
      price: 889,
      description: 'This is a description for Hair Dryer',
    },
    {
      uid: '3',
      name: 'Curling Iron',
      price: 938,
      description: 'This is a description for Curling Iron',
    },
    {
      uid: '4',
      name: 'Hair Brush',
      price: 1399,
      description: 'This is a description for Hair Brush',
    },
    {
      uid: '5',
      name: 'Hair Straightener PRO',
      price: 1599,
      description: 'This is a description for Hair Straightener PRO',
    },
  ];

  filteredItems = [...this.products];

  applyFilters(searchTerm: string, sortOption: string): Product[] {
    let tempItems = [...this.products];

    if (searchTerm) {
      tempItems = tempItems.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    tempItems.sort((a, b) =>
      sortOption === 'price'
        ? a.price - b.price
        : a.name.localeCompare(b.name)
    );

    this.filteredItems = tempItems;
    return this.filteredItems;
  }
}
