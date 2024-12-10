import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart-vacuum-cleaner',
  templateUrl: './smart-vacuum-cleaner.component.html',
  styleUrl: './smart-vacuum-cleaner.component.scss',
})
export class SmartVacuumCleanerComponent implements OnInit {
  categoryName = 'Máy hút bụi thông minh';
  totalProducts = 100;
  filterOptions = [
    { label: 'Giá giảm dần', value: 'desc' },
    { label: 'Giá tăng dần', value: 'asc' },
  ];
  selectedFilter: string = '';

  rows = 10;
  products: any[] = [];
  filteredProducts: any[] = [];
  cart: any[] = [];

  ngOnInit() {
    this.products = Array.from({ length: this.totalProducts }, (_, i) => ({
      name: `Sản phẩm ${i + 1}`,
      price: Math.floor(Math.random() * 1000000) + 100000,
      imageUrl: 'https://via.placeholder.com/150',
      rating: Math.floor(Math.random() * 5) + 1,
    }));
  
    this.filteredProducts = [...this.products];
  }
  

  onFilterChange(event: any) {
    if (this.selectedFilter === 'asc') {
      this.filteredProducts.sort((a, b) => a.price - b.price);
    } else if (this.selectedFilter === 'desc') {
      this.filteredProducts.sort((a, b) => b.price - a.price);
    }
  }

  onPageChange(event: any) {
    const start = event.first;
    const end = start + event.rows;
    this.filteredProducts = this.products.slice(start, end);
  }

  addToCart(product: any) {
    this.cart.push(product);
    console.log('Giỏ hàng hiện tại:', this.cart);
  }
}
