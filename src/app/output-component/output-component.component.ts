import { Component, OnInit } from '@angular/core';
import { MapReduceService } from '../map-reduce.service';

@Component({
  selector: 'app-output-component',
  templateUrl: './output-component.component.html',
  styleUrls: ['./output-component.component.css']
})
export class OutputComponentComponent implements OnInit {

  MapReduceService:MapReduceService
  constructor(MapReduceService:MapReduceService) {
    this.MapReduceService = MapReduceService;
  }
  get outputKeys(){
    return Object.keys(this.output);
  }
  get output(){
    return this.MapReduceService.output;
  }
  ngOnInit() {
  }

}
