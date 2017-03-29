import { Component, OnInit } from '@angular/core';
import { MapReduceService } from '../map-reduce.service';

@Component({
  selector: 'app-shuffle-component',
  templateUrl: './shuffle-component.component.html',
  styleUrls: ['./shuffle-component.component.css']
})
export class ShuffleComponentComponent implements OnInit {

  MapReduceService: MapReduceService;
  constructor(MapReduceService: MapReduceService) {
    this.MapReduceService = MapReduceService;
  }
  get keys(){
    return this.MapReduceService.shuffle_keys;
  }
  ngOnInit() {

  }


}
