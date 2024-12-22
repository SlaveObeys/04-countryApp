import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { LoaderSpinnerComponent } from './components/loader-spinner/loader-spinner.component';



@NgModule({
  declarations: [
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    LoaderSpinnerComponent,
    SidebarComponent,
    SearchBoxComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    LoaderSpinnerComponent,
    SidebarComponent,
    SearchBoxComponent,
  ]
})
export class SharedModule { }
