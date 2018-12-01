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
  raio: any;
  anguloDeflexao: any;
  PIEstaca: any;
  Estaqueamento: any;
  
  velDiretriz: any;
  areaUrbanizada: any;
  ocupacaoSolo: any;
  classeProj: any;
  tipoRelevo: any;
  larguraRolamento: any;

  fMax: any;
  eMax: any;
  raioMinimo: any;
  e: any;
  CMTTEsteticoMenor80: any;
  CMTTEsteticoMaior80: any;
  CMTTEstetico: any;
  CMTTSeguranca: any;
  ComprimentoMinimoAdotado: any;
  ComprimentoLsAdotado: any;
  ComprimentoMaximoAdotado: any;
  K1: any;
  K2: any;

  Ls: any;
  anguloTransicao: any;
  Xs: any;
  Ys: any;
  k: any;
  p: any;
  TT: any;
  TS: any;
  SC: any;
  anguloCentralTrechoCircular: any;
  D: any;
  CS: any;
  ST: any;
  AC: any;
  deflexaoTangente: any;
  EDistPiACurva: any;

  PIEstacaIntersecao: any;
  TSEstacaInicial: any;
  SCEspiralCircular: any;
  CSEspiralCircular: any;
  STEspiralFinal: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.raio = navParams.get('raio');
    this.velDiretriz = navParams.get('velDiretriz');
    this.areaUrbanizada = navParams.get('areaUrbanizada');
    this.ocupacaoSolo = navParams.get('ocupacaoSolo');
    this.tipoRelevo = navParams.get('tipoRelevo');
    this.classeProj = navParams.get('classeProj');
    this.larguraRolamento = navParams.get('larguraRolamento');

    this.raio = +this.raio;

    this.anguloDeflexao = +this.anguloDeflexao;
    this.PIEstaca = +this.PIEstaca;
    this.Estaqueamento = +this.Estaqueamento;
  }

  calculafMax(){
    this.fMax = 0.19-(this.velDiretriz/1600);
  }

  calculaEMax(){
    if((this.areaUrbanizada == "Sim") && (this.ocupacaoSolo == "Não")){
      this.eMax = 6;
      }
      else if((this.areaUrbanizada == "Não") && (this.ocupacaoSolo == "Sim")){
      this.eMax = 4;
      }
      else if(((this.classeProj == 0) || (this.classeProj == 1)) && ((this.tipoRelevo == "Plano") || (this.tipoRelevo == "Ondulado"))){
      this.eMax = 10;
      }
      else if((this.classeProj == 1) && (this.tipoRelevo == "Montanhoso")){
      this.eMax = 8;
      }else{
      this.eMax = 8;
      }
  }

  calculaRaioMinimo(){
    this.raioMinimo = (this.velDiretriz * this.velDiretriz) / ((127 * ((this.eMax / 100) + this.fMax)));
  }

  calculaE(){
    this.e = this.eMax * (((2 * this.raioMinimo) / this.raio) - (( (this.raioMinimo * this.raioMinimo) / (this.raio * this.raio) )));
  }

  calculaCMTTEsteticoMenor80(){
    this.CMTTEsteticoMenor80 = ((this.larguraRolamento * this.e) / (0.9-(0.005 * this.velDiretriz)));
  }

  calculaCMTTEsteticoMaior80(){
    this.CMTTEsteticoMaior80 = ((this.larguraRolamento  * this.e) / (0.71-(0.0026 * this.velDiretriz)));
  }

  calculaCMTTEstetico(){
    if(this.velDiretriz > 80){
      this.CMTTEstetico = this.CMTTEsteticoMenor80;
      }else{
      this.CMTTEstetico =  this.CMTTEsteticoMaior80;
      }
  }

  calculaCMTTSeguranca(){
    this.CMTTSeguranca = this.velDiretriz / 1.8;
  }

  calculaComprimentoMinimoAdotado(){
    if(this.CMTTEstetico > this.CMTTSeguranca){
      this.ComprimentoMinimoAdotado = this.CMTTEstetico;
    }else{
      this.ComprimentoMinimoAdotado = this.CMTTSeguranca;
    }
  }

  calculaK1(){
    this.K1 = 3 * this.ComprimentoMinimoAdotado;
  }

  calculaComprimentoMaximoAdotado(){
    this.ComprimentoMaximoAdotado = (this.raio * this.anguloDeflexao * 3.14159265358979) / 180;
  }

  calculaK2(){
    this.K2 = (this.ComprimentoMinimoAdotado + this.ComprimentoMaximoAdotado) / 2;
  }

  caculaComprimentoLsAdotado(){
    if((this.ComprimentoMinimoAdotado <= this.K1) && (this.K1 >= this.ComprimentoMaximoAdotado)){
			this.ComprimentoLsAdotado = this.K2;
		}else{
			this.ComprimentoLsAdotado = this.K1;
		}
  }

  calculaLs(){
    this.Ls = (20 * Math.round((this.ComprimentoLsAdotado) / 20)) + 20;
  }

  calculaAnguloTransicao(){
    this.anguloTransicao = (( this.Ls / (2 * this.raio)));
  }

  calculaXs(){
    this.Xs = this.Ls * (1 - (((this.anguloTransicao * this.anguloTransicao) / 10) + ((this.anguloTransicao * this.anguloTransicao * this.anguloTransicao * this.anguloTransicao) / 216)));
  }

  calculaYs(){
    this.Ys = this.Ls * ((this.anguloTransicao / 3) + ((this.anguloTransicao * this.anguloTransicao * this.anguloTransicao) / 42));
  }

  calculaK(){
    this.k = this.Xs - (this.raio * Math.sin(this.anguloTransicao));
  }

  calculaP(){
    this.p = this.Ys - (this.raio * (1 - (Math.cos(this.anguloTransicao))))
  }

  calculaTT(){
    this.TT =  this.k + ((this.raio + this.p) * ((Math.tan((((this.anguloDeflexao * 3.14159265358979) / 180) / 2 )))));
  }
  
  calculaTs(){
    this.TS = this.PIEstaca - this.TT;
  }

  calculaSC(){
    this.SC = this.TS + this.Ls;
  }

  calculaAnguloCentralTrechoCircular(){
    this.anguloCentralTrechoCircular =  (this.anguloDeflexao * 3.14159265358979 / 180) - (2 * this.anguloTransicao);
  }

  calculaD(){
    this.D = this.raio * this.anguloCentralTrechoCircular;
  }

  calculaCS(){
    this.CS = this.SC + this.D;
  }

  calculaST(){
    this.ST = this.CS + this.Ls;
  }

  calculaAC(){
    this.AC = this.anguloDeflexao;
  }

  calculaDeflexaoTangente(){
    this.deflexaoTangente = this.anguloDeflexao;
  }

  calculaEDistPiACurva(){
    this.EDistPiACurva = ((this.raio + this.p)) / ((Math.cos(((( this.anguloDeflexao / 2) * 3.14159265358979 ))))) - this.raio;
  }

  calculaEstacas(){
  this.PIEstacaIntersecao = (Math.round(this.PIEstaca / this.Estaqueamento)) + " + " + (((this.PIEstaca/this.Estaqueamento) - (Math.round(this.PIEstaca/this.Estaqueamento))) * 20).toFixed(2) + "m";
  this.TSEstacaInicial = (Math.round(this.TS / this.Estaqueamento)) + " + " + (((this.TS/this.Estaqueamento) - (Math.round(this.TS/this.Estaqueamento))) * 20).toFixed(2) + "m";
  this.SCEspiralCircular = (Math.round(this.SC / this.Estaqueamento)) + " + " + (((this.SC/this.Estaqueamento) - (Math.round(this.SC/this.Estaqueamento))) * 20).toFixed(2) + "m";
  this.CSEspiralCircular = (Math.round(this.CS / this.Estaqueamento)) + " + " + (((this.CS/this.Estaqueamento) - (Math.round(this.CS/this.Estaqueamento))) * 20).toFixed(2) + "m";
  this.STEspiralFinal = (Math.round(this.ST / this.Estaqueamento)) + " + " + (((this.ST/this.Estaqueamento) - (Math.round(this.ST/this.Estaqueamento))) * 20).toFixed(2) + "m";
  }





  ionViewDidLoad() {
    console.log('ionViewDidLoad CurvaTransicaoDadosPage');
  }

  transferePagina(){
    this.calculafMax();
    this.calculaEMax();
    this.calculaRaioMinimo();
    this.calculaE();
    this.calculaCMTTEsteticoMenor80();
    this.calculaCMTTEsteticoMaior80();
    this.calculaCMTTEstetico();
    this.calculaCMTTSeguranca();
    this.calculaComprimentoMinimoAdotado();
    this.calculaK1();
    this.calculaComprimentoMaximoAdotado();
    this.calculaK2();
    this.caculaComprimentoLsAdotado();

    this.calculaLs();
    this.calculaAnguloTransicao();
    this.calculaXs();
    this.calculaYs();
    this.calculaK();
    this.calculaP();
    this.calculaTT();
    this.calculaTs();
    this.calculaSC();
    this.calculaAnguloCentralTrechoCircular();
    this.calculaD();
    this.calculaCS();
    this.calculaST();
    this.calculaAC();
    this.calculaDeflexaoTangente();
    this.calculaEDistPiACurva();
    this.calculaEstacas();

    /*
    console.log("Largura do Rolamento:" + this.larguraRolamento);
    console.log("Velocidade Diretriz:" + this.velDiretriz);
    console.log("fMax:" + this.fMax);
    console.log("eMax:" + this.eMax);
    console.log("Raio Minimo:" + this.raioMinimo);
    console.log("E:" + this.e);
    console.log("CMTTEsteticoMenor80:" + this.CMTTEsteticoMenor80);
    console.log("CMTTEsteticoMaior80:" + this.CMTTEsteticoMaior80);
    console.log("CMTTEstetico:" + this.CMTTEstetico);
    console.log("CMTTSeguranca:" + this.CMTTSeguranca);
    console.log("ComprimentoMinimoAdotado:" + this.ComprimentoMinimoAdotado);
    console.log("K1:" + this.K1);
    console.log("ComprimentoMaximoAdotado:" + this.ComprimentoMaximoAdotado);
    console.log("K2:" + this.K2);
    console.log("ComprimentoLsAdotado:" + this.ComprimentoLsAdotado);
    
    console.log("Ls:" + this.Ls);
    console.log("AnguloTransicao:" + this.anguloTransicao);
    console.log("Xs:" + this.Xs);
    console.log("Ys:" + this.Ys);
    console.log("k:" + this.k);
    console.log("p:" + this.p);
    console.log("TT:" + this.TT);
    console.log("TS:" + this.TS);
    console.log("SC:" + this.SC);
    console.log("anguloCentralTrechoCircular:" + this.anguloCentralTrechoCircular);
    console.log("D:" + this.D);
    console.log("CS:" + this.CS);
    console.log("ST:" + this.ST);
    console.log("AC:" + this.AC);
    console.log("deflexaoTangente:" + this.deflexaoTangente);
    console.log("EDistPiACurva:" + this.EDistPiACurva);


    console.log("PIEstacaIntersecao:" + this.PIEstacaIntersecao);
    console.log("TSEstacaInicial:" + this.TSEstacaInicial);
    console.log("SCEspiralCircular:" + this.SCEspiralCircular);
    console.log("CSEspiralCircular:" + this.CSEspiralCircular);
    console.log("STEspiralFinal:" + this.STEspiralFinal);

  
    /*
    this.navCtrl.push(CurvaTransicaoDadosFinaisPage);
    */

   this.navCtrl.push(CurvaTransicaoDadosFinaisPage, {
    raio: this.raio,
    TS: this.TS,
    SC: this.SC,
    CS: this.CS,
    ST: this.ST,
    PIEstaca: this.PIEstaca,
    Xs: this.Xs,
    Ys: this.Ys,
    TT: this.TT,
    k: this.k,
    p: this.p,
    anguloTransicao: this.anguloTransicao,
    anguloCentralTrechoCircular: this.anguloCentralTrechoCircular,
    deflexaoTangente: this.deflexaoTangente,
    D: this.D,
    Ls: this.Ls,
    EDistPiACurva: this.EDistPiACurva,

    PIEstacaIntersecao: this.PIEstacaIntersecao,
    TSEstacaInicial: this.TSEstacaInicial,
    SCEspiralCircular: this.SCEspiralCircular,
    CSEspiralCircular: this.CSEspiralCircular,
    STEspiralFinal: this.STEspiralFinal

  });
  }
}
