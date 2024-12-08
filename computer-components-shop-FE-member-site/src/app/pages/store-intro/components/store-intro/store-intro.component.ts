import { Component } from '@angular/core';

@Component({
  selector: 'app-store-intro',
  templateUrl: './store-intro.component.html',
  styleUrl: './store-intro.component.scss',
})
export class StoreIntroComponent {
  menuItems: any[] = [];

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Chất lượng vượt trội',
        icon: 'pi pi-star',
        command: () => this.scrollToSection('section1'),
      },
      {
        label: 'Sản phẩm thông minh',
        icon: 'pi pi-cog',
        command: () => this.scrollToSection('section2'),
      },
      {
        label: 'Vận chuyển nhanh',
        icon: 'pi pi-truck',
        command: () => this.scrollToSection('section3'),
      },
      {
        label: 'Thanh toán linh hoạt',
        icon: 'pi pi-wallet',
        command: () => this.scrollToSection('section4'),
      },
      {
        label: 'Bảo hành đổi trả',
        icon: 'pi pi-refresh',
        command: () => this.scrollToSection('section5'),
      },
    ];
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
