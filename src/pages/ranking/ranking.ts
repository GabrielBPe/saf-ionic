import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
export class RankingPage {

  rankingAno: boolean = true;
  rankingAustralia: boolean = false;
  rankingEuropa: boolean = false;



  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
