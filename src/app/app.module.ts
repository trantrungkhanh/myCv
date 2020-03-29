import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { NavComponent } from './body/nav/nav.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './body/about/about.component';
import { ImgAboutComponent } from './body/img-about/img-about.component';
import { EducationComponent } from './body/education/education.component';
import { ImgEducationComponent } from './body/img-education/img-education.component';
import { ExpComponent } from './body/exp/exp.component';
import { ImgExpComponent } from './body/img-exp/img-exp.component';
import { SkillsComponent } from './body/skills/skills.component';
import { ImgSkillsComponent } from './body/img-skills/img-skills.component';
import { ProjectComponent } from './body/project/project.component';
import { ImgProjectComponent } from './body/img-project/img-project.component';
import { HomeComponent } from './body/home/home.component';
import { ImgHomeComponent } from './body/img-home/img-home.component';

const appRoutes : Routes = [
  {
    path: '',
    redirectTo: '/home/(abc:home//as:home)',
    pathMatch: 'full',
  },
  {
    path: 'home',
    children:[
      {
        path: 'home',
        component: HomeComponent,
        outlet: 'abc'
      },
      {
        path: 'home',
        component: ImgHomeComponent,
      outlet: 'as'
      }
    ]
  },
  {
    path: 'about',
    children:[
      {
        path: 'about',
        component: AboutComponent,
        outlet: 'abc'
      },
      {
        path: 'about',
        component: ImgAboutComponent,
      outlet: 'as'
      }
    ]
  },
  {
    path: 'education',
    children:[
      {
        path: 'education',
        component: EducationComponent,
        outlet: 'abc'
      },
      {
        path: 'education',
        component: ImgEducationComponent,
      outlet: 'as'
      }
    ]
  },
  {
    path: 'skills',
    children:[
      {
        path: 'skills',
        component: SkillsComponent,
        outlet: 'abc'
      },
      {
        path: 'skills',
        component: ImgSkillsComponent,
      outlet: 'as'
      }
    ]
  },
  {
    path: 'exp',
    children:[
      {
        path: 'exp',
        component: ExpComponent,
        outlet: 'abc'
      },
      {
        path: 'exp',
        component: ImgExpComponent,
      outlet: 'as'
      }
    ]
  },
  {
    path: 'project',
    children:[
      {
        path: 'project',
        component: ProjectComponent,
        outlet: 'abc'
      },
      {
        path: 'project',
        component: ImgProjectComponent,
      outlet: 'as'
      }
    ]
  }
];
@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    NavComponent,
    AboutComponent,
    ImgAboutComponent,
    EducationComponent,
    ImgEducationComponent,
    ExpComponent,
    ImgExpComponent,
    SkillsComponent,
    ImgSkillsComponent,
    ProjectComponent,
    ImgProjectComponent,
    HomeComponent,
    ImgHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


