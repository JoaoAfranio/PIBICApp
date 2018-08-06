import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ParamProjetoCsPage } from '../param-projeto-cs/param-projeto-cs';

/**
 * Generated class for the CurvaSimplesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-curva-simples',
  templateUrl: 'curva-simples.html',
})
export class CurvaSimplesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CurvaSimplesPage');
  }

  transferePagina(){
    this.navCtrl.push(ParamProjetoCsPage);
  }

  
}
