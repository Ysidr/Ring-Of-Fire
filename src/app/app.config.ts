import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import {provideFirestore, getFirestore} from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDUdnN8wWDNpj-oPl3hmj3ZDl0ORAxXOgc",
  authDomain: "ring-of-fire-c5a83.firebaseapp.com",
  projectId: "ring-of-fire-c5a83",
  storageBucket: "ring-of-fire-c5a83.firebasestorage.app",
  messagingSenderId: "597488621602",
  appId: "1:597488621602:web:5c6e78064fe1655978527b"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore())
  ]
};
