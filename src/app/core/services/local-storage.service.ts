import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  // Save data to localStorage
  setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  // Retrieve data from localStorage
  getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  // Remove data from localStorage
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  // Clear all localStorage data
  clear(): void {
    localStorage.clear();
  }
}
