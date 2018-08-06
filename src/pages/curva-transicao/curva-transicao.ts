import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ParamProjetoCtPage } from '../param-projeto-ct/param-projeto-ct';

/**
 * Generated class for the CurvaTransicaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-curva-transicao',
  templateUrl: 'curva-transicao.html',
})
export class CurvaTransicaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CurvaTransicaoPage');
  }


  transferePagina(){
    this.navCtrl.push(ParamProjetoCtPage);
  }
  

}
