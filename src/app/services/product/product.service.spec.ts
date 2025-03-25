import { TestBed } from '@angular/core/testing';
import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductService]
    });

    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all products by default', () => {
    expect(service.filteredItems.length).toBe(5);
  });

  it('should filter products by search term', () => {
    service.applyFilters('Hair Dryer', '');
    expect(service.filteredItems.length).toBe(1);
    expect(service.filteredItems[0].name).toBe('Hair Dryer');
  });

  it('should return all products when search is cleared', () => {
    service.applyFilters('', '');
    expect(service.filteredItems.length).toBe(5);
  });

  it('should sort products by name', () => {
    service.applyFilters('', 'name');
    expect(service.filteredItems[0].name).toBe('Curling Iron');
  });

  it('should sort products by price (ascending)', () => {
    service.applyFilters('', 'price');
    expect(service.filteredItems[0].name).toBe('Hair Dryer');
  });

  it('should filter and then sort correctly', () => {
    service.applyFilters('Hair Straightener', 'price');
    expect(service.filteredItems.length).toBe(2);
    expect(service.filteredItems[0].name).toBe('Hair Straightener PRO');
  });
});