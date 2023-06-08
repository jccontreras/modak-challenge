import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  storage: Storage;

  constructor() { 
    this.storage = window.sessionStorage;
  }

  get(key: string): any {
    if (this.storage.getItem(key) != null)
      return  JSON.parse(this.storage.getItem(key) ?? '{}');
  }

  set(key: string, value: any) {
    this.storage.setItem(key, JSON.stringify(value));
  }

  remove(key: string) {
    if (this.storage.getItem(key) != null)
      this.storage.removeItem(key);
  }
}
