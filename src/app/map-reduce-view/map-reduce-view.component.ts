import { Component, OnInit } from '@angular/core';
import { MapReduceService } from '../map-reduce.service';

@Component({
  selector: 'app-map-reduce-view',
  templateUrl: './map-reduce-view.component.html',
  styleUrls: ['./map-reduce-view.component.css']
})
export class MapReduceViewComponent implements OnInit {

  constructor(MapReduceService: MapReduceService) { }

  mappers = [1,2,3,4,5,6];
  reducers = [1,2,3];
  ngOnInit() {
    // for(var i = 0; i < MapReduceService.numMappers; i++){
    //   this.mappers.push(i);
    // }
  }

}
