import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { RankingService } from './ranking.service';

/**
 * Generated class for the RankingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-ranking',
  templateUrl: 'ranking.html',
})
export class RankingPage implements OnInit {

  rankingAno: boolean = true;
  rankingAustralia: boolean = false;
  rankingEuropa: boolean = false;

  apostas: any[] = [];




  constructor(public navCtrl: NavController, public navParams: NavParams, public service: RankingService, public loadingCtrl: LoadingController) {

  }

  ngOnInit() {
    const loader = this.loadingCtrl.create({
      content: "A serie ta chegando...",
      duration: 2000
    });
    loader.present();
    this.getRanking();
  }

  getRanking(): void {
    this.service.getRanking()
      .subscribe(res => {
        this.apostas = res.list;
        console.log(res)
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RankingPage');
  }

  ano() {
    this.rankingAno = true;
    this.rankingAustralia = false;
    this.rankingEuropa = false;

  }

  europa() {
    this.rankingAno = false;
    this.rankingAustralia = false;
    this.rankingEuropa = true;


  }

  australia() {
    this.rankingAno = false;
    this.rankingAustralia = true;
    this.rankingEuropa = false;


  }


}
