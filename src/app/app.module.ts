import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { EducationComponent } from './education/education.component';
import { CoddingComponent } from './codding/codding.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    CoddingComponent,
    HobbiesComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: HomepageComponent },
      {path: 'education', component: EducationComponent,},
      {path: 'codding', component: CoddingComponent },
      {path: 'hobbies', component: HobbiesComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
