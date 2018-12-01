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
  raio: any;
  INPUTraio: any;
  areaUrbanizada: any;
  ocupacaoSolo: any;

  anguloDeflexao: any;
  PIEstaca: any;
  Estaqueamento: any;


  lista=[];

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
    this.INPUTraio = navParams.get('INPUTraio');
    this.areaUrbanizada = navParams.get('areaUrbanizada');
    this.ocupacaoSolo = navParams.get('ocupacaoSolo');
    
    this.raio = this.INPUTraio;
    
    this.lista=[
      {param:"Velocidade Diretriz (km/h)",perc:this.velDiretriz},
      {param:"Raio da Curva (m)",perc:this.raio},
      {param:"Largura da Faixa de Rolamento (m)",perc:this.larguraRolamento},
      {param:"Largura do Acostamento ( km/h)",perc:this.larguraAcostamento},
      {param:"Largura da Faixa de Drenagem (m)",perc:this.larguraDrenagem},
      {param:"Plataforma da Rodovia/Estrada (m)",perc:this.platRodoviaEstrada},
      {param:"Distância de Visibilidade de Ultrapassagem (m)",perc:this.distVisibilidadeUltraMaior.toFixed(2)},
      {param:"Afastamento Horizontal mínimo em Curva (m)",perc:this.afastamentoHorizontalMinCurva.toFixed(2)},
      {param:"Distância de Parada (m)",perc:this.distParada.toFixed(2)}
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParamProjetoCsPage');
    console.log("Velocidade media:" + this.velMedia);
  }
  transferePagina(){
    this.navCtrl.push(CurvaTransicaoDadosPage, {
      raio: this.raio,
      velDiretriz: this.velDiretriz,
      areaUrbanizada: this.areaUrbanizada,
      ocupacaoSolo: this.ocupacaoSolo,
      tipoRelevo: this.tipoRelevo,
      classeProj: this.classeProj,
      larguraRolamento: this.larguraRolamento

    });
  }

}
