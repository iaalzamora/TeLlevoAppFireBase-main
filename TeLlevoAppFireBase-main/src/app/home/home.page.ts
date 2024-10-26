import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  diccionario = {
    user: "",
    pw: ""
  };

  constructor(private aRout: ActivatedRoute,
    private toastController: ToastController,
    private router: Router) { }

  async mostrarMensajeRedNoDisponible() {
    const toast = await this.toastController.create({
      message: 'Aún no tenemos esta red :D',
      duration: 2000,
      position: 'bottom'
    });
    await toast.present();
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    this.aRout.queryParams.subscribe(params => {
      this.diccionario.user = params['data1'];
      this.diccionario.pw = params['data2'];
    });
  }
}









