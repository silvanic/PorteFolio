import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class I18nService {
  private translations: any = {};
  private currentLanguage = 'fr';
  private translationsLoaded = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  loadTranslations(language: string = 'fr'): Observable<any> {
    return this.http.get(`/assets/i18n/${language}.json`).pipe(
      map((translations) => {
        this.translations = translations;
        this.currentLanguage = language;
        this.translationsLoaded.next(true);
        return translations;
      })
    );
  }

  getTranslations(): Observable<any> {
    return this.translationsLoaded.asObservable().pipe(
      map(() => this.translations)
    );
  }

  get(key: string, defaultValue?: string): string {
    const keys = key.split('.');
    let value: any = this.translations;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return defaultValue || key;
      }
    }

    return typeof value === 'string' ? value : defaultValue || key;
  }

  getAsObservable(key: string, defaultValue?: string): Observable<string> {
    return this.translationsLoaded.asObservable().pipe(
      map(() => this.get(key, defaultValue))
    );
  }

  getNestedObject(key: string): any {
    const keys = key.split('.');
    let value: any = this.translations;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return null;
      }
    }

    return value;
  }

  getNestedObjectAsObservable(key: string): Observable<any> {
    return this.translationsLoaded.asObservable().pipe(
      map(() => this.getNestedObject(key))
    );
  }

  isLoaded(): boolean {
    return this.translationsLoaded.value;
  }
}
