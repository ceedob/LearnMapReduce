import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.css']
})
export class CodeEditorComponent implements OnInit {
  @Input() title: string;
  code: string;
  fn_header: string;
  constructor() { }

  ngOnInit() {
    if(this.title == "Map"){
      this.fn_header = "input_key, input_value";
      this.code = `words = input_value.split();
for(var w = 0; w < words.length; w++){
    emit_intermediate(words[w], 1);
}`;
    }
    else if(this.title == "Reduce"){
      this.fn_header = "intermediate_key, intermediate_values";
      this.code = `result = 0;
for(var i = 0; i < intermediate_values.length; i++){
    result += intermediate_values[i];
}
emit(intermediate_key, result);`;
    }
  }

}
