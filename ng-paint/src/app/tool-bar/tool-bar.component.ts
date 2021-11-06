import { Component, OnInit } from '@angular/core';
import { Tool, tools } from '../tools';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss'],
})
export class ToolBarComponent implements OnInit {
  tools = tools;
  public activeTool: Tool = Tool.Rect;
  constructor() {}

  ngOnInit(): void {}
}
