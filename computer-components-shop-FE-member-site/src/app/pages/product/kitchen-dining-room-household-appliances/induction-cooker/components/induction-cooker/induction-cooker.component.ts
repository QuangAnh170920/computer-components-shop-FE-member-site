import { Component } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { CartService } from '../../../../service/cart.service';
import { InductionCookerFacade } from '../../facade/induction-cooker.facade';

@Component({
  selector: 'app-induction-cooker',
  templateUrl: './induction-cooker.component.html',
  styleUrls: ['./induction-cooker.component.scss']
})
export class InductionCookerComponent {
  categoryName = 'Bếp từ/bếp hồng ngoại';
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
    searchPayload: number = 12;
    
  
    constructor(
      private confirmationService: ConfirmationService,
      private _inductionCookerFacade: InductionCookerFacade,
      private cartService:CartService,
    ) {}
  
    ngOnInit() {
      this.loadData();
    }
  
    loadData() {
      this._inductionCookerFacade.search(this.searchPayload);
      this._inductionCookerFacade.productsPaging$.subscribe((res) => {
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
      this.selectedQuantity = 1; // Reset quantity
      this.productDetailDialogVisible = true;
    }
}
