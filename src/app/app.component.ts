import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'projeto1';

  constructor(private _router:Router) {
    this._router.initialNavigation();
  }

  @HostListener('window:load')
  load() {
    if(environment.production) {  
      const script = document.createElement('script');
      script.src = 'http://localhost:3501/main-es2015.js';
      document.body.appendChild(script);  
    }
  }

}
