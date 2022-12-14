import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BaseUrlInterceptor } from './base-url.interceptor';

export const interceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true },
];