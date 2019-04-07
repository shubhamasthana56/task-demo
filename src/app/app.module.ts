import { BrowserModule } from '@angular/platform-browser';
import {  CSPAuthenticationModule } from '@vmw-pathfinder/ng-csp-authentication';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ProductsComponent } from './products/products.component';
import { AppRoutingModule } from './app-routing.module';
import { ContentComponent } from './content/content.component';
import { ProductItemsComponent } from './product-items/product-items.component';
import { HttpClientModule } from '@angular/common/http';
import { LocatorComponent } from './locator/locator.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SubHeaderComponent,
    ProductsComponent,
    ContentComponent,
    ProductItemsComponent,
    LocatorComponent,
    
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    CSPAuthenticationModule.forRoot(environment.CSP_AUTHENTICATION_CONFIG),
    AngularFontAwesomeModule,
    FormsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
