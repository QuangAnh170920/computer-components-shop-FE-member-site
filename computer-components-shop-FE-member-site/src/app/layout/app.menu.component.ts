import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { AppFacade } from './facades/app.facade';
import { LazyLoadEvent } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
    styleUrl: './app.menu.component.scss'
})
export class AppMenuComponent implements OnInit {
    model: any[] = [];
    keyword?: string;
    event?: LazyLoadEvent;
    ref?: DynamicDialogRef;
    first = 1;
    menu: any[] = [];

    constructor(
        public layoutService: LayoutService,
        private appFacade: AppFacade,
    ) {}

    ngOnInit() {
        this.model = [
            {
                label: 'ĐỒ DÙNG BẾP & PHÒNG ĂN',
                expanded: false,
                items: [
                    {
                        label: 'Kệ bếp thông minh',
                        icon: 'pi pi-fw pi-home',
                        routerLink: [''],
                    },
                    {
                        label: 'Kệ gia vị thông minh',
                        icon: 'pi pi-fw pi-chart-bar',
                        routerLink: ['/report'],
                    },
                    {
                        label: 'Kệ chén đa năng',
                        icon: 'pi pi-fw pi-chart-bar',
                        routerLink: ['/report'],
                    },
                    {
                        label: 'Kệ lò vi sóng thông minh',
                        icon: 'pi pi-fw pi-chart-bar',
                        routerLink: ['/report'],
                    },
                    {
                        label: 'Hộp & Ống đựng đũa thông minh',
                        icon: 'pi pi-fw pi-chart-bar',
                        routerLink: ['/report'],
                    },
                    {
                        label: 'Phụ kiện nhà bếp thông minh',
                        icon: 'pi pi-fw pi-chart-bar',
                        routerLink: ['/report'],
                    },
                    {
                        label: 'Thùng gạo thông minh',
                        icon: 'pi pi-fw pi-chart-bar',
                        routerLink: ['/report'],
                    },
                ],
            },
            {
                label: 'GIA DỤNG PHÒNG TẮM',
                expanded: false,
                items: [
                    {
                        label: 'Kệ nhà tắm đa năng, thông minh',
                        routerLink: [''],
                    },
                    {
                        label: 'Hộp đựng giấy thông minh',
                        routerLink: ['/report'],
                    },
                    {
                        label: 'Đồ dùng nhà vệ sinh (WC)',
                        routerLink: ['/report'],
                    },
                    {
                        label: 'Kệ treo khăn tắm thông minh',
                        routerLink: ['/report'],
                    },
                    {
                        label: 'Móc treo quần áo thông minh',
                        routerLink: ['/report'],
                    },
                ],
            },
        ];
    }

    toggleMenu(index: number) {
        this.model[index].expanded = !this.model[index].expanded;
    }
}
