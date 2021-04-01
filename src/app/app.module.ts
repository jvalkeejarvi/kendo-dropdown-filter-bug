import { ElementRef, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import 'hammerjs';
import '@progress/kendo-ui';

import { POPUP_CONTAINER } from '@progress/kendo-angular-popup';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { EnerKeyModule } from './app.module.ajs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    UpgradeModule,
    BrowserModule,
    AppRoutingModule,
    DropDownsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ChartsModule,
  ],
  providers: [
    { provide: POPUP_CONTAINER, useFactory: (): ElementRef => ({ nativeElement: document.body }) }
  ],
})
export class AppModule {
  public constructor(private upgrade: UpgradeModule) {
  }

  public ngDoBootstrap(): void {
    this.upgrade.bootstrap(document.body, [EnerKeyModule.name], { strictDi: true });
  }
}
