import { Component, OnInit } from '@angular/core';
import Konva from 'konva';
import { Stage } from 'konva/lib/Stage';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent implements OnInit {
  stage: Stage | undefined = undefined;
  constructor() {}

  ngOnInit(): void {
    this.stage = new Konva.Stage({
      container: 'container', // id of container <div>
      width: 500,
      height: 500,
    });
    this.redraw();
  }

  redraw() {
    if (this.stage === undefined) return;
    let stage = this.stage;
    let layer = new Konva.Layer();

    // create our shape
    let circle = new Konva.Circle({
      x: stage.width() / 2,
      y: stage.height() / 2,
      radius: 70,
      fill: 'red',
      stroke: 'black',
      strokeWidth: 4,
    });

    // add the shape to the layer
    layer.add(circle);

    // add the layer to the stage
    stage.add(layer);

    // draw the image
    layer.draw();
  }
}
