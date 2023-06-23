import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { QueryParamsHandling } from '@angular/router';
// import { TabMenuModule } from 'primeng/tabmenu';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
// import { MenubarModule } from 'primeng/menubar';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule } from 'primeng/table';
import { HomePageComponent } from './home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RippleModule } from 'primeng/ripple';
import { Homeage1Component } from './homeage1/homeage1.component';
import { MenuModule } from 'primeng/menu';
import { SlideMenuModule } from 'primeng/slidemenu';
@NgModule({
   declarations: [
    AppComponent,
    HomePageComponent,
    Homeage1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    FileUploadModule,
    TableModule,
    HttpClientModule,
    SlideMenuModule,
    // BrowserModule,
    BrowserAnimationsModule,
    MenuModule,
    RippleModule
    // TabMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
