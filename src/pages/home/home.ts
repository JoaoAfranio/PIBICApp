import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CurvaSimplesPage } from '../curva-simples/curva-simples';
import { CurvaTransicaoPage } from '../curva-transicao/curva-transicao';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  transferePaginaCurvaS(){
    this.navCtrl.push(CurvaSimplesPage)
  }

  transferePaginaCurvaT(){
    this.navCtrl.push(CurvaTransicaoPage)
  }
}
