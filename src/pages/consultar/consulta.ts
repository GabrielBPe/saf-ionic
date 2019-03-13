import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConsultaService } from './consulta.service';

@Component({
  selector: 'page-consulta',
  templateUrl: 'consulta.html'
})
export class ConsultaPage {

consulta: boolean = false;

  // surfista: any[] = [];
  // etapa: any[] = [];
  aposta: any[] = [];

  constructor(public navCtrl: NavController, public service: ConsultaService) {

  }

  // getSurfers(): void {
  //   this.service.getTodo()
  //   .subscribe(res => {
  //     this.surfista = res;});
  //   console.log('---->');
  //   console.log(this.surfista)
  // }

  onSubmit(email): void {
    console.log(email.viewModel);
    this.service.listBet(email.viewModel)
    .subscribe(res => {
      this.aposta = res;});
    console.log('---->');
    console.log(this.aposta);
    this.consulta = true;
  }


  novaConsulta() {
    this.consulta = false;
  }
}
