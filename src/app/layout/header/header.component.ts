import { Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { LocalStorageService } from 'src/app/common/service/local-storage/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit{

  public language = 'en';

  constructor(private _translate: TranslateService, private _localStorage: LocalStorageService) {}

  ngOnInit(): void {
    this.language = this._translate.currentLang;
  }

  changeLanguage(lang: string) {
    this._translate.use(lang);
    this.language = lang;
    this._localStorage.set('lang', lang);
  }
}
