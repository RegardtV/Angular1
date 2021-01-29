import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { UserModule } from './user/user.module';
import { AppComponent } from './app.component';
import { AdvertModule } from './advert/advert.module';
import { WelcomeComponent } from './home/welcome.component';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    UserModule,
    AdvertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
