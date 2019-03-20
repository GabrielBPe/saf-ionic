import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, AlertController } from 'ionic-angular';
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
  aposta: any[] = [];
  editar: any[] = [];

  idAposta = this.aposta;

  constructor(
    public navCtrl: NavController, 
    public service: ConsultaService, 
    public modalCtrl: ModalController,
    public alertCtrl: AlertController) {
  }

  ngOnInit() {
    this.getStage();
    this.getSurfers();
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

  consultar(email): void {
    console.log(email.viewModel);
    this.service.listBet(email.viewModel)
      .subscribe(res => {
        this.aposta = res;
      });
    console.log('---->');
    console.log(this.aposta);
    this.consulta = true;
  }

  onSubmit(editar){
    this.viewEdit = false;
    this.service.editBet(editar)
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

    
    
    console.log(editar.value);
  }

  edita() {
    this.viewEdit = true;
    this.consulta = false;
  }

  novaConsulta() {
    this.consulta = false;
  }
}
