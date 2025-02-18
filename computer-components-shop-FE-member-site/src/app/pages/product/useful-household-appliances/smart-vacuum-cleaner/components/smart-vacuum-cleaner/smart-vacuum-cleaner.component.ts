import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { SmartVacuumCleanerFacade } from '../../facades/smart-vacuum-cleaner.facade';
import { CartService } from '../../../../service/cart.service';
import { ToastService } from '../../../../../../shared/services/toast.service';

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
  filteredProducts: any;
  cart: any[] = [];

  productDetailDialogVisible: boolean = false;
  selectedProduct: any = null;
  selectedQuantity: number = 1;
  searchPayload: number = 7;
  

  constructor(
    private confirmationService: ConfirmationService,
    private _smartVacuumCleanerFacade: SmartVacuumCleanerFacade,
    private cartService:CartService,
    private toastService: ToastService,
  ) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this._smartVacuumCleanerFacade.search(this.searchPayload);
    this._smartVacuumCleanerFacade.productsPaging$.subscribe((res) => {
      if (res) {
        this.filteredProducts = res;
      }
    });
  }

  onFilterChange() {}

  addToCart(product: any) {
    if (this.selectedQuantity > product.quantityAvailable) {
      this.toastService.showError('Vượt quá số lượng tồn kho.');
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
    this.selectedQuantity = 1; // Reset quantity
    this.productDetailDialogVisible = true;
  }
}
