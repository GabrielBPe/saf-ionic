import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ConsultaPage } from '../pages/consultar/consulta';
import { ApostaPage } from '../pages/apostar/aposta';
import { HomePage } from '../pages/home/home';
import { RankingPage } from '../pages/ranking/ranking';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { ApostaService } from '../pages/apostar/aposta.service';
import { ConsultaService } from '../pages/consultar/consulta.service';
import { RankingService } from '../pages/ranking/ranking.service';


@NgModule({
  declarations: [
    MyApp,
    ConsultaPage,
    ApostaPage,
    HomePage,
    RankingPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ConsultaPage,
    ApostaPage,
    HomePage,
    RankingPage,
    TabsPage,
  ],
  providers: [
    ApostaService,
    ConsultaService,
    RankingService,
    StatusBar,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
