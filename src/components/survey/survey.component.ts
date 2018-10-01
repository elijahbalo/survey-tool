import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../../services/survey.-service'
@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {
  surveys =[]
  title=""
  constructor(private surveyService: SurveyService) { }

  ngOnInit() {
   this.getSurveyById(1,"Survey 1") // making survey 1 appear on the page by default
  }
  
  getSurveyById(id,title){
    let surveys = []
    this.title = title
    this.surveyService.getSurveyById(id).subscribe(response => {
      response.map(elem => {
      elem.elements.map(element => surveys.push(element))

      })
  
      }
          )
          this.surveys = surveys
  }

  getAllSurveys(title){
    let surveys = []
    this.title=title
    this.surveyService.getAllSurveys().subscribe(response => {
      response.map(elem => {
      elem.elements.map(element => surveys.push(element))

      })
  
      }
          )
          this.surveys = surveys
  }
}
