import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    AppComponent,
    AboutMeComponent,
    ResumeComponent,
    ContactMeComponent,
    ProjectsComponent,
    DropdownDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
