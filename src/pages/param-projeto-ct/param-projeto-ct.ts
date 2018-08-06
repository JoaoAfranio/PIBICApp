import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CurvaTransicaoDadosPage } from '../curva-transicao-dados/curva-transicao-dados';

/**
 * Generated class for the ParamProjetoCtPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-param-projeto-ct',
  templateUrl: 'param-projeto-ct.html',
})
export class ParamProjetoCtPage {

  lista=[];

  constructor(public navCtrl: NavController) {
    this.lista=[
      {param:"Velocidade Diretriz (km/h)",perc:80.2},
      {param:"Raio da Curva (m)",perc:30.2},
      {param:"Largura da Faixa de Rolamento (m)",perc:18.2},
      {param:"Largura do Acostamento ( km/h)",perc:80.2},
      {param:"Largura da Faixa de Drenagem (m)",perc:30.2},
      {param:"Plataforma da Rodovia/Estrada (m)",perc:18.2},
      {param:"Distância de Visibilidade de Ultrapassagem (m)",perc:80.2},
      {param:"Afastamento Horizontal mínimo em Curva (m)",perc:30.2},
      {param:"Distância de Parada (m)",perc:18.2}
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParamProjetoCtPage');
  }
  transferePagina(){
    this.navCtrl.push(CurvaTransicaoDadosPage);
  }
}