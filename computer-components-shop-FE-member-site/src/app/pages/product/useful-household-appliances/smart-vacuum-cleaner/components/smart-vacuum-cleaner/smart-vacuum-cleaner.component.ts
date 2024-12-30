import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart-vacuum-cleaner',
  templateUrl: './smart-vacuum-cleaner.component.html',
  styleUrl: './smart-vacuum-cleaner.component.scss',
})
export class SmartVacuumCleanerComponent implements OnInit {
  categoryName = 'Máy hút bụi thông minh';
  totalProducts = 3;
  filterOptions = [
    { label: 'Giá giảm dần', value: 'desc' },
    { label: 'Giá tăng dần', value: 'asc' },
  ];
  selectedFilter: string = '';

  rows = 10;
  products: any[] = [];
  filteredProducts: any[] = [];
  cart: any[] = [];

  productDetailDialogVisible: boolean = false; // Toggle dialog visibility
  selectedProduct: any = null; // Product currently being viewed
  selectedQuantity: number = 1; // Quantity for adding to cart

  ngOnInit() {
    this.products = [
      {
        id: 1,
        name: 'Máy robot hút bụi thông minh Xiaomi chính hãng',
        price: 1500000, // 1.500.000 VND
        imageUrl: 'assets/layout/images/robot-hut-bui-lau-nha-xiaomi.jpg',
        rating: 5,
        description: 'Sản phẩm hút bụi thông minh với công suất mạnh mẽ.',
        stock: 20,
        category: 'Máy hút bụi thông minh',
      },
      {
        id: 2,
        name: 'Máy robot hút bụi thông minh SamSung chính hãng',
        price: 1200000, // 1.200.000 VND
        imageUrl: 'assets/layout/images/robot-hut-bui-samsung.jpg',
        rating: 4,
        description: 'Thiết kế nhỏ gọn, dễ dàng sử dụng.',
        stock: 15,
        category: 'Máy hút bụi thông minh',
      },
      {
        id: 3,
        name: 'Máy robot hút bụi thông minh Hitachi chính hãng',
        price: 1800000, // 1.800.000 VND
        imageUrl: 'assets/layout/images/robot-hut-bui-hitachi.jpg',
        rating: 3,
        description: 'Công nghệ tiên tiến, tối ưu hóa hiệu quả làm sạch.',
        stock: 10,
        category: 'Máy hút bụi thông minh',
      },
    ];
  
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
    if (this.selectedQuantity > product.stock) {
      alert('Số lượng vượt quá tồn kho!');
      return;
    }

    const cartItem = {
      ...product,
      quantity: this.selectedQuantity,
    };

    this.cart.push(cartItem);
    console.log('Giỏ hàng hiện tại:', this.cart);

    this.productDetailDialogVisible = false; // Close dialog
  }

  showProductDetails(product: any) {
    this.selectedProduct = product;
    this.selectedQuantity = 1; // Reset quantity
    this.productDetailDialogVisible = true;
  }
}
