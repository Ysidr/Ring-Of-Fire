import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()), provideFirebaseApp(() => initializeApp({ projectId: "ring-of-fire-c5a83", appId: "1:597488621602:web:c821aaf286c51abc78527b", storageBucket: "ring-of-fire-c5a83.firebasestorage.app", apiKey: "AIzaSyDUdnN8wWDNpj-oPl3hmj3ZDl0ORAxXOgc", authDomain: "ring-of-fire-c5a83.firebaseapp.com", messagingSenderId: "597488621602", projectNumber: "597488621602", version: "2" })), provideFirestore(() => getFirestore())]
};
