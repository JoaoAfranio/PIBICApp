import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CurvaSimplesDadosFinaisPage } from '../curva-simples-dados-finais/curva-simples-dados-finais';

/**
 * Generated class for the CurvaSimplesDadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-curva-simples-dados',
  templateUrl: 'curva-simples-dados.html',
})
export class CurvaSimplesDadosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CurvaSimplesDadosPage');
  }


  transferePagina(){
    this.navCtrl.push(CurvaSimplesDadosFinaisPage);
  }

}
