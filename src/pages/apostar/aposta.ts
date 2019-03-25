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
  }

  getSurfers(): void {
    this.service.getTodo()
      .subscribe(res => {
        this.surfistas = res;
      });
    console.log('---->');
    console.log(this.surfistas)
  }

  getStage(): void {
    this.service.listStage()
      .subscribe(res => {
        this.etapas = res;
      });
    console.log('---->');
    console.log(this.etapas)
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
        console.log(dados);
        if (dados.status === 200) {
          const alert = this.alertCtrl.create({
            title: 'APOSTA ENVIADA!',
            message: 'Você pode consultar sua aposta na aba de CONSULTA e EDITAR antes do início da etapa! Boas ondas!',
            buttons: ['OK']
          });
          alert.present();
        } if(dados.status == 400) {
          const alert = this.alertCtrl.create({
            title: 'Erro ao salvar aposta',
            message: 'Mensagem de erro',
            buttons: ['OK']
          });
          alert.present();
        }
      });

    console.log(aposta.value);
  }
}
