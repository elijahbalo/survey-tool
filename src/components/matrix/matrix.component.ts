import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.scss']
})
export class MatrixComponent implements OnInit {
@Input() columns
@Input() rows
  constructor() { }

  ngOnInit() {
  }

}
