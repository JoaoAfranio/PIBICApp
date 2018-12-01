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
  raio: any;
  TS: any;
  SC: any;
  CS: any;
  ST: any;
  PIEstaca: any;
  Xs: any;
  Ys: any;
  TT: any;
  k: any;
  p: any;
  anguloTransicao: any;
  anguloCentralTrechoCircular: any;
  deflexaoTangente: any;
  D: any;
  Ls: any;
  EDistPiACurva: any;

  PIEstacaIntersecao: any;
  TSEstacaInicial: any;
  SCEspiralCircular: any;
  CSEspiralCircular: any;
  STEspiralFinal: any;

  lista=[];
  lista2=[];
  
  constructor(public navCtrl: NavController,  public navParams: NavParams) {
    this.raio = navParams.get('raio');
    this.TS = navParams.get('TS');
    this.SC = navParams.get('SC');
    this.CS = navParams.get('CS');
    this.ST = navParams.get('ST');
    this.PIEstaca = navParams.get('PIEstaca');
    this.Xs = navParams.get('Xs');
    this.Ys = navParams.get('Ys');
    this.TT = navParams.get('TT');
    this.k = navParams.get('k');
    this.p = navParams.get('p');
    this.anguloTransicao = navParams.get('anguloTransicao');
    this.anguloCentralTrechoCircular = navParams.get('anguloCentralTrechoCircular');
    this.deflexaoTangente = navParams.get('deflexaoTangente');
    this.D = navParams.get('D');
    this.Ls = navParams.get('Ls');
    this.EDistPiACurva = navParams.get('EDistPiACurva');
    this.PIEstacaIntersecao = navParams.get('PIEstacaIntersecao');
    this.TSEstacaInicial = navParams.get('TSEstacaInicial');
    this.SCEspiralCircular = navParams.get('SCEspiralCircular');
    this.CSEspiralCircular = navParams.get('CSEspiralCircular');
    this.STEspiralFinal = navParams.get('STEspiralFinal');


    this.lista=[
      {param:"RC = Raio da curva circular (m)",perc:this.raio},
      {param:"TS = Ponto inicial do trecho de transição (m)",perc:this.TS.toFixed(2)},
      {param:"SC = Espiral circular (m)",perc:this.SC.toFixed(2)},
      {param:"CS = Circular espiral",perc:this.CS.toFixed(2)},
      {param:"ST = Espiral tangente",perc:this.ST.toFixed(2)},
      {param:"PI = Ponto de interseção das tangentes (m)",perc:this.PIEstaca},
      {param:"Xs = Abscissa dos pontos SC e CS (m)",perc:this.Xs.toFixed(2)},
      {param:"Ys = Ordenada dos pontos SC e CS (m)",perc:this.Ys.toFixed(2)},
      {param:"TT = Tangente total (m)",perc:this.TT.toFixed(2)},
      {param:"K = Abscissa do centro O'",perc:this.k.toFixed(2)},
      {param:"P = Afastamento da curva circular (m)",perc:this.p.toFixed(2)},
      {param:"θs = Ângulo de transição (rad)",perc:this.anguloTransicao},
      {param:"Φ = Ângulo central do trecho circular (rad)",perc:this.anguloCentralTrechoCircular.toFixed(2)},
      {param:"AC = Ângulo central (°)",perc:this.deflexaoTangente},
      {param:"Δ = Deflexão das tangentes (°)",perc:this.deflexaoTangente},
      {param:"D = Desenvolvimento do trecho circular (m)",perc:this.D.toFixed(2)},
      {param:"Ls = Comprimento do Trecho de Transição (m)",perc:this.Ls},
      {param:"E = Distância do PI à curva circular (m)",perc:this.EDistPiACurva.toFixed(2)}
      
    ];

    this.lista2=[
      {param:"PI (estaca de interseção)",perc:this.PIEstacaIntersecao},
      {param:"TS (estaca inicial)",perc:this.TSEstacaInicial},
      {param:"SC (espiral circular)",perc:this.SCEspiralCircular},
      {param:"CS (circular espiral)",perc:this.CSEspiralCircular},
      {param:"ST (estaca final)",perc:this.STEspiralFinal},
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CurvaTransicaoDadosFinaisPage');
  }

  transferePagina(){
    this.navCtrl.setRoot(HomePage);
    
  }
}
