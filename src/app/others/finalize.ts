import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

export function _finalize<T>(this: Observable<T>, callback: () => void): Observable<T> {
  return finalize(callback)(this) as Observable<T>;
}
