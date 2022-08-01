import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { interceptorProviders } from './core/interceptors';
import { CoreModule } from './core/core.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, HttpClientModule, AppRoutingModule, NgbModule, CoreModule],
    providers: [interceptorProviders],
    bootstrap: [AppComponent],
})
export class AppModule { }
