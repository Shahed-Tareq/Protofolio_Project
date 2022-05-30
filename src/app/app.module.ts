import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{MatButtonModule} from '@angular/material/button'
import {MatToolbarModule} from '@angular/material/toolbar'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AboutComponent } from './bio/about/about.component';
import { ImageComponent } from './bio/image/image.component';
import { EducationComponent } from './pages/education/education.component';
import { ExperianceComponent } from './pages/experiance/experiance.component';
import { ExpPart2Component } from './pages/exp-part2/exp-part2.component';
import { EducationParentComponent } from './pages/education-parent/education-parent.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { CourPart2Component } from './pages/cour-part2/cour-part2.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProPart2Component } from './pages/pro-part2/pro-part2.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { FullSkillsComponent } from './pages/full-skills/full-skills.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LanguageComponent } from './pages/language/language.component';
import { Part1Component } from './pages/part1/part1.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ImageComponent,
    EducationComponent,
    ExperianceComponent,
    ExpPart2Component,
    EducationParentComponent,
    CoursesComponent,
    CourPart2Component,
    ProjectsComponent,
    ProPart2Component,
    SkillsComponent,
    FullSkillsComponent,
    ContactComponent,
    LanguageComponent,
    Part1Component,
   
 
  ],
  imports:[
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
