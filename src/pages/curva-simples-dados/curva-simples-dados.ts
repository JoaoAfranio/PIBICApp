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
  velDiretriz: any;
  tipoRelevo: any;
  classeProj: any;
  larguraRolamento : any;
  larguraAcostamento: any;
  larguraDrenagem: any;
  tipoPista: any;
  platRodoviaEstrada: any;
  distVisibilidadeParada: any;
  tipoInclinacao: any;
  visibilidadeQualidade: any;
  inclinacao: any;
  velMedia: any;
  fCurvaTransicao: any;
  distParada: any;
  H15Plan2: any;
  distVisibilidadeUltraMaior: any;
  afastamentoHorizontalMinCurva: any;
  raioMinCurva: any;

  anguloDeflexao: any;
  PIEstaca: any;
  Estaqueamento: any;
  raio: any;

  PI: any;
  D: any;
  AC: any;
  T: any;
  E: any;
  C: any;
  G: any;
  defTang: any;
  defMetro: any;
  PC: any;
  PT: any;

  estacaInicial: any;
  estacaIntersecao: any;
  estacaFinal: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.velDiretriz = navParams.get('velDiretriz');
    this.tipoRelevo = navParams.get('tipoRelevo');
    this.classeProj = navParams.get('classeProj');
    this.larguraRolamento = navParams.get('larguraRolamento');
    this.larguraAcostamento = navParams.get('larguraAcostamento');
    this.larguraDrenagem = navParams.get('larguraDrenagem');
    this.tipoPista = navParams.get('tipoPista');
    this.platRodoviaEstrada = navParams.get('platRodoviaEstrada');
    this.distVisibilidadeParada = navParams.get('distVisibilidadeParada');
    this.tipoInclinacao = navParams.get('tipoInclinacao');
    this.visibilidadeQualidade = navParams.get('visibilidadeQualidade');
    this.inclinacao = navParams.get('inclinacao');
    this.velMedia = navParams.get('velMedia');
    this.fCurvaTransicao = navParams.get('fCurvaTransicao');
    this.distParada = navParams.get('distParada');
    this.H15Plan2 = navParams.get('H15Plan2');
    this.distVisibilidadeUltraMaior = navParams.get('distVisibilidadeUltraMaior');
    this.afastamentoHorizontalMinCurva = navParams.get('afastamentoHorizontalMinCurva');
    this.raioMinCurva = navParams.get('raioMinCurva');


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CurvaSimplesDadosPage');
  }

  calculaDesenvolvimento(){
    this.D = (3.14159265358979 * this.raio * this.anguloDeflexao) / 180;
  }

  calculoTangenteExterna(){
    this.T = (Math.tan(((this.anguloDeflexao/2) * 3.14159265358979) / 180)) * this.raio;
  }

  calculoAfastamento(){
    this.E = this.raio * ((1/((Math.cos((((this.anguloDeflexao/2) * 3.14159265358979) / 180)))))-1);
  }

  calculoGrauDaCurvaPCorda(){
    this.G = ((180 * this.Estaqueamento) / (3.14159265358979 * this.raio));
  }

  calculoDefTangente(){
    this.defTang = this.G / 2;
  }

  calculoDefMetro(){
    this.defMetro = (this.defTang/(2 * this.Estaqueamento));
  }

  
  calculoEstacaInicial(){
    this.estacaInicial = (Math.round(this.PC / this.Estaqueamento)) + " + " + (((this.PC/this.Estaqueamento) - (Math.round(this.PC/this.Estaqueamento))) * 20).toFixed(2) + "m";
  }

  calculoEstacaIntersecao(){
    this.estacaIntersecao = (Math.round(this.PI / this.Estaqueamento)) + " + " + (((this.PI/this.Estaqueamento) - (Math.round(this.PI/this.Estaqueamento))) * 20).toFixed(2) + "m";
  }

  calculoEstacaFinal(){
    this.estacaFinal = (Math.round(this.PT / this.Estaqueamento)) + " + " + (((this.PT/this.Estaqueamento) - (Math.round(this.PT/this.Estaqueamento))) * 20).toFixed(2) + "m";
  }
  
  calculoPontoInicial(){
    this.PC = this.PI - this.T;
  }

  calculoPontoFinal(){
    this.PT = this.PC + this.D;
  }
  setValues(){
    this.PI = this.PIEstaca;
    this.AC = this.anguloDeflexao;
    this.C = this.Estaqueamento;
  }
  transferePagina(){

    this.calculaDesenvolvimento();
    this.calculoTangenteExterna();
    this.calculoAfastamento();
    this.calculoGrauDaCurvaPCorda();
    this.calculoDefTangente();
    this.calculoDefMetro();
    this.setValues();
    this.calculoPontoInicial();
    this.calculoPontoFinal();
    this.calculoEstacaInicial();
    this.calculoEstacaIntersecao();
    this.calculoEstacaFinal();
    
    this.navCtrl.push(CurvaSimplesDadosFinaisPage, {

      anguloDeflexao: this.anguloDeflexao,
      PIEstaca: this.PIEstaca,
      Estaqueamento: this.Estaqueamento,
      raio: this.raio,

      PI: this.PI,
      D: this.D,
      AC: this.AC,
      T: this.T,
      E: this.E,
      C: this.C,
      G: this.G,
      defTang: this.defTang,
      defMetro: this.defMetro,
      PC: this.PC,
      PT: this.PT,
    
      estacaInicial: this.estacaInicial,
      estacaIntersecao: this.estacaIntersecao,
      estacaFinal: this.estacaFinal
      
    });
  }

}
