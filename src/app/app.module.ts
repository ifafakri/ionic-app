import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage-angular';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {AgmCoreModule} from '@agm/core';
import { Camera } from '@ionic-native/camera/ngx';
import{ SQLite} from '@ionic-native/sqlite/ngx';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {AngularFireModule} from '@angular/fire/compat';
import {environment} from '../environments/environment';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),BrowserModule, IonicModule.forRoot(),IonicStorageModule.forRoot(), AppRoutingModule,AgmCoreModule.forRoot({
    apiKey: 'AIzaSyCcCCSotPD9GXxNLQz3teHZbi6XTKzazIg',
    libraries: ['places']
    }),HttpClientModule],
  providers: [Geolocation,Camera,SQLite,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
