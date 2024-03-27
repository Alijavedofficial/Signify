import { AfterViewInit, Component, ElementRef, Input, OnInit, Signal, ViewChild, signal } from '@angular/core';
import { fabric } from 'fabric';

@Component({
  selector: 'app-signcanvas',
  templateUrl: './signcanvas.component.html',
  styleUrl: './signcanvas.component.css'
})
export class SigncanvasComponent implements OnInit {
  @Input() darkModeSignal!: Signal<boolean>;
  canvas!: fabric.Canvas;
  brushColor:string = '#000000';
  brushSize:number = 4
  backgroundColor:string = '#ffffff';
  isEraserMode:boolean = false

  ngOnInit() {
    this.canvas = new fabric.Canvas('canvas', {
    
    });
   
    this.canvas.freeDrawingBrush.width = 4;
    this.canvas.isDrawingMode = true;
    

    this.updateBrushColor();
    this.updateBrushSize()
    this.updateBackgroundColor()
    
   }

   updateBrushColor() {
    
    if (this.canvas) {
      this.canvas.freeDrawingBrush.color = this.brushColor;
    }
  }

  updateBrushSize(){
    if (this.canvas) {
      this.canvas.freeDrawingBrush.width = this.brushSize;
    }
  }

  updateBackgroundColor(){
    if (this.canvas) {
      this.canvas.backgroundColor = this.backgroundColor;
    }
  }

   clearCanvas() {
    if (this.canvas) {
       this.canvas.clear();
    }
    this.updateBackgroundColor()
   }
   
editMode() {
  if(this.canvas) {
    this.canvas.isDrawingMode = false;
}
}
   eraserMode() {
    if(this.canvas) {
    this.isEraserMode = !this.isEraserMode;
    if (this.isEraserMode) {
      // Set eraser mode
      this.canvas.isDrawingMode = true;
      this.canvas.freeDrawingBrush.color = this.backgroundColor;
      this.canvas.freeDrawingBrush.width = this.brushSize; 
    } else {
      // Set drawing mode
      this.canvas.isDrawingMode = true;
      this.canvas.freeDrawingBrush.color = this.brushColor;
      this.canvas.freeDrawingBrush.width = this.brushSize;
    }
  }
  }

   downloadSign() {
 
    const dataUrl = this.canvas.toDataURL({ format: 'png' });
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = 'signature.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
 
}




   
}
