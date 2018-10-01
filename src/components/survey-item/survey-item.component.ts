import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-survey-item',
  templateUrl: './survey-item.component.html',
  styleUrls: ['./survey-item.component.scss']
})
export class SurveyItemComponent implements OnInit {
  @Input() survey
  radio = false
  text = false
  select = false
  rating = false
  matrix = false

  matrixx = { options: '' };
  constructor() { }

  ngOnInit() {
    this.checkType(this.survey.type)
  }

  checkType(type){
    if (type == "radiogroup"){
      this.radio = true
    }
    if (type == "matrix"){
      this.matrix = true
    }
    if (type == "text"){
      this.text = true
    }
    if (type == "dropdown"){
      this.select = true
    }
    if (type == "rating"){
      this.rating = true
    }
  }

}
