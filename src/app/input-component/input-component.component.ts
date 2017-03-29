import { Component, OnInit } from '@angular/core';
import { MapReduceService } from '../map-reduce.service';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.css']
})
export class InputComponentComponent implements OnInit {

  mrs : MapReduceService;
  constructor(MapReduceService: MapReduceService) {
    this.mrs = MapReduceService;
  }
  
  get input_value(){
    return this.mrs.input;
  }
  set input_value(value : string){
    this.mrs.input = value;
  }
  ngOnInit() {

  }

}
