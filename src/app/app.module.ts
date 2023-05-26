import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BreadcrumbsComponent } from './layouts/breadcrumbs/breadcrumbs.component';
import { ContentComponent } from './layouts/content/content.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { MainadminComponent } from './layouts/mainadmin/mainadmin.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BreadcrumbsComponent,
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    MainadminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
