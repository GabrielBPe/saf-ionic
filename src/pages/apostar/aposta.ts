import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController  } from 'ionic-angular';
import { ApostaService } from './aposta.service';
import { SurferModel } from '../../models/conv';
import { EtapaModel } from '../../models/etapa';

@Component({
  selector: 'page-aposta',
  templateUrl: 'aposta.html'
})
export class ApostaPage implements OnInit {

  aposta: any [];
  etapas: EtapaModel[] = [];
  surfistas: SurferModel[] = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController,
              private service: ApostaService
            ) {

  }

  ngOnInit(){
    this.getSurfers();
    this.getStage();
  }

  getSurfers(): void {
    this.service.getTodo()
    .subscribe(res => {
      this.surfistas = res;});
    console.log('---->');
    console.log(this.surfistas)
  }

  getStage(): void {
    this.service.listStage()
    .subscribe(res => {
      this.etapas = res;});
    console.log('---->');
    console.log(this.etapas)
  }

  onSubmit(aposta){
    this.service.saveBet(aposta)
    .subscribe(dados => {
      if (dados.status === 200) {
        const alert = this.alertCtrl.create({
          title: 'Aposta Salva',
          message: 'Lembre-se que voce pode consultar sua aposta a qualquer momento na aba de CONSULTA, e caso queira editar sua aposta basta enviar uma nova aposta, assim ela será atualizada de forma instantânea! Tmjjj, boas ondas!' , 
          buttons: ['OK']
        });
        alert.present();  
      } else {
        const alert = this.alertCtrl.create({
          title: 'Erro ao salvar aposta',
          message: 'Mensagem de erro' , 
          buttons: ['OK']
        });
        alert.present();  
      }
    });

    
    
    console.log(aposta.value);
  }
}
