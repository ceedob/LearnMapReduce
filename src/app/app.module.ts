import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MapReduceViewComponent } from './map-reduce-view/map-reduce-view.component';
import { CodeEditorComponent } from './code-editor/code-editor.component';
import { MrNodeComponent } from './mr-node/mr-node.component';

@NgModule({
  declarations: [
    AppComponent,
    MapReduceViewComponent,
    CodeEditorComponent,
    MrNodeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
