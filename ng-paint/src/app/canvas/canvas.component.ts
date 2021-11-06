import { Component, OnInit } from '@angular/core';
import Konva from 'konva';
import { Layer } from 'konva/lib/Layer';
import { Line } from 'konva/lib/shapes/Line';
import { Stage } from 'konva/lib/Stage';

enum Tool {
  Rect,
}

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent implements OnInit {
  stage: Stage | undefined = undefined;
  private width = 500;
  private height = 400;
  tool: Tool = Tool.Rect;

  constructor() {}

  ngOnInit(): void {
    this.stage = new Konva.Stage({
      container: 'container', // id of container <div>
      width: this.width,
      height: this.height,
    });
    this.redraw();
  }

  redraw() {
    if (this.stage === undefined) return;
    let stage: Stage = this.stage;
    let layer: Layer = new Konva.Layer();

    // create our shape
    let circle = new Konva.Circle({
      x: stage.width() / 2,
      y: stage.height() / 2,
      radius: 70,
      fill: '#cbc',
      stroke: '#757',
      strokeWidth: 4,
    });

    let rect = new Konva.Rect({
      x: 0,
      y: 0,
      width: 20,
      height: 20,
      stroke: '#555',
      strokeWidth: 2,
      shadowOffsetX: 10,
      shadowOffsetY: 10,
      shadowBlur: 20,
      opacity: 0.5,
      dash: [2, 2],
      draggable: true,
    });

    // add the shape to the layer
    layer.add(
      new Konva.Rect({
        x: 0,
        y: 0,
        width: this.width,
        height: this.height,
        fill: '#fff',
      })
    );
    layer.add(circle);
    layer.add(rect);

    let isPaint = false;
    let lastLine: Line;

    stage.on('mousedown touchstart', function (e) {
      isPaint = true;
      let pos = stage.getPointerPosition() || { x: 0, y: 0 };
      lastLine = new Konva.Line({
        stroke: '#4fa896',
        strokeWidth: 5,
        globalCompositeOperation: 'source-over',
        // round cap for smoother lines
        lineCap: 'round',
        // add point twice, so we have some drawings even on a simple click
        points: [pos.x, pos.y, pos.x, pos.y],
      });
      layer.add(lastLine);
    });

    stage.on('mouseup touchend', function () {
      isPaint = false;
    });

    stage.on('mousemove touchmove', function (e) {
      if (!isPaint) {
        return;
      }

      // prevent scrolling on touch devices
      e.evt.preventDefault();

      const pos = stage.getPointerPosition() || { x: 0, y: 0 };
      var newPoints = lastLine.points().concat([pos.x, pos.y]);
      lastLine.points(newPoints);
    });

    // add the layer to the stage
    stage.add(layer);

    // draw the image
    layer.draw();
  }
}
