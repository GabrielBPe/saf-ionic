import { Component } from '@angular/core';
import { NavController, NavParams, AlertController  } from 'ionic-angular';

@Component({
  selector: 'page-aposta',
  templateUrl: 'aposta.html'
})
export class ApostaPage {

  aposta: any [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {

  }

  onSubmit(aposta){
    
    const alert = this.alertCtrl.create({
      title: 'Aposta Salva',
      message: 'Lembre-se que voce pode consultar sua aposta a qualquer momento na aba de CONSULTA, e caso queira editar sua aposta basta enviar uma nova aposta, assim ela será atualizada de forma instantânea! Tmjjj, boas ondas!' , 
      buttons: ['OK']
    });
    alert.present();
    console.log(aposta.value);
  }

}
