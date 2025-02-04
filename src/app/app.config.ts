import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, withInterceptorsFromDi, provideHttpClient, withFetch } from '@angular/common/http';
import { HttpInterceptorBasicAuthService } from './service/http/http-interceptor-basic-auth.service';



export const appConfig: ApplicationConfig = {
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorBasicAuthService, multi: true},
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi(), withFetch())  // Ensure that HttpClient is provided correctly
  ]
};


