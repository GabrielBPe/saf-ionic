import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-consulta',
  templateUrl: 'consulta.html'
})
export class ConsultaPage {

consulta: boolean = false;

  constructor(public navCtrl: NavController) {

  }

  consultar() {
    this.consulta = true;
  }

  novaConsulta() {
    this.consulta = false;
  }
}
