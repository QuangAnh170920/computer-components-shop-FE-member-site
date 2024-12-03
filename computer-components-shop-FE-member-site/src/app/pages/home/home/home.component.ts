import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  banners = [
    { image: 'https://picsum.photos/1920/600?random=1' },
    { image: 'https://picsum.photos/1920/600?random=2' },
    { image: 'https://picsum.photos/1920/600?random=3' },
  ];
  
  categories = [
    { name: 'Bếp & Nấu ăn', image: 'https://picsum.photos/200/150?random=4' },
    { name: 'Dụng cụ vệ sinh', image: 'https://picsum.photos/200/150?random=5' },
    { name: 'Đồ gia dụng thông minh', image: 'https://picsum.photos/200/150?random=6' },
    { name: 'Đồ điện', image: 'https://picsum.photos/200/150?random=7' },
    { name: 'Trang trí nội thất', image: 'https://picsum.photos/200/150?random=8' },
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
