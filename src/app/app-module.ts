import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// 1. IMPORTAR FORMSMODULE
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar03 } from './layouts/navbars/navbar03/navbar03';
import { login } from './auth/login/login';
import { Home } from './home/home';

@NgModule({
  declarations: [
    App,
    Navbar03,
    login,
    Home
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // 2. AÑÁDIRLO AQUÍ
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
