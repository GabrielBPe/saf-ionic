import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, AlertController, LoadingController } from 'ionic-angular';
import { ConsultaService } from './consulta.service';

@Component({
  selector: 'page-consulta',
  templateUrl: 'consulta.html'
})
export class ConsultaPage implements OnInit {

  consulta: boolean = false;
  viewEdit: boolean = false;

  surfistas: any[] = [];
  etapas: any[] = [];
  aposta: any;
  editar: any[] = [];
  lastStage: any[] = [];

  lastId: string;

  idAposta = this.aposta;

  constructor(
    public navCtrl: NavController,
    public service: ConsultaService,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController) {
  }

  ngOnInit() {
    this.getStage();
    this.getSurfers();
    this.getLastStage();
  }

  getSurfers(): void {
    this.service.getTodo()
      .subscribe(res => {
        this.surfistas = res;
      });
  }

  getStage(): void {
    this.service.listStage()
      .subscribe(res => {
        this.etapas = res;
      });
  }

  getLastStage(): void {
    this.service.getlastStage()
      .subscribe(res => {
        this.lastStage.push(res);
      });
  }

  consultar(email): void {
    const loader = this.loadingCtrl.create({
      content: "Reeema ...",
      duration: 2000
    });
    loader.present();
    console.log(email.viewModel);
    this.service.listBet(email.viewModel)
      .subscribe(res => {
        this.aposta = res;
        this.lastId = this.aposta.list[this.aposta.list.length - 1]._id;
        this.viewEdit = false;
        this.consulta = true;
      });


  }

  onSubmit(editar) {
    this.viewEdit = false;
    this.service.editBet(editar)
      .subscribe(dados => {
        const alert = this.alertCtrl.create({
          title: 'Aposta Salva',
          message: 'Sua aposta foi editada. Apostas com surfista igual em posições diferentes serão automaticamente canceladas.',
          buttons: ['OK']
        });
        alert.present();
      }, err => {

        const alert = this.alertCtrl.create({
          title: 'Erro ao editar',
          message: 'Não conseguimos editar sua aposta, verifique se o email e nickname estão iguais ao da aposta.',
          buttons: ['OK']
        });
        alert.present();
      });
  }

  edita() {
    const alert = this.alertCtrl.create({
      title: 'LEMBRE-SE',
      message: 'Lembre-se de colocar o mesmo NICKNAME e EMAIL na edicao da aposta, caso contrário sua aposta poderá ser perdida.',
      buttons: ['OK']
    });
    alert.present();

    this.viewEdit = true;
    this.consulta = false;
  }

  novaConsulta() {
    this.consulta = false;
  }
}
