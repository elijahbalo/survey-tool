
import { Injectable } from '@angular/core';
//import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs'

@Injectable()
export class SurveyService {
  // Resolve HTTP using the constructor
  constructor(private http: Http) { }
  // private instance variable to hold base url
  private Url = 'http://api.survey.services.joulecma.ca:8080/surveys'


  getSurveyById(id) {
    return this.http.get(this.Url + '?surveyId='+id)
    .pipe(map((res: Response) => res.json()))
  } 

  getAllSurveys() {
    return this.http.get(this.Url)
      .pipe(map((res: Response) => res.json()))
  }
 

}