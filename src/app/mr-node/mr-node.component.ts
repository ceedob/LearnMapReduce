import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-mr-node',
  templateUrl: './mr-node.component.html',
  styleUrls: ['./mr-node.component.css'],

})
export class MrNodeComponent implements OnInit {

  @Input() fn: string;

  constructor() { }

  ngOnInit() {
  }

}
