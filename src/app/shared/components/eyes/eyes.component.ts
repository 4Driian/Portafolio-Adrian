import { Component, ElementRef, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-eyes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './eyes.component.html',
  styleUrls: ['./eyes.component.scss']
})
export class EyesComponent implements OnInit, OnDestroy {
  @ViewChild('eyeLeft', { static: true }) eyeLeft!: ElementRef;
  @ViewChild('eyeRight', { static: true }) eyeRight!: ElementRef;

  private mouseMoveListener?: (event: MouseEvent) => void;
  private touchMoveListener?: (event: TouchEvent) => void;
  private clickListener?: (event: MouseEvent) => void;

  ngOnInit() {
    this.setupEyeTracking();
  }

  ngOnDestroy() {
    if (this.mouseMoveListener) {
      window.removeEventListener('mousemove', this.mouseMoveListener);
    }
    if (this.touchMoveListener) {
      window.removeEventListener('touchmove', this.touchMoveListener);
    }
    if (this.clickListener) {
      window.removeEventListener('click', this.clickListener);
    }
  }

  private setupEyeTracking() {
    this.mouseMoveListener = (event: MouseEvent) => {
      const mouse = { x: event.clientX, y: event.clientY };
      this.moveEye(this.eyeLeft.nativeElement, mouse);
      this.moveEye(this.eyeRight.nativeElement, mouse);
    };

    this.touchMoveListener = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        const touch = event.touches[0];
        const mouse = { x: touch.clientX, y: touch.clientY };
        this.moveEye(this.eyeLeft.nativeElement, mouse);
        this.moveEye(this.eyeRight.nativeElement, mouse);
      }
    };

    this.clickListener = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target === this.eyeLeft.nativeElement || target === this.eyeRight.nativeElement) {
        this.blinkEye(target);
      }
    };

    window.addEventListener('mousemove', this.mouseMoveListener);
    window.addEventListener('touchmove', this.touchMoveListener);
    window.addEventListener('click', this.clickListener);
  }

  private getEye(eye: HTMLElement): HTMLElement {
    return eye.firstElementChild as HTMLElement;
  }

  private getAngle(a: number, b: number): number {
    return Math.atan(a / b);
  }

  private getHypotenuse(a: number, b: number): number {
    return Math.sqrt(a * a + b * b);
  }

  private getEyeCoordinates(eye: HTMLElement): { x: number; y: number } {
    const { x, y, width, height } = eye.getBoundingClientRect();
    return { x: x + width / 2, y: y + height / 2 };
  }

  private getMaxMovement(eye: HTMLElement): number {
    const eyeWidth = eye.getBoundingClientRect().width;
    return eyeWidth / 10;
  }

  private limitOffset(offset: { x: number; y: number }, eye: HTMLElement): { x: number; y: number } {
    const maxMovement = this.getMaxMovement(eye);
    if (this.getHypotenuse(offset.x, offset.y) <= maxMovement) {
      return { x: offset.x, y: offset.y };
    }

    const angle = this.getAngle(offset.y, offset.x);
    let x = Math.cos(angle) * maxMovement;
    let y = Math.sin(angle) * maxMovement;
    x = offset.x < 0 ? -x : x;
    y = offset.x < 0 ? -y : y;

    return { x, y };
  }

  private getEyeOffset(eye: { x: number; y: number }, mouse: { x: number; y: number }): { x: number; y: number } {
    const x = (mouse.x - eye.x) * 0.25;
    const y = (mouse.y - eye.y) * 0.25;
    return { x, y };
  }

  private moveEye(eye: HTMLElement, mouse: { x: number; y: number }) {
    const center = this.getEyeCoordinates(eye);
    const offset = this.getEyeOffset(center, mouse);
    const limitedOffset = this.limitOffset(offset, eye);

    const eyeElement = this.getEye(eye);
    eyeElement.style.transform = `translate(${limitedOffset.x}px, ${limitedOffset.y}px)`;
  }

  private blinkEye(eye: HTMLElement) {
    const eyeElement = this.getEye(eye);
    eyeElement.style.animation = 'blink 0.3s linear';
    setTimeout(() => {
      eyeElement.style.animation = '';
    }, 300);
  }
}