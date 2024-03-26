import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{
  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;
  ctx!: CanvasRenderingContext2D | null;
  isDrawing = false;

  ngAfterViewInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    if (this.ctx) {
      this.ctx.lineCap = 'round';
      this.ctx.lineWidth =4;
    }
  }
  

  onMouseMove(event: MouseEvent): void {
    if (!this.ctx || !this.isDrawing) return;

    const rect = this.canvas.nativeElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    this.ctx.lineTo(x, y);
    this.ctx.stroke();
  }

  clearCanvas() {
    this.ctx?.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
  }

  downloadSign() {
    if (this.ctx) {
      const dataUrl = this.canvas.nativeElement.toDataURL();
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = 'signature.png';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  }
}
