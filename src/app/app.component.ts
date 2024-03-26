import { Component, HostBinding, effect, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  darkmode = signal<boolean>(
    JSON.parse(window.localStorage.getItem('darkmode') ?? 'false')
  );

  constructor() {
    effect(() => {
      window.localStorage.setItem('darkmode', JSON.stringify(this.darkmode()))
    })
  }

  @HostBinding('class.dark') get mode() {
     return this.darkmode()
  }
}
