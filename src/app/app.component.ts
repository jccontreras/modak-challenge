import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { LocalStorageService } from './common/service/local-storage/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  
  title = "modal-challenge";

  constructor(private _translate: TranslateService, private _localStorage: LocalStorageService) {
    if (this._localStorage.get('lang') == null)
      this._localStorage.set('lang', this._translate.getBrowserLang());
    
    this._translate.setDefaultLang(this._localStorage.get('lang'));
    this._translate.use(this._localStorage.get('lang'));
  }
}
