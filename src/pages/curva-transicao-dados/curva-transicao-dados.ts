import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CurvaTransicaoDadosFinaisPage } from '../curva-transicao-dados-finais/curva-transicao-dados-finais';

/**
 * Generated class for the CurvaTransicaoDadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-curva-transicao-dados',
  templateUrl: 'curva-transicao-dados.html',
})
export class CurvaTransicaoDadosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CurvaTransicaoDadosPage');
  }

  transferePagina(){
    this.navCtrl.push(CurvaTransicaoDadosFinaisPage);
  }
}
