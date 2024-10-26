import { Component, OnInit } from '@angular/core';
import { CarsService, Car } from '../../services/cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent implements OnInit {
  car: Car = { patente: "", year: 0, imagenUrl: "", nombre: "" };
  cars: Car[] = []; // Agregar esta propiedad para almacenar la lista de autos

  constructor(private carsService: CarsService) {}

  ngOnInit() {
    this.loadCars(); // Cargar los autos al inicializar el componente
  }

  loadCars() {
    this.carsService.getCars().then((data) => {
      this.cars = data; // Asegúrate de que getCars devuelva la lista de autos
    }).catch((error) => {
      console.error("Error al cargar los autos:", error);
    });
  }

  addCar() {
    this.carsService.addCar(this.car).then(() => {
      alert("Agregado Correctamente");
      this.car = { patente: "", year: 0, imagenUrl: "", nombre: "" };
      this.loadCars(); // Recargar la lista de autos después de agregar uno nuevo
    }).catch(error => {
      alert("Error al agregar: " + error);
    });
  }
}

