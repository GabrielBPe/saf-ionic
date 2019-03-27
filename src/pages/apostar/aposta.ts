import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ApostaService } from './aposta.service';
import { SurferModel } from '../../models/conv';
import { EtapaModel } from '../../models/etapa';

@Component({
  selector: 'page-aposta',
  templateUrl: 'aposta.html'
})
export class ApostaPage implements OnInit {

  // aposta: any [
  //   {
  //     "id_Etapa": 
  //   }
  // ];
  etapas: EtapaModel[] = [];
  surfistas: SurferModel[] = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private service: ApostaService
  ) {

  }

  ngOnInit() {
  
    this.getSurfers();
    this.getStage();
    console.log('Developer By: Gabriel Barbosa Pereira and Severino José da Costa Neto.')

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

  aposta: any = {
    id_Etapa: "",
    id_Vice: "",
    id_T1: "",
    id_T2: "",
    apostador: {
      nickname: "",
      email: ""
    }
  };

  apostador:any=[]

  onSubmit(aposta) {
    this.service.saveBet(aposta)
      .subscribe(dados => {
          const alert = this.alertCtrl.create({
            title: 'APOSTA ENVIADA!',
            message: 'Você pode consultar sua aposta na aba de CONSULTA e EDITAR antes do início da etapa! Boas ondas! Apostas com surfista igual em posições diferentes serão automaticamente canceladas.',
            buttons: ['OK']
          });
          alert.present();
        }, err => {
  
          const alert = this.alertCtrl.create({
            title: 'Erro Ao Salvar',
            message: 'Nickname ou email já usados, tente outro.',
            buttons: ['OK']
          });
          alert.present();
        });
  }
}
