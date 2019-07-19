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

  apostasGold: any[] = [];
  apostasBells: any[] = [];

  GoldCoastView: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: RankingService, public loadingCtrl: LoadingController) {

  }

  ngOnInit() {
    const loader = this.loadingCtrl.create({
      content: "A série tá chegando...",
      duration: 3000
    });
    loader.present();
    this.getRankingGold();
  }

  getRankingGold(): void {
    this.service.getRankingGold()
      .subscribe(res => {
        this.apostasGold = res.list;
        console.log(res)
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RankingPage');
  }

  goldCoast() {
    const loader = this.loadingCtrl.create({
      content: "A série tá chegando...",
      duration: 1000
    });
    loader.present();
    this.GoldCoastView = true;
  }

}
