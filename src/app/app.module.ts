import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MapReduceViewComponent } from './map-reduce-view/map-reduce-view.component';
import { CodeEditorComponent } from './code-editor/code-editor.component';
import { MrNodeComponent } from './mr-node/mr-node.component';

import { MapReduceService } from './map-reduce.service';
import { InputComponentComponent } from './input-component/input-component.component';
import { ShuffleComponentComponent } from './shuffle-component/shuffle-component.component';
import { OutputComponentComponent } from './output-component/output-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MapReduceViewComponent,
    CodeEditorComponent,
    MrNodeComponent,
    InputComponentComponent,
    ShuffleComponentComponent,
    OutputComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MapReduceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
