import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the CurvaTransicaoDadosFinaisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-curva-transicao-dados-finais',
  templateUrl: 'curva-transicao-dados-finais.html',
})
export class CurvaTransicaoDadosFinaisPage {

  lista=[];
  lista2=[];
  
  constructor(public navCtrl: NavController) {
    this.lista=[
      {param:"RC = Raio da curva circular (m)",perc:80.2},
      {param:"TS = Ponto inicial do trecho de transição (m)",perc:30.2},
      {param:"SC = Espiral circular (m)",perc:18.2},
      {param:"CS = Circular espiral",perc:80.2},
      {param:"ST = Espiral tangente",perc:30.2},
      {param:"PI = Ponto de interseção das tangentes (m)",perc:18.2},
      {param:"Xs = Abscissa dos pontos SC e CS (m)",perc:80.2},
      {param:"Ys = Ordenada dos pontos SC e CS (m)",perc:30.2},
      {param:"TT = Tangente total (m)",perc:18.2},
      {param:"K = Abscissa do centro O'",perc:18.2},
      {param:"P = Afastamento da curva circular (m)",perc:18.2},
      {param:"θs = Ângulo de transição (rad)",perc:18.2},
      {param:"Φ = Ângulo central do trecho circular (rad)",perc:18.2},
      {param:"AC = Ângulo central (°)",perc:18.2},
      {param:"Δ = Deflexão das tangentes (°)",perc:18.2},
      {param:"D = Desenvolvimento do trecho circular (m)",perc:18.2},
      {param:"Ls = Comprimento do Trecho de Transição (m)",perc:18.2},
      {param:"E = Distância do PI à curva circular (m)",perc:18.2}
      
    ];

    this.lista2=[
      {param:"PI (estaca de interseção)",perc:80.2},
      {param:"TS (estaca inicial)",perc:80.2},
      {param:"SC (espiral circular)",perc:80.2},
      {param:"CS (circular espiral)",perc:80.2},
      {param:"ST (estaca final)",perc:80.2},
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CurvaTransicaoDadosFinaisPage');
  }

  transferePagina(){
    this.navCtrl.setRoot(HomePage);
    
  }
}
