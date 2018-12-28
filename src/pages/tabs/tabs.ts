import { Component } from '@angular/core';

import { ConsultaPage } from '../consultar/consulta';
import { ApostaPage } from '../apostar/aposta';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ConsultaPage;
  tab3Root = ApostaPage;

  constructor() {

  }
}
