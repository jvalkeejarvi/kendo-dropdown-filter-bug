import { Component } from '@angular/core';
import { DropDownFilterSettings } from '@progress/kendo-angular-dropdowns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kendo-dropdowns-test';

  public readonly filterSettings: DropDownFilterSettings = {
    caseSensitive: false,
    operator: 'contains'
  };

  public model: any = null;

  public readonly data: { id: number, name: string }[] = [
    { id: 1, name: 'item1' },
    { id: 2, name: 'item2' },
    { id: 3, name: 'item3' },
    { id: 4, name: 'item4' },
    { id: 5, name: 'item5' },
    { id: 6, name: 'item6' },
    { id: 7, name: 'item7' },
    { id: 8, name: 'item8' },
    { id: 9, name: 'item9' },
    { id: 10, name: 'item10' },
    { id: 11, name: 'item11' },
    { id: 12, name: 'item12' },
    { id: 13, name: 'item13' },
    { id: 14, name: 'item14' },
    { id: 15, name: 'item15' },
    { id: 16, name: 'item16' },
    { id: 17, name: 'item17' },
    { id: 18, name: 'item18' },
  ]


  public valueChange(id: number): void {
    console.log(id);
  }
}
