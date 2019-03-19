import { Component, Input, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { EtapaModel } from '../../models/etapa';
import { SurferModel } from '../../models/conv';
import { EditarService } from './editar.service';
import { ConsultaPage } from '../consultar/consulta';

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
    private service: EditarService,
    public loadingCtrl: LoadingController) {
  }

  ngOnInit(){
    console.log(this.idAposta);
    this.getSurfers();
    this.getStage();
    
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 1000
    });
    loader.present();
  }
  

//   itemTapped() {
//     this.navCtrl.push(ConsultaPage);
// }

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
          message: this.idAposta, 
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
