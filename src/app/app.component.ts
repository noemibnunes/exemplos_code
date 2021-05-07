import { Component } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`

    ::ng-deep .carousel .carousel-control-prev-icon {
      background-color: #8B008B;
      width: 40x;
      height: 30px;
      background-size: 40%;
      border-radius: 100px;
    }

    ::ng-deep .carousel .carousel-control-next-icon {
      background-color: #8B008B;
      width: 40x;
      height: 30px;
      background-size: 40%;
      border-radius: 100px;
    }

    ::ng-deep .carousel {
      flex: 0 0 66.666667%;
      position: relative;
      width: 100%;
    }

    ::ng-deep .carousel .carousel-indicators {
      position: absolute;
      right: 0;
      bottom: -50px;
      left: 0;
      z-index: 15;
      display: flex;
      justify-content: center;
      padding-left: 0;
      margin-right: 15%;
      margin-left: 15%;
    }

    ::ng-deep .carousel .carousel-indicators .active {
      opacity: 1;
      background-color: #8B008B;
    }

    ::ng-deep .carousel .carousel-indicators li {
      box-sizing: content-box;
      flex: 0 1 auto;
      width: 30px;
      height: 3px;
      margin-right: 3px;
      margin-left: 3px;
      text-indent: -999px;
      cursor: pointer;
      background-color: #8B008B;
      background-clip: padding-box;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      opacity: .5;
      transition: opacity .6s ease;
    }

    ::ng-deep .carousel .carousel-inner {
      position: inherit;
      width: 50%;
      overflow: hidden;
      margin: auto;
    }

    ::ng-deep .carousel .carousel-inner #slide {
      padding: 3%;
      width: auto;
      height: auto;
    }
  `]
})
export class AppComponent {
  title = 'CodeRosa';

  constructor() {
    setTheme('bs4'); // or 'bs4'
  }

  itemsPerSlide = 3;
  singleSlideOffset = false;
  isAnimated = true;

  slides = [
    {image: '../assets/imagens/ad-b.png'},
    {image: '../assets/imagens/jv-b.png'},
    {image: '../assets/imagens/meid-b.png'},
    {image: '../assets/imagens/ad-g.png'},
    {image: '../assets/imagens/meid-g.png'},
    {image: '../assets/imagens/jv-g.png'},
    {image: '../assets/imagens/ad-b.png'},
    {image: '../assets/imagens/meid-b.png'},
    {image: '../assets/imagens/jv-g.png'},
    {image: '../assets/imagens/ad-g.png'}
  ];
}
