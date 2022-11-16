import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClickService {
  registerClick() {
    console.log('clicked');
  }
}
