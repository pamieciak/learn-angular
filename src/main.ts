import { enableProdMode, importProvidersFrom } from '@angular/core';
import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
// import { ClickService } from './app/shared/click.service';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(
  AppComponent,
  {
    providers: [importProvidersFrom(AppRoutingModule)],
  }
  // {providers: [ClickService],} można tak deklarowac globalnie serwisy, ale lepiej provideIn root bezpośrednio w nim
);
