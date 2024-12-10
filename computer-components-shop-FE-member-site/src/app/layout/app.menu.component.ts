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
                        routerLink: [''],
                    },
                    {
                        label: 'Máy lọc không khí',
                        routerLink: ['/report'],
                    },
                    {
                        label: 'Máy tạo ẩm',
                        routerLink: ['/report'],
                    },
                    {
                        label: 'Ổ cắm và công tắc thông minh',
                        routerLink: ['/report'],
                    },
                    {
                        label: 'Camera giám sát thông minh',
                        routerLink: ['/report'],
                    },
                    {
                        label: 'Đèn cảm ứng tự động',
                        routerLink: ['/report'],
                    },
                    {
                        label: 'Máy sưởi/máy làm mát di động',
                        routerLink: ['/report'],
                    },
                ],
            },
            {
                label: 'GIA DỤNG PHÒNG BẾP & PHÒNG ĂN',
                expanded: false,
                items: [
                    {
                        label: 'Nồi chiên không dầu',
                        routerLink: [''],
                    },
                    {
                        label: 'Nồi cơm điện thông minh',
                        routerLink: ['/report'],
                    },
                    {
                        label: 'Bếp từ/bếp hồng ngoại',
                        routerLink: ['/report'],
                    },
                    {
                        label: 'Máy xay sinh tố đa năng',
                        routerLink: ['/report'],
                    },
                    {
                        label: 'Ấm đun nước siêu tốc',
                        routerLink: ['/report'],
                    },
                    {
                        label: 'Máy rửa chén bát',
                        routerLink: ['/report'],
                    },
                    {
                        label: 'Máy pha cà phê',
                        routerLink: ['/report'],
                    },
                    {
                        label: 'Hộp đựng thực phẩm thông minh',
                        routerLink: ['/report'],
                    },
                    {
                        label: 'Tủ lạnh mini thông minh',
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
                    {
                        label: 'Máy chiếu mini',
                        routerLink: ['/report'],
                    },
                    {
                        label: 'Quạt trần/quạt đứng thông minh',
                        routerLink: ['/report'],
                    },
                    {
                        label: 'Bộ điều khiển nhà thông minh',
                        routerLink: ['/report'],
                    },
                    {
                        label: 'Rèm cửa tự động',
                        routerLink: ['/report'],
                    },
                    {
                        label: 'Máy massage',
                        routerLink: ['/report'],
                    },
                    {
                        label: 'Bộ sạc không dây',
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
            {
                label: 'GIA DỤNG PHÒNG NGỦ',
                expanded: false,
                items: [
                    {
                        label: 'Đèn ngủ cảm ứng',
                        routerLink: [''],
                    },
                    {
                        label: 'Đồng hồ báo thức thông minh',
                        routerLink: ['/report'],
                    },
                    {
                        label: 'Quạt hơi nước',
                        routerLink: ['/report'],
                    },
                    {
                        label: 'Tủ quần áo thông minh',
                        routerLink: ['/report'],
                    },
                    {
                        label: 'Chăn điện/đệm sưởi',
                        routerLink: ['/report'],
                    },
                    {
                        label: 'Máy lọc không khí mini',
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
                        routerLink: [''],
                    },
                    {
                        label: 'Hướng dẫn tạo tài khoản',
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
