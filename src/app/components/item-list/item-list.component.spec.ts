import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemListComponent } from './item-list.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';

describe('ItemListComponent', () => {
  let component: ItemListComponent;
  let fixture: ComponentFixture<ItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, ItemListComponent, FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should display all items initially', () => {
    expect(component.filteredItems.length).toBe(5);
  });

  it('should filter items based on search input', () => {
    component.searchTerm = 'Hair Dryer';
    component.applyFilters();
    fixture.detectChanges();

    expect(component.filteredItems.length).toBe(1);
    expect(component.filteredItems[0].name).toBe('Hair Dryer');
  });

  it('should return all items when search is cleared', () => {
    component.searchTerm = '';
    component.applyFilters();
    fixture.detectChanges();

    expect(component.filteredItems.length).toBe(5);
  });

  it('should sort items by name', () => {
    component.sortOption = 'name';
    component.applyFilters();
    fixture.detectChanges();

    expect(component.filteredItems[0].name).toBe('Curling Iron');
  });

  it('should sort items by price', () => {
    component.sortOption = 'price';
    component.applyFilters();
    fixture.detectChanges();

    expect(component.filteredItems[0].name).toBe('Hair Dryer'); 
  });

  it('should update filter when user types in search box', () => {
    const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    inputElement.value = 'Hair Brush';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.filteredItems.length).toBe(1);
    expect(component.filteredItems[0].name).toBe('Hair Brush');
  });

  it('should update sorting when user selects an option', () => {
    const selectElement = fixture.debugElement.query(By.css('select')).nativeElement;
    selectElement.value = selectElement.options[1].value;
    selectElement.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    expect(component.filteredItems[0].name).toBe('Hair Dryer');
  });
});
