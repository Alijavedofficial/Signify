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
  brushColor = 'black';

  ngOnInit() {
    this.canvas = new fabric.Canvas('canvas', {
      width: 800,
      height: 400,
    });
   
    this.canvas.freeDrawingBrush.width = 4;
    this.canvas.isDrawingMode = true;
    const isDarkMode = this.darkModeSignal()

    this.updateBrushColor(isDarkMode);
    
    // Listen for changes in dark mode signal
    
   }

   updateBrushColor(isDarkMode: boolean) {
    this.brushColor = isDarkMode ? 'white' : 'black';
    if (this.canvas) {
      this.canvas.freeDrawingBrush.color = this.brushColor;
    }
  }

   clearCanvas() {
    if (this.canvas) {
       this.canvas.clear();
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
