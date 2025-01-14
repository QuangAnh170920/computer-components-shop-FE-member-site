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
                label: 'GIA DỤNG TIỆN ÍCH',
                expanded: false,
                items: [
                    {
                        label: 'Máy hút bụi thông minh',
                        routerLink: ['/smart-vacuum-cleaner'],
                    },
                    {
                        label: 'Máy lọc không khí',
                        routerLink: ['/air-purifier'],
                    },
                ],
            },
            {
                label: 'GIA DỤNG PHÒNG BẾP & PHÒNG ĂN',
                expanded: false,
                items: [
                    {
                        label: 'Nồi cơm điện thông minh',
                        routerLink: ['/report'],
                    },
                    {
                        label: 'Bếp từ/bếp hồng ngoại',
                        routerLink: ['/report'],
                    },
                ],
            },
            {
                label: 'GIA DỤNG PHÒNG KHÁCH',
                expanded: false,
                items: [
                    {
                        label: 'Tivi thông minh',
                        routerLink: [''],
                    },
                    {
                        label: 'Loa Bluetooth',
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
                        label: 'Đồ dùng nhà vệ sinh (WC)',
                        routerLink: ['/report'],
                    },
                ],
            },
            {
                label: 'GIA DỤNG PHÒNG NGỦ',
                expanded: false,
                items: [
                    {
                        label: 'Đèn ngủ cảm ứng',
                        routerLink: [''],
                    },
                    {
                        label: 'Tủ quần áo thông minh',
                        routerLink: ['/report'],
                    },
                ],
            },
            {
                label: 'VỀ QAP STORE',
                expanded: false,
                items: [
                    {
                        label: 'Giới thiệu',
                        routerLink: ['/store-intro'],
                    },
                    {
                        label: 'Chính sách bảo hành & đổi trả',
                        routerLink: ['/policy'],
                    },
                    {
                        label: 'Chính sách bảo mật',
                        routerLink: ['/policy-privacy'],
                    },
                ],
            },
            {
                label: 'HƯỚNG DẪN',
                expanded: false,
                items: [
                    {
                        label: 'Hướng dẫn đặt & mua hàng',
                        routerLink: ['/instruct-order-purchase'],
                    },
                    {
                        label: 'Hướng dẫn tạo tài khoản',
                        routerLink: ['/instruct-account'],
                    },
                ],
            },
        ];
    }

    toggleMenu(index: number) {
        this.model[index].expanded = !this.model[index].expanded;
    }
}
