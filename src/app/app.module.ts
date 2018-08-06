import { CurvaSimplesPage } from './../pages/curva-simples/curva-simples';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ParamProjetoCsPage } from '../pages/param-projeto-cs/param-projeto-cs';
import { CurvaSimplesDadosPage } from '../pages/curva-simples-dados/curva-simples-dados';
import { CurvaSimplesDadosFinaisPage } from '../pages/curva-simples-dados-finais/curva-simples-dados-finais';
import { CurvaTransicaoPage } from '../pages/curva-transicao/curva-transicao';
import { ParamProjetoCtPage } from '../pages/param-projeto-ct/param-projeto-ct';
import { CurvaTransicaoDadosPage } from '../pages/curva-transicao-dados/curva-transicao-dados';
import { CurvaTransicaoDadosFinaisPage } from '../pages/curva-transicao-dados-finais/curva-transicao-dados-finais';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CurvaSimplesPage,
    ParamProjetoCsPage,
    CurvaSimplesDadosPage,
    CurvaSimplesDadosFinaisPage,
    CurvaTransicaoPage,
    ParamProjetoCtPage,
    CurvaTransicaoDadosPage,
    CurvaTransicaoDadosFinaisPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CurvaSimplesPage,
    ParamProjetoCsPage,
    CurvaSimplesDadosPage,
    CurvaSimplesDadosFinaisPage,
    CurvaTransicaoPage,
    ParamProjetoCtPage,
    CurvaTransicaoDadosPage,
    CurvaTransicaoDadosFinaisPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
