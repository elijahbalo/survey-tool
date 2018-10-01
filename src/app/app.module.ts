import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LandingPageComponent} from '../components/landing-page/landing-page.component'
import { SurveyComponent } from '../components/survey/survey.component'
import { SurveyItemComponent } from '../components/survey-item/survey-item.component'
import { RadioComponent } from '../components/radio/radio.component'
import { DropdownComponent} from '../components/dropdown/dropdown.component'
import { MatrixComponent } from '../components/matrix/matrix.component'
import { TextComponent } from '../components/text/text.component'
import { RatingsComponent } from '../components/ratings/ratings.component'
import { AppComponent } from './app.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.router';
import { SurveyService } from '../services/survey.-service'
import { HttpModule, JsonpModule } from '@angular/http'; 


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SurveyComponent,
    SurveyItemComponent,
    RadioComponent,
    DropdownComponent,
    MatrixComponent,
    TextComponent,
    RatingsComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    NgxPaginationModule             
  ],
  providers: [SurveyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
