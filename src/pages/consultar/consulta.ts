import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ConsultaService } from './consulta.service';
import { EditarApostaPage } from '../editar-aposta/editar-aposta';

@Component({
  selector: 'page-consulta',
  templateUrl: 'consulta.html'
})
export class ConsultaPage {

consulta: boolean = false;
editar: boolean = false;

  // surfista: any[] = [];
  // etapa: any[] = [];
  aposta: any[] = [];

  idAposta = this.aposta;

  constructor(public navCtrl: NavController, public service: ConsultaService, public modalCtrl: ModalController) {
  }

  ActiveEdit() {
    let profileModal = this.modalCtrl.create(EditarApostaPage);
    profileModal.present();
    profileModal.onDidDismiss(data => {  
      console.log(data);
    });
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

  // itemTapped() {
  //     this.editar = true;
  //      this.navCtrl.push(EditarApostaPage);
  //   }

  novaConsulta() {
    this.consulta = false;
  }
}
