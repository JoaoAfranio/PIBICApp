import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the CurvaSimplesDadosFinaisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-curva-simples-dados-finais',
  templateUrl: 'curva-simples-dados-finais.html',
})
export class CurvaSimplesDadosFinaisPage {

  lista=[];
  lista2=[];

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
    this.anguloDeflexao = navParams.get('anguloDeflexao');
    this.PIEstaca = navParams.get('PIEstaca');
    this.Estaqueamento = navParams.get('Estaqueamento');
    this.raio = navParams.get('raio');

    this.PI = navParams.get('PI');
    this.D = navParams.get('D');
    this.AC = navParams.get('AC');
    this.T = navParams.get('T');
    this.E = navParams.get('E');
    this.C = navParams.get('C');
    this.G = navParams.get('G');
    this.defTang = navParams.get('defTang');
    this.defMetro = navParams.get('defMetro');
    this.PC = navParams.get('PC');
    this.PT = navParams.get('PT');

    this.estacaInicial = navParams.get('estacaInicial');
    this.estacaIntersecao = navParams.get('estacaIntersecao');
    this.estacaFinal = navParams.get('estacaFinal');


    this.lista=[
      {param:"PC = Ponto Inicial (m)",perc:this.PC.toFixed(2)},
      {param:"PT = Ponto Final (m)",perc:this.PT.toFixed(2)},
      {param:"PI = Ponto de Interseção das Tangentes (m)",perc:this.PI},
      {param:"D = Desenvolvimento (m)",perc:this.D.toFixed(2)},
      {param:"AC = Ângulo Central (º)",perc:this.AC},
      {param:"R = Raio (m)",perc:this.raio},
      {param:"T = Tangente Externa (m)",perc:this.T.toFixed(2)},
      {param:"E = Afastamento (m)",perc:this.E.toFixed(2)},
      {param:"C = Corda (m)",perc:this.C},
      {param:"G = Grau da Curva p/ corda escolhida",perc:this.G.toFixed(2)},
      {param:"Deflexão sobre a tangente (º)",perc:this.defTang.toFixed(2)},
      {param:"Deflexão / metro (º)",perc:this.defMetro.toFixed(2)},
      
    ];

    this.lista2=[
      {param:"Eestaca inicial",perc:this.estacaInicial},
      {param:"Estaca de interseção",perc:this.estacaIntersecao},
      {param:"Estaca final",perc:this.estacaFinal},
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CurvaSimplesDadosFinaisPage');
  }

  transferePagina(){
    this.navCtrl.setRoot(HomePage);
    
  }
}
