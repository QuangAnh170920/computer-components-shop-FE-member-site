import { Component, ElementRef, ViewChild } from '@angular/core';
import { ConfirmationService, MenuItem } from 'primeng/api';
import { LayoutService } from './service/app.layout.service';
import { Router } from '@angular/router';
import { SessionService } from '../shared/services/session.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html',
  styleUrl: './app.topbar.component.scss',
})
export class AppTopBarComponent {
  items!: MenuItem[];

  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;

  constructor(
    public layoutService: LayoutService,
    private confirmationService: ConfirmationService,
    private sessionService: SessionService,
    private router: Router
  ) {}
  ngOnInit() {
    this.items = [
      {
        label: 'Thông tin chung',
        icon: 'pi pi-fw pi-info-circle',
        routerLink: '/user/user-info',
      },
      {
        label: 'Thay đổi mật khẩu',
        icon: 'pi pi-fw pi-cog',
        routerLink: '/user/user-change-password',
      },
      {
        label: 'Đăng xuất',
        icon: 'pi pi-fw pi-power-off',
        command: () => {
          this.logout();
        },
      },
    ];
  }
  logout() {
    this.confirmationService.confirm({
      message: 'Bạn có muốn đăng xuất?',
      header: 'Xác nhận',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        if (this.sessionService.logout()) {
          this.router.navigate(['/auth/login']);
        }
      },
      reject: () => {},
    });
  }

  onSearch() {}

  cartDrawerVisible = false;
  cart = [
    {
      id: 1,
      name: 'Máy robot hút bụi thông minh Xiaomi chính hãng',
      price: 1500000,
      quantity: 2,
      imageUrl: 'assets/layout/images/robot-hut-bui-lau-nha-xiaomi.jpg',
    },
    {
      id: 2,
      name: 'Máy robot hút bụi thông minh SamSung chính hãng',
      price: 1200000,
      quantity: 1,
      imageUrl: 'assets/layout/images/robot-hut-bui-samsung.jpg',
    },
  ];

  toggleCartDrawer() {
    this.cartDrawerVisible = !this.cartDrawerVisible;
  }

  removeFromCart(index: number) {
    this.cart.splice(index, 1);
  }

  getTotalPrice(): number {
    return this.cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  placeOrder() {
    console.log('Đặt hàng:', this.cart);
    // Thêm logic đặt hàng tại đây
  }

  userInfoDialogVisible: boolean = false; // Dialog visibility toggle
  userInfo: {
    username: string;
    fullName: string;
    email: string;
    address: string;
    phone: string;
  } = {
    username: 'qap1792', // Default values for demonstration
    fullName: 'Phùng Quang Anh',
    email: 'anhphungquang1792@gmail.com',
    address: 'Hà Nội',
    phone: '0528541357',
  };

  toggleUserInfoDialog() {
    this.userInfoDialogVisible = !this.userInfoDialogVisible;
  }

  saveUserInfo() {
    console.log('Thông tin đã lưu:', this.userInfo);
    this.userInfoDialogVisible = false; // Close dialog after saving
  }
}
