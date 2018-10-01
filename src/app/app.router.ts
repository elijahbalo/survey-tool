
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent} from '../components/landing-page/landing-page.component'
import { SurveyComponent } from '../components/survey/survey.component'
const routes: Routes = [
  { path: '', redirectTo: 'LandingPage', pathMatch: 'full' },
  { path: 'LandingPage', component: LandingPageComponent },
  { path: 'Survey', component: SurveyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}