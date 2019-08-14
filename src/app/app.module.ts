import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routingModule } from './app.routing';
import { HttpClientModule, HttpClient, HttpClientJsonpModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './app/navigation/navigation.component';
import { TheCommunityComponent } from './app/views/the-community/the-community.component';
import { HomeDesignComponent } from './app/views/home-design/home-design.component';
import { GalleryComponent } from './app/views/gallery/gallery.component';
import { TheBuilderComponent } from './app/views/the-builder/the-builder.component';
import { RegisterComponent } from './app/views/register/register.component';
import { HomeComponent } from './app/views/home/home.component';
import { SeriesComponent } from './app/views/home-designs/series/series.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TheCommunityComponent,
    HomeDesignComponent,
    GalleryComponent,
    TheBuilderComponent,
    RegisterComponent,
    HomeComponent,
    SeriesComponent,
  ],
  imports: [
    BrowserModule,
    routingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
