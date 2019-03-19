import { Component, Input, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { EtapaModel } from '../../models/etapa';
import { SurferModel } from '../../models/conv';
import { ApostaService } from '../apostar/aposta.service';

/**
 * Generated class for the EditarApostaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editar-aposta',
  templateUrl: 'editar-aposta.html',
})
export class EditarApostaPage implements OnInit {

  @Input() idAposta: string = '';

  aposta: any [];
  etapas: EtapaModel[] = [];
  surfistas: SurferModel[] = [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private service: ApostaService) {
  }

  ngOnInit(){
    console.log(this.idAposta);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarApostaPage');
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
