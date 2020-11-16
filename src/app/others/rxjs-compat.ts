import { Observable } from 'rxjs';
import { _finalize } from './finalize';

export * from './finalize';

(Observable as any).prototype.finalize = _finalize;

declare module 'rxjs/internal/Observable' {
  interface Observable<T> {
    finalize: typeof _finalize;
  }
}
