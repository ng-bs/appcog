import { Component } from '@angular/core';
import { SettingsService } from 'settings';

@Component({
  selector: 'app-root',
  template: `<strong>Api URL: {{ settingsService.apiUrl }}</strong>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public settingsService: SettingsService) {}
}
