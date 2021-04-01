import { IAngularStatic } from 'angular';
import { downgradeComponent } from '@angular/upgrade/static';

declare const angular: IAngularStatic;

import 'angular';
import { AppComponent } from './app.component';

export const EnerKeyModule = angular.module('EnerKey2', [])
  .controller('BodyController', BodyController)
  .directive('appRootComponent', downgradeComponent({ component: AppComponent }))
;


function BodyController() {
}
