import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { Projeto2CompSemRota } from './web-components';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement, NgElement, WithProperties } from '@angular/elements';
import { Comp1Component } from 'src/comp1/comp1.component';
import { Comp1Module } from 'src/comp1/comp1.module';

declare global {
  interface HTMLElementTagNameMap {
      'projeto-2-comp-sem-rota':NgElement & WithProperties<Projeto2CompSemRota>
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Comp1Module
  ],
  providers: []
})
export class AppModule { 
  constructor(private _injector: Injector) {}

  ngDoBootstrap() {
    const appElement = createCustomElement(AppComponent, {injector: this._injector})
    customElements.define('projeto-1', appElement);

    const comp1 = createCustomElement(Comp1Component, {injector: this._injector})
    customElements.define('projeto-1-comp1', comp1);
  }
}
