import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WindowResizeService implements OnDestroy {
  private resizeSubject = new BehaviorSubject<boolean>(this.isMobileView());
  resize$ = this.resizeSubject.asObservable();

  constructor() {
    // Use fromEvent to create an Observable from window resize events
    if (typeof window !== "undefined"){
      fromEvent(window, 'resize')
      // Apply throttleTime to limit event frequency for performance
      .pipe(throttleTime(100)) // Emit events at most every 100ms
      .subscribe(() => this.resizeSubject.next(this.isMobileView()));
    }
  }

  isMobileView(): boolean {
    if (typeof window !== "undefined"){
      return window.matchMedia('(max-width: 768px)').matches;
    }
    else{
      return false;
    }
  }

  ngOnDestroy(): void {
    this.resizeSubject.next(false);
    this.resizeSubject.complete();
  }
}
