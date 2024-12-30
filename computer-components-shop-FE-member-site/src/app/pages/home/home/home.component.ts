import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  banners = [
    { image: 'assets/layout/images/banner1.jpg' },
    { image: 'assets/layout/images/banner2.jpg' },
    { image: 'assets/layout/images/banner3.jpg' },
  ];
  
  categories = [
    { name: 'Bếp & Nấu ăn', image: 'assets/layout/images/banner-bep.jpg' },
    { name: 'Dụng cụ vệ sinh', image: 'assets/layout/images/banner-dung-cu-ve-sinh.jpg' },
    { name: 'Đồ gia dụng thông minh', image: 'assets/layout/images/banner-do-gia-dung.jpg' },
    { name: 'Đồ điện', image: 'assets/layout/images/banner-do-dien.jpg' },
    { name: 'Trang trí nội thất', image: 'assets/layout/images/banner-do-noi-that.jpg' },
  ];
  
  topProducts = [
    { name: 'Nồi chiên không dầu', price: '1.500.000đ', image: 'https://picsum.photos/300/200?random=9' },
    { name: 'Máy hút bụi', price: '3.000.000đ', image: 'https://picsum.photos/300/200?random=10' },
    { name: 'Máy xay sinh tố', price: '800.000đ', image: 'https://picsum.photos/300/200?random=11' },
    { name: 'Máy xay sinh tố 1', price: '800.000đ', image: 'https://picsum.photos/300/200?random=12' },
    { name: 'Máy xay sinh tố 2', price: '800.000đ', image: 'https://picsum.photos/300/200?random=13' },
    { name: 'Máy xay sinh tố 3', price: '800.000đ', image: 'https://picsum.photos/300/200?random=14' },
  ];
  
  recommendedProducts = [
    { name: 'Quạt điện', price: '400.000đ', image: 'https://picsum.photos/300/200?random=15' },
    { name: 'Bình đun siêu tốc', price: '500.000đ', image: 'https://picsum.photos/300/200?random=16' },
    { name: 'Nồi cơm điện', price: '2.000.000đ', image: 'https://picsum.photos/300/200?random=17' },
  ];
}
