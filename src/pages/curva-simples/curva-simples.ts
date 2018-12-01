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

  INPUTvelDiretriz: any;
  velDiretriz: any;
  tipoRelevo: any;
  classeProj: any;
  larguraRolamento : any;
  larguraAcostamento: any;
  larguraDrenagem: any = 1;
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
  distVisibilidadeUltraTabela: any;
  distVisibilidadeUltraCalculado: any;
  distVisibilidadeUltraMaior: any;
  afastamentoHorizontalMinCurva: any;
  raioMinCurva: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  calculaVelocidadeDiretriz(){
    if (this.INPUTvelDiretriz === undefined) {
      if((this.tipoRelevo == "Plano") && (this.classeProj == 0)){
        this.velDiretriz = 120;
      }
      
      if((this.tipoRelevo == "Ondulado") && (this.classeProj == 0)){
        this.velDiretriz = 100;
      }

      if((this.tipoRelevo == "Montanhoso") && (this.classeProj == 0)){
        this.velDiretriz = 80;
      }

      if((this.tipoRelevo == "Plano") && (this.classeProj == 1)){
        this.velDiretriz = 100;
      }

      if((this.tipoRelevo == "Ondulado") && (this.classeProj == 1)){
        this.velDiretriz = 80;
      }

      if((this.tipoRelevo == "Montanhoso") && (this.classeProj == 1)){
        this.velDiretriz = 60;
      }

      if((this.tipoRelevo == "Plano") && (this.classeProj == 2)){
        this.velDiretriz = 100;
      }

      if((this.tipoRelevo == "Ondulado") && (this.classeProj == 2)){
        this.velDiretriz = 70;
      }

      if((this.tipoRelevo == "Montanhoso") && (this.classeProj == 2)){
        this.velDiretriz = 50;
      }

      if((this.tipoRelevo == "Plano") && (this.classeProj == 3)){
        this.velDiretriz = 80;
      }

      if((this.tipoRelevo == "Ondulado") && (this.classeProj == 3)){
        this.velDiretriz = 60;
      }

      if((this.tipoRelevo == "Montanhoso") && (this.classeProj == 3)){
        this.velDiretriz = 40;
      }

      if((this.tipoRelevo == "Plano") && (this.classeProj == 4)){
        this.velDiretriz = 70;
      }

      if((this.tipoRelevo == "Ondulado") && (this.classeProj == 4)){
        this.velDiretriz = 50;
      }

      if((this.tipoRelevo == "Montanhoso") && (this.classeProj == 4)){
        this.velDiretriz = 40;
      }
    }else{
      this.velDiretriz = this.INPUTvelDiretriz;
    }
  }

  larguraFaixaRolamento(){
    if(this.tipoRelevo == "Plano" && this.classeProj == 0){
      this.larguraRolamento = 3.75;
    }
  
    if(this.tipoRelevo == "Ondulado" && this.classeProj == 0){
      this.larguraRolamento = 3.75;
    }
  
    if(this.tipoRelevo == "Montanhoso" && this.classeProj == 0){
      this.larguraRolamento = 3.6;
    }
  
    if(this.tipoRelevo == "Plano" && this.classeProj == 1){
      this.larguraRolamento = 3.6;
    }
  
    if(this.tipoRelevo == "Ondulado" && this.classeProj == 1){
      this.larguraRolamento = 3.6;
    }
  
    if(this.tipoRelevo == "Montanhoso" && this.classeProj == 1){
      this.larguraRolamento = 3.6;
    }
  
    if(this.tipoRelevo == "Plano" && this.classeProj == 2){
      this.larguraRolamento = 3.6;
    }
  
    if(this.tipoRelevo == "Ondulado" && this.classeProj == 2){
      this.larguraRolamento = 3.6;
    }
  
    if(this.tipoRelevo == "Montanhoso" && this.classeProj == 2){
      this.larguraRolamento = 3.5;
    }
  
    if(this.tipoRelevo == "Plano" && this.classeProj == 3){
      this.larguraRolamento = 3.6;
    }
  
    if(this.tipoRelevo == "Ondulado" && this.classeProj == 3){
      this.larguraRolamento = 3.5;
    }
  
    if(this.tipoRelevo == "Montanhoso" && this.classeProj == 3){
      this.larguraRolamento = 3.3;
    }
  
    if(this.tipoRelevo == "Plano" && this.classeProj == 4){
      this.larguraRolamento = 3.4;
    }
  
    if(this.tipoRelevo == "Ondulado" && this.classeProj == 4){
      this.larguraRolamento = 3.4;
    }
  
    if(this.tipoRelevo == "Montanhoso" && this.classeProj == 4){
      this.larguraRolamento = 3.2;
    }
  }

  larguraFaixaAcostamento(){
    if(this.tipoRelevo == "Plano" && this.classeProj == 0){
      this.larguraAcostamento = 3.5;
    }
  
    if(this.tipoRelevo == "Ondulado" && this.classeProj == 0){
      this.larguraAcostamento = 3;
    }
  
    if(this.tipoRelevo == "Montanhoso" && this.classeProj == 0){
      this.larguraAcostamento = 3;
    }
  
    if(this.tipoRelevo == "Plano" && this.classeProj == 1){
      this.larguraAcostamento = 3.5;
    }
  
    if(this.tipoRelevo == "Ondulado" && this.classeProj == 1){
      this.larguraAcostamento = 2.5;
    }
  
    if(this.tipoRelevo == "Montanhoso" && this.classeProj == 1){
      this.larguraAcostamento = 3.5;
    }
  
    if(this.tipoRelevo == "Plano" && this.classeProj == 2){
      this.larguraAcostamento = 3;
    }
  
    if(this.tipoRelevo == "Ondulado" && this.classeProj == 2){
      this.larguraAcostamento = 2.5;
    }
  
    if(this.tipoRelevo == "Montanhoso" && this.classeProj == 2){
      this.larguraAcostamento = 2;
    }
  
    if(this.tipoRelevo == "Plano" && this.classeProj == 3){
      this.larguraAcostamento = 2.5;
    }
  
    if(this.tipoRelevo == "Ondulado" && this.classeProj == 3){
      this.larguraAcostamento = 2;
    }
  
    if(this.tipoRelevo == "Montanhoso" && this.classeProj == 3){
      this.larguraAcostamento = 2;
    }
  
    if(this.tipoRelevo == "Plano" && this.classeProj == 4){
      this.larguraAcostamento = 2;
    }
  
    if(this.tipoRelevo == "Ondulado" && this.classeProj == 4){
      this.larguraAcostamento = 1.7;
    }
  
    if(this.tipoRelevo == "Montanhoso" && this.classeProj == 4){
      this.larguraAcostamento = 1.4;
    }
  }

  plataformaRodoviaEstrada(){
    if (this.tipoPista == "Simples"){
      this.platRodoviaEstrada = (2 * ( this.larguraRolamento + this.larguraAcostamento + this.larguraDrenagem ));
    }
    
    if (this.tipoPista == "Simples e Dupla"){
      this.platRodoviaEstrada = (2 * (this.larguraAcostamento + this.larguraDrenagem)) + (3 * this.larguraRolamento);
    }
    
    
    if (this.tipoPista == "Dupla"){
      this.platRodoviaEstrada = (2 * (this.larguraAcostamento + this.larguraDrenagem)) + (4 * this.larguraRolamento);
    }    
  }

  velocidadeMedia(){
    if ( this.visibilidadeQualidade == "Recomendada" ){
	
      if (this.velDiretriz == 70){
        this.velMedia = 62 ;
      }
    
      if (this.velDiretriz == 30){
        this.velMedia = 30;
      }
    
      if (this.velDiretriz == 40){
        this.velMedia = 38 ;
      }
    
      if (this.velDiretriz == 50){
        this.velMedia = 46 ;
      }
    
      if (this.velDiretriz == 60){
        this.velMedia = 54 ;
      }
    
      if (this.velDiretriz == 80){
        this.velMedia = 71 ;
      }
    
      if (this.velDiretriz == 90){
        this.velMedia = 79 ;
      }
    
      if (this.velDiretriz == 100){
        this.velMedia = 86 ;
      }
    
      if (this.velDiretriz == 120){
        this.velMedia = 98 ;
      }
    
    }else{
         this.velMedia = this.velDiretriz;
    }    
  }

  calcularfCurvaTransicao(){
    if (this.visibilidadeQualidade == "Recomendada"){
	
      if (this.velDiretriz == 70){
        this.fCurvaTransicao = 0.32;	
      }
      if (this.velDiretriz == 30){
        this.fCurvaTransicao = 0.4;	
      }
      if (this.velDiretriz == 40){
        this.fCurvaTransicao = 0.38;	
      }
      if (this.velDiretriz == 50){
        this.fCurvaTransicao = 0.36;	
      }
      if (this.velDiretriz == 60){
        this.fCurvaTransicao = 0.34;	
      }
      if (this.velDiretriz == 80){
        this.fCurvaTransicao = 0.31;	
      }
      if (this.velDiretriz == 90){
        this.fCurvaTransicao = 0.3;	
      }
      if (this.velDiretriz == 100){
        this.fCurvaTransicao = 0.3;	
      }
      if (this.velDiretriz == 120){
        this.fCurvaTransicao = 0.28;	
      }
    }else{
      if (this.velDiretriz == 70){
        this.fCurvaTransicao = 0.31;	
      }
      if (this.velDiretriz == 30){
        this.fCurvaTransicao = 0.4;	
      }
      if (this.velDiretriz == 40){
        this.fCurvaTransicao = 0.37;	
      }
      if (this.velDiretriz == 50){
        this.fCurvaTransicao = 0.35;	
      }
      if (this.velDiretriz == 60){
        this.fCurvaTransicao = 0.33;	
      }
      if (this.velDiretriz == 80){
        this.fCurvaTransicao = 0.3;	
      }
      if (this.velDiretriz == 90){
        this.fCurvaTransicao = 0.29;	
      }
      if (this.velDiretriz == 100){
        this.fCurvaTransicao = 0.28;	
      }
      if (this.velDiretriz == 120){
        this.fCurvaTransicao = 0.25;	
      }
    }
  }

  calculoDistanciaParada(){
    if (this.visibilidadeQualidade == "Recomendada"){
      if (this.tipoInclinacao == "Descendente") {
        this.distParada = (0.7 * this.velMedia) + ((this.velMedia * this.velMedia) / (255 * (((this.inclinacao / 100) * -1) + this.fCurvaTransicao)));
      }else{
        this.distParada = (0.7 * this.velMedia) + ((this.velMedia * this.velMedia) / (255 * ((this.inclinacao / 100) + this.fCurvaTransicao)));
      }
    
    }else{
      if (this.tipoInclinacao == "Descendente") {
        this.distParada = (0.7 * this.velDiretriz) + ((this.velDiretriz * this.velDiretriz) / (255 * (((this.inclinacao / 100) * -1) + this.fCurvaTransicao)));
      }else{
        this.distParada = (0.7 * this.velDiretriz) + ((this.velDiretriz * this.velDiretriz) / (255 * ((this.inclinacao / 100) + this.fCurvaTransicao)));
      }	
    }
  }

  calculovarH15Plan2(){

    if(this.velDiretriz == 30){
      this.H15Plan2 = 1.3;
    }
    if(this.velDiretriz == 40){
      this.H15Plan2 = 1.2;
    }
    if(this.velDiretriz == 50){
      this.H15Plan2 = 1.1;
    }
    if(this.velDiretriz == 60){
      this.H15Plan2 = 1;
    }
    if(this.velDiretriz == 70){
      this.H15Plan2 = 0.9;
    }
    if(this.velDiretriz == 80){
      this.H15Plan2 = 0.8;
    }
    if(this.velDiretriz == 90){
      this.H15Plan2 = 0.7;
    }
    if(this.velDiretriz == 100){
      this.H15Plan2 = 0.6;
    }
    if(this.velDiretriz == 110){
      this.H15Plan2 = 0.5;
    }
    if(this.velDiretriz == 120){
      this.H15Plan2 = 0.4;
    }
    if(this.velDiretriz == 130){
      this.H15Plan2 = 0.3;
    }
    if(this.velDiretriz == 140){
      this.H15Plan2 = 0.2;
    }
    if(this.velDiretriz == 150){
      this.H15Plan2 = 0.1;
    }
  }

  calculodistVisibilidadeUltraTabela(){
    if(this.velDiretriz == 30){
      this.distVisibilidadeUltraTabela = 180;
    }
    if(this.velDiretriz == 40){
      this.distVisibilidadeUltraTabela = 270;
    }
    if(this.velDiretriz == 50){
      this.distVisibilidadeUltraTabela = 350;
    }
    if(this.velDiretriz == 60){
      this.distVisibilidadeUltraTabela = 420;
    }
    if(this.velDiretriz == 70){
      this.distVisibilidadeUltraTabela = 490;
    }
    if(this.velDiretriz == 80){
      this.distVisibilidadeUltraTabela = 560;
    }
    if(this.velDiretriz == 90){
      this.distVisibilidadeUltraTabela = 620;
    }
    if(this.velDiretriz == 100){
      this.distVisibilidadeUltraTabela = 680;
    }
    if(this.velDiretriz == 110){
      this.distVisibilidadeUltraTabela = 730;
    }
    if(this.velDiretriz == 120){
      this.distVisibilidadeUltraTabela = 800;
    }
  }
  
  calculoDistVisibilidadeUltraCalculado(){
  
    if(this.tipoPista == "Dupla"){
      this.distVisibilidadeUltraCalculado = this.velDiretriz * (1.25+(0.2*(Math.sqrt(this.velDiretriz/this.H15Plan2))));
    }else{
      this.distVisibilidadeUltraCalculado = this.velDiretriz * (1.25+(0.5*(Math.sqrt(this.velDiretriz/this.H15Plan2))));
    }
  }
  
  comparaDistVisibilidade(){
    if(this.distVisibilidadeUltraCalculado > this.distVisibilidadeUltraTabela){
      this.distVisibilidadeUltraMaior = this.distVisibilidadeUltraCalculado;
    }else{
      this.distVisibilidadeUltraMaior = this.distVisibilidadeUltraTabela;
    }
  }

  calculoAfastamentoHorizontalMinCurva(){
    this.afastamentoHorizontalMinCurva = ((this.distParada * this.distParada) / (8 * this.raioMinCurva));
  }

  calculoRaioMin(){
    if(this.velDiretriz == 30){
      this.raioMinCurva = 170;		
    }
    if(this.velDiretriz == 40){
      this.raioMinCurva = 300;	
    }
    if(this.velDiretriz == 50){
      this.raioMinCurva = 500;		
    }
    if(this.velDiretriz == 60){
      this.raioMinCurva = 700;		
    }
    if(this.velDiretriz == 70){
      this.raioMinCurva = 950;		
    }
    if(this.velDiretriz == 80){
      this.raioMinCurva = 1200;		
    }
    if(this.velDiretriz == 90){
      this.raioMinCurva = 1550;		
    }
    if(this.velDiretriz >= 100){
      this.raioMinCurva = 1900		
    }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CurvaSimplesPage');
  }

  transferePagina(){
    this.calculaVelocidadeDiretriz();
    this.larguraFaixaRolamento();
    this.larguraFaixaAcostamento();
    this.plataformaRodoviaEstrada();
    this.velocidadeMedia();
    this.calcularfCurvaTransicao();
    this.calculoDistanciaParada();
    this.calculovarH15Plan2();
    this.calculoDistVisibilidadeUltraCalculado();
    this.calculodistVisibilidadeUltraTabela();
    this.comparaDistVisibilidade();
    this.calculoRaioMin();
    this.calculoAfastamentoHorizontalMinCurva();

    this.navCtrl.push(ParamProjetoCsPage, {
      velDiretriz: this.velDiretriz,
      tipoRelevo: this.tipoRelevo,
      classeProj: this.classeProj,
      larguraRolamento : this.larguraRolamento,
      larguraAcostamento: this.larguraAcostamento,
      larguraDrenagem: this.larguraDrenagem,
      tipoPista: this.tipoPista,
      platRodoviaEstrada: this.platRodoviaEstrada,
      distVisibilidadeParada: this.distVisibilidadeParada,
      tipoInclinacao: this.tipoInclinacao,
      visibilidadeQualidade: this.visibilidadeQualidade,
      inclinacao: this.inclinacao,
      velMedia: this.velMedia,
      fCurvaTransicao: this.fCurvaTransicao,
      distParada: this.distParada,
      H15Plan2: this.H15Plan2,
      distVisibilidadeUltraMaior: this.distVisibilidadeUltraMaior,
      afastamentoHorizontalMinCurva: this.afastamentoHorizontalMinCurva,
      raioMinCurva: this.raioMinCurva,
    });
  }

}
