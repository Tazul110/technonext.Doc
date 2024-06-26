import { Injectable } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppResizeService {
  private resizeObservable$!: Observable<Event>;

  constructor() {
    if (typeof window !== "undefined") {
      this.resizeObservable$ = fromEvent(window, 'resize').pipe(
        debounceTime(200),
        map((event: Event) => event)
      );
    }
  }

  /**
   * Get the resize observable
   * @returns Observable<Event>
   */
  getResizeObservable(): Observable<Event> {
    return this.resizeObservable$;
  }
}
