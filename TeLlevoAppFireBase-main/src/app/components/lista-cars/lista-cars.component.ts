import { Component, OnInit } from '@angular/core';
import { Car, CarsService } from '../../services/cars.service';

@Component({
  selector: 'app-lista-cars',
  templateUrl: './lista-cars.component.html',
  styleUrls: ['./lista-cars.component.scss'],
})
export class ListaCarsComponent  implements OnInit {
  cars :Car[]=[]
  constructor(private carsService:CarsService) { }

  ngOnInit() {
    this.carsService.getCar().subscribe(cars =>{
      this.cars=cars;
    })
  }

}
