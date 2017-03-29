import { Component, OnInit, Input} from '@angular/core';
import { MapReduceService } from '../map-reduce.service';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.css']
})
export class CodeEditorComponent implements OnInit {
  @Input() title: string;
  // code: string;
  fn_header: string;
  mrs: MapReduceService;

  constructor(MapReduceService: MapReduceService) {
    this.mrs = MapReduceService;
  }

  get code(): string{
    if(this.title == "Map"){
      return this.mrs.mapperCode;
    }
    else if(this.title == "Reduce"){
      return this.mrs.reducerCode;
    }
  }
  set code(c: string){
    if(this.title == "Map"){
      this.mrs.mapperCode = c;
    }
    else if(this.title == "Reduce"){
      this.mrs.reducerCode = c;
    }
  }

  ngOnInit() {
    if(this.title == "Map"){
      this.fn_header = "input_line";
    }
    else if(this.title == "Reduce"){
      this.fn_header = "intermediate_key, intermediate_values";
    }
  }

}
