import { asyncScheduler, Observable, scheduled } from 'rxjs';
import { map, mergeAll, scan } from 'rxjs/operators';

function model<T, V>(project: Observable<T>, key: string): Observable<(vm: V) => V & { [key: string]: T }> {
  return project.pipe(map(data => (vm: V) => ({ ...vm, [key]: data })));
}

export function buildViewModel<V, T>(observables: { [key: string]: Observable<T> }, initial?: V): Observable<V | undefined> {
  return scheduled(
    Object.entries(observables).map(([key, observable]) => model<T, V>(observable, key)),
    asyncScheduler,
  ).pipe(
    mergeAll(),
    scan((vm: V | undefined, mutationFn: (vm: V) => V) => mutationFn(vm as V), initial),
  );
}