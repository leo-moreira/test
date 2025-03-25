import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Product } from '../../model/product.model';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class ItemListComponent implements OnInit{
  filteredItems: Product[] = [];
  sortOption = 'name';
  searchTerm = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredItems = this.productService?.applyFilters(this.searchTerm, this.sortOption);
  }
}
