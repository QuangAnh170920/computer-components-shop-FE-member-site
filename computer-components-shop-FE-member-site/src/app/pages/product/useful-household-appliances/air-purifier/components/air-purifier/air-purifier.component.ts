import { Component } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { AirPurifierFacade } from '../../facades/air-purifier.facade';
import { CartService } from '../../../../service/cart.service';

@Component({
  selector: 'app-air-purifier',
  templateUrl: './air-purifier.component.html',
  styleUrls: ['./air-purifier.component.scss'],
})
export class AirPurifierComponent {
  categoryName = 'Máy lọc không khí';
  totalProducts = 3;
  filterOptions = [
    { label: 'Giá giảm dần', value: 'desc' },
    { label: 'Giá tăng dần', value: 'asc' },
  ];
  selectedFilter: string = '';

  rows = 10;
  products: any[] = [];
  filteredProducts: any;
  cart: any[] = [];

  productDetailDialogVisible: boolean = false;
  selectedProduct: any = null;
  selectedQuantity: number = 1;
  searchPayload: number = 8;

  constructor(
    private confirmationService: ConfirmationService,
    private _airPurifierFacade: AirPurifierFacade,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this._airPurifierFacade.search(this.searchPayload);
    this._airPurifierFacade.productsPaging$.subscribe((res) => {
      if (res) {
        this.filteredProducts = res;
      }
    });
  }

  onFilterChange() {}

  addToCart(product: any) {
    if (this.selectedQuantity > product.quantityAvailable) {
      alert('Số lượng vượt quá tồn kho!');
      return;
    }

    const cartItem = {
      ...product,
      quantity: this.selectedQuantity,
    };

    this.cartService.add(cartItem);
  }

  showProductDetails(product: any) {
    this.selectedProduct = product;
    this.selectedQuantity = 1;
    this.productDetailDialogVisible = true;
  }
}
