import { Injectable } from '@angular/core';



@Injectable()
export class MapReduceService {

  constructor() {
    this.run();
  }

  numMappers = 5;
  numReducers = 3;

  _mapperCode = `words = input_line.split(" ");
for(var w = 0; w < words.length; w++){
  this.emit_intermediate(words[w].toLowerCase(), 1);
}`;
  _reducerCode = `count = 0;
this.emit(intermediate_key, intermediate_values.length);`;

  _input = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet eros porta, elementum nisi et, sodales eros. Fusce nec quam at turpis placerat eleifend. Curabitur auctor ligula in scelerisque interdum. Praesent imperdiet non lectus at blandit. Integer ut metus sed eros hendrerit porttitor id laoreet purus. Maecenas in ante eget mi elementum tempor. Suspendisse odio neque, ultrices eget neque a, bibendum ornare sapien. Duis suscipit arcu urna, id auctor elit iaculis quis. Sed neque elit, cursus et ante quis, accumsan maximus massa. Nunc et velit sit amet risus eleifend tristique. Nunc purus ex, tristique ut iaculis eget, facilisis eget libero. Praesent bibendum auctor odio sed vestibulum.", "Etiam feugiat consectetur mauris sodales porttitor. Suspendisse luctus est non massa bibendum efficitur. Etiam eu fermentum ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum ligula purus, molestie vel justo non, volutpat mollis metus. Sed condimentum pharetra orci, ut egestas libero vestibulum ac. Curabitur malesuada mollis erat, ac tristique justo accumsan in. Fusce mattis metus eget lacus tincidunt ornare. Phasellus nec velit vitae orci tempus tempor. Donec dapibus dictum tortor, et pulvinar lectus dictum eu. Ut pharetra urna neque, vel laoreet odio sodales eget.", "Donec efficitur ex vel massa egestas, quis aliquet justo scelerisque. Ut consectetur nunc sed turpis interdum ultricies. Etiam ut ante ornare, vehicula ante id, imperdiet nisl. Nullam eros sem, varius a nisi eu, vulputate eleifend nunc. Praesent maximus suscipit augue vel dictum. Quisque fringilla purus vitae ante dignissim, a vestibulum ante lacinia. Curabitur consequat faucibus augue eu placerat. Maecenas tincidunt enim ut turpis luctus, a tristique tortor dignissim. Donec posuere metus vel libero dignissim viverra. In scelerisque purus sed posuere interdum. Cras fermentum pulvinar risus, id scelerisque ipsum ultricies eu. Donec a ultrices arcu. Morbi elit justo, lobortis pellentesque rhoncus vitae, porta a orci. Aenean rhoncus sit amet risus a lacinia.", "In tincidunt semper magna id mattis. Proin varius congue imperdiet. Aliquam blandit vulputate tortor a imperdiet. Sed mattis ex non rutrum rutrum. Aenean euismod euismod nisi ut convallis. Vivamus sit amet interdum nunc. Nulla ullamcorper nisl molestie, congue justo ut, luctus purus. Vivamus venenatis imperdiet interdum. Morbi quis lobortis justo. Nulla in sem non tortor tristique dapibus volutpat a nibh. Maecenas ut nunc malesuada, efficitur orci at, dignissim neque. Praesent scelerisque in orci non varius.", "Aliquam eleifend aliquet ligula, et tincidunt leo tempor nec. Praesent ornare, lorem at commodo pulvinar, ante augue scelerisque nunc, vitae pretium mi lacus in diam. Nunc nec nisl eget justo hendrerit tristique non ac arcu. Fusce condimentum tristique efficitur. Duis interdum libero quam, et gravida quam elementum gravida. Duis a sodales purus. Donec mi est, varius sit amet sagittis eget, suscipit ac tortor. Duis faucibus ante non vehicula mattis. Nam mi dui, molestie id euismod at, malesuada id mi. Aliquam erat volutpat. Suspendisse at diam vel elit semper varius."];



  getMapper(ctx) : any {
    try{
      var m = new Function("input_line", this._mapperCode)
      m = m.bind(ctx);
      // m.prototype = ctx;
      return m;
    } catch (e){
      return false;
    }
  };
  getReducer(ctx) : any {
    return new Function("intermediate_key", "intermediate_values", this._reducerCode).bind(ctx);
  };

  get input(){
    return this._input.join("\n");
  }
  set input(value: string){
    console.log(value);
    this._input = value.split('\n');
    this.run();
  }

  set mapperCode(value: string){
    this._mapperCode = value;
    this.run();
  }

  get mapperCode(){
    return this._mapperCode;
  }

  set reducerCode(value: string){
    this._reducerCode = value;
    this.run();
  }

  get reducerCode(){
    return this._reducerCode;
  }
  _keys : string[];
  get shuffle_keys(): string[]{
    return this._keys;
  }

  _output : any;
  get output(){
    if(this._output === undefined){
      this.run()
    }
    return this._output;
  }


  run():void{
    var values = {}
    let mapper_context = {
      emit_intermediate: function(key, value){
        if (values[key] === undefined){
          values[key] = [];
        }
        values[key].push(value);
      }
    }
    let mapper = this.getMapper(mapper_context);

    for(var i = 0; i < this._input.length; i++){
      // console.log("running mapper with input:", this._input[i]);
      var d: any;
      try{
        d = JSON.parse(this._input[i]);
      } catch(e){
        d = this._input[i];
      } finally{
        try{
          mapper(d);
        } catch(e){
          console.warn(e);
        }
      }

    }

    this._keys = Object.keys(values);

    var output = {};
    let reducer_context = {
      emit: function(key, value){
        output[key] = value;
      }
    }
    let reducer = this.getReducer(reducer_context);

    for(var k in values){
        try{
          reducer(k, values[k]);
        } catch(e){
          console.warn(e);
        }
    }

    this._output = output;

  }
}
